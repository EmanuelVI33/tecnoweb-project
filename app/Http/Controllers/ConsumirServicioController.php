<?php

namespace App\Http\Controllers;

use App\Http\Controllers\PagosFacil\mPaquetePagoFacil;
use App\Models\Empleado;
use App\Models\User;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class ConsumirServicioController extends Controller
{
    private $pcTokenService = "6b761417cc644fe69773dc2114b08d74c0e333a7c64a9d60ced3eb1b5ccd93e83bc8f601284fc35eee7f983e663d375c58f835b94a2aa558e8e2f9693885a2158c0d0ca3e8f02d66fabca3bd3bb8706eba93c7bf3d0a2000b134fcc3dfac4cd1f2ad678c987c65941109707c941f0d63c001f7b1947cf874b709d496c42f317f";
    private $pcTokenSecret = "F69185A92C8C4F7D90B40DE3";

    public function RecolectarDatos(Request $request)
    {
        //validar datos

        //meter a la base de datos
        // dd($request->all());

        $laPedidoDetalle = [];
        $lnLength = count($request->cod_oem);
        $lnMontoTotal = 0;
        for ($i = 0; $i < $lnLength; $i++) {
            $laPedidoDetalle[] = [
                "Serial" => $i + 1,
                "Producto" => $request->cod_oem[$i],
                "Cantidad" => $request->cantidad[$i],
                "Precio" => $request->precio[$i],
                "Descuento" => "0",
                "Total" => $request->precio[$i] * $request->cantidad[$i]
            ];
            $lnMontoTotal += $request->precio[$i] * $request->cantidad[$i];
        }


        try {
            $lcComerceID           = "d029fa3a95e174a19934857f535eb9427d967218a36ea014b70ad704bc6c8d1c";
            $lnMoneda              = 2;
            $lnTelefono            = $request->telefono;
            $lcNombreUsuario       = $request->cliente;
            $lnCiNit               = $request->ci_cliente;
            $lcNroPago             = "test-" . rand(100000, 999999);  //se lo puede poner una venta
            $lnMontoClienteEmpresa = $lnMontoTotal;
            $lcCorreo              = "ccuellar260@gmail.com";
            $lcUrlCallBack         = "https://cristiancuellar.site/api/venta/store/realizarpago/callback";
            $lcUrlReturn           = "https://cristiancuellar.site/api/pagoExitoso";
            // $laPedidoDetalle       = $request->taPedidoDetalle; //poner detalle
            $lcUrl                 = "";

            $loClient = new Client();

            if ($request->tnTipoServicio == 1) {
                //generar qr
                $lcUrl = "https://serviciostigomoney.pagofacil.com.bo/api/servicio/generarqrv2";
            } elseif ($request->tnTipoServicio == 2) {
                //realizar pago
                $lcUrl = "https://serviciostigomoney.pagofacil.com.bo/api/servicio/realizarpagotigomoneyv2";
            }

            $laHeader = [
                'Accept' => 'application/json'
            ];

            $laBody   = [
                "tcCommerceID"          => $lcComerceID,
                "tnMoneda"              => $lnMoneda,
                "tnTelefono"            => $lnTelefono,
                'tcNombreUsuario'       => $lcNombreUsuario,
                'tnCiNit'               => $lnCiNit,
                'tcNroPago'             => $lcNroPago,
                "tnMontoClienteEmpresa" => $lnMontoClienteEmpresa,
                "tcCorreo"              => $lcCorreo,
                'tcUrlCallBack'         => $lcUrlCallBack,
                "tcUrlReturn"           => $lcUrlReturn,
                'taPedidoDetalle'       => $laPedidoDetalle
            ];



            $loResponse = $loClient->post($lcUrl, [
                'headers' => $laHeader,
                'json' => $laBody
            ]);

            // dd($loResponse->getBody()->getContents());

            $laResult = json_decode($loResponse->getBody()->getContents());
            $lnNroTran = explode(';', $laResult->values)[0];



            if ($request->tnTipoServicio == 1) {

                $laValues = explode(";", $laResult->values)[1];
                // dd($laValues);

                $laQrImage = "data:image/png;base64," . json_decode($laValues)->qrImage;

                // echo '<img src="' . $laQrImage . '" alt="Imagen base64">';

                return redirect()->route('PagoQr')->with([
                    'tnNroVenta' => $lnNroTran,
                    'tcQRImage' => $laQrImage,
                ]);
            } elseif ($request->tnTipoServicio == 2) {

                //redirigri y

                // dd($laResult);
                return redirect()->route('PagoQr')->with([
                    'tnTransaccion' =>  $laResult->values,
                    'tcMensaje' => $laResult->message,
                ]);
            }
        } catch (\Throwable $th) {

            return $th->getMessage() . " - " . $th->getLine();
        }
    }

    public function ConsultarEstado(Request $request)
    {
        $lnTransaccion = $request->tnTransaccion;

        $loClientEstado = new Client();

        $lcUrlEstadoTransaccion = "https://serviciostigomoney.pagofacil.com.bo/api/servicio/consultartransaccion";

        $laHeaderEstadoTransaccion = [
            'Accept' => 'application/json'
        ];

        $laBodyEstadoTransaccion = [
            "TransaccionDePago" => $lnTransaccion
        ];

        $loEstadoTransaccion = $loClientEstado->post($lcUrlEstadoTransaccion, [
            'headers' => $laHeaderEstadoTransaccion,
            'json' => $laBodyEstadoTransaccion
        ]);

        $laResultEstadoTransaccion = json_decode($loEstadoTransaccion->getBody()->getContents());

        $texto = '<h5 class="text-center mb-4">Estado Transacción: ' . $laResultEstadoTransaccion->values->messageEstado . '</h5><br>';

        return response()->json(['message' => $texto]);
    }

    public function urlCallback(Request $request)
    {
        $Venta = $request->input("PedidoID");
        $Fecha = $request->input("Fecha");
        $NuevaFecha = date("Y-m-d", strtotime($Fecha));
        $Hora = $request->input("Hora");
        $MetodoPago = $request->input("MetodoPago");
        $Estado = $request->input("Estado");
        $Ingreso = true;

        try {
            $arreglo = ['error' => 0, 'status' => 1, 'message' => "Pago realizado correctamente.", 'values' => true];
        } catch (\Throwable $th) {
            $arreglo = ['error' => 1, 'status' => 1, 'messageSistema' => "[TRY/CATCH] " . $th->getMessage(), 'message' => "No se pudo realizar el pago, por favor intente de nuevo.", 'values' => false];
        }

        return response()->json($arreglo);
    }

    public function PagoQr()
    {
        // Obtener los datos de la sesión
        // $tnNroVenta = session('tnNroVenta');


        $tcQRImage = '';
        $tnTransaccion = '';
        $tcMensaje = '';
        $lnNroTran = '';

        if (session('tcQRImage') && session('tnNroVenta')) {
            $tcQRImage = session('tcQRImage');
            $lnNroTran = session('tnNroVenta');
        } else {
            if (session('tnTransaccion') && session('tcMensaje')) {
                $tnTransaccion = session('tnTransaccion');
                $tcMensaje = session('tcMensaje');
            }
        }



        return view('VistasVenta.MetodoPagoQr', compact(
            'tcQRImage',
            'tnTransaccion',
            'tcMensaje',
            'lnNroTran',
        ));
    }

    public function ActualizarTokken(Request $request)
    {

        $loPaquete = new  mPaquetePagoFacil(1, 0, "Error al actualizar el tokken", null);
        //verificar si el tokeen esta vencido
        // $response = Http::post('https://apirest.facturatech.com.bo/api/login', [
        //     'TokenService' => $this->pcTokenService,
        //     'TokenSecret' => $this->pcTokenSecret
        // ]);

        // $user = User::where('id', '1')->firt();
        $user = auth()->user();

        // $user->tokken_facturacion = $response->json()['values'];
        // $user->save;

        return response()->json(
            [
                'saludo' => 'hola',
                'user' => $user,
                'token' => $request->all()
            ]
        );

        // if ($response->json()['error'] == 0 && $response->json()['status'] == 1) {
        //     //actualizar el tokken
        //     $user = auth()->user();
        //     $user->tokken_facturacion = $response->json()['values'];
        //     $user->save();

        //     $loPaquete->error = 0;
        //     $loPaquete->status = 1;
        //     $loPaquete->message = "Tokken actualizado correctamente";
        // }

        return response()->json($loPaquete);
    }


    public static function RealizarFacturacion(Request $request)
    {

        $loPaquete = new  mPaquetePagoFacil(1, 0, "Error al realizar la facturacion..", null);

        try {

            //verificar si se obtuvo el pago
            // dd(now('Y', 'd', 'm'));
            // $tnNotaVenta = 'CR1201';
            $tnNotaVenta = $request->input('tnNotaVenta');
            //sacar las venta de la base de datos
            $lcConsultaVenta = "
            select v.* , c.nombre as cliente, c.telefono
            from ventas as v, clientes as c
            where v.nota_venta = '$tnNotaVenta'
            and v.ci_cliente = c.ci
            ";

            $loVenta = DB::select($lcConsultaVenta);
            if (count($loVenta) == 0) {
                $loPaquete->message = "No se encontro la venta";
                return response()->json($loPaquete);
            }

            $lnVentaID = $loVenta[0]->id;

            // dd($loVenta);
            //sucrca 0 , pount de venta 23
            $lcConsultaDetalles = "
            select d.*, p.nombre, p.cod_oem, p.precio_venta
            from detalle_ventas as d, ventas as v, productos as p
            where d.id_venta = v.id
            and d.id_producto = p.id
            and v.id = '$lnVentaID'
        ";
            $loDetalleVenta = DB::select($lcConsultaDetalles);


            //validar los datos




            // dd($loDetalleVenta, $loVenta);

            $lcCredencial = 'eeca91fd439b6d5e827e8fda7fee35046f2def93508637483f6be8a2df7a4392';
            $lcNit = '';
            $lcActividad = '';
            $lcTipo = '35';
            $lcCodigoProductoSiat = '';

            // $lcRazonSocial = $loVenta[0]->cliente; //nombre de la empresa
            $lcDireccion = 'Av Bush #553'; //direccion de la empresa
            // $lcLocalidad = 'Santa Cruz'; //localidad de la empresa
            // $lcTelefonos = $loVenta[0]->telefono; //telefono de la empresa

            // $tcEmpresa = $lcCredencial . 'ß' . $lcNit . 'ß' . $lcRazonSocial . 'ß' . $lcDireccion . 'ß' . $lcLocalidad . 'ß' . $lcTelefonos . 'þ';
            $tcEmpresa = $lcCredencial . 'ß' . $lcNit . 'ß' . $lcActividad . 'ß' . $lcTipo . 'ß' . $lcCodigoProductoSiat . 'þ';
            // dd($tcEmpresa);




            //Punto de venta
            $tcPuntoVenta = '0ß23ßAbastoßAbastoßAv.Piraißþ';

            //Factura
            $loListaFactura = [
                "lcNitEmisor" => '3879294013',
                "lcRazonSocialEmisor" => 'Pago Facil', //nombre de la empresa
                "lcMunicipio" => 'Santa Cruz',
                "lcTelefono" => '78021105',
                "lcNumeroFactura" => $loVenta[0]->id,
                "lcCodigoSucursal" => $lcCredencial,
                "lcCodigoPuntoVenta" => $lcCredencial,
                "lcDireccion" => $lcDireccion,
                "lcFechaEmision" => now()->format('Y-m-d'),
                "lcHoraEmision" => now()->format('H:i:s'),
                "lcNombreRazonSocial" => $loVenta[0]->cliente,
                "lcCodigoTipoDocumentoIdentidad" => '1',
                "lcNumeroDocumento" => $loVenta[0]->ci_cliente,
                "lcComplemento" => '',
                "lcCodigoCliente" => $loVenta[0]->ci_cliente,
                "lcCodigoMetodoPago" => '1',
                "lcNumeroTarjeta" => '',
                "lcMontoTotal" => $loVenta[0]->monto_total,
                // "lcMontoTotal" => '1',
                "lcMontoTotalSujetoIva" => $loVenta[0]->monto_total,
                "lcCodigoMoneda" => '1',
                "lcTipoCambio" => '1',
                "lcMontoGiftCard" => '',
                "lcDescuentoAdicional" => 0,
                "lcCodigoExcepcion" => '',
                "lcUsuario" => $loVenta[0]->cliente,
                "lcSector" => '35',
                "lcCorreoCliente" => 'ccuellar260@gmail.com',
            ];

            $loListaFactura = array_values($loListaFactura);

            $tcFactura = "";
            for ($i = 0; $i < count($loListaFactura); $i++) {
                $tcFactura .= $loListaFactura[$i] . 'ß';
            }

            $tcFactura = substr($tcFactura, 0, -2) . 'þ';

            $laCodigosSiat = ['14100', '14210', '13000', '14220', '14230'];
            // $laCodigosActividad = ['461021', '461021'];



            $c = 0;
            $tcFacturaDetalle = '';
            for ($i = 0; $i < count($loDetalleVenta); $i++) {
                if ($c > 4)
                    $c = 0;

                //parametros
                $lcProducto = $loDetalleVenta[$i]->cod_oem . '¦461021¦' . $laCodigosSiat[$c];
                $lcDescripcion = $loDetalleVenta[$i]->nombre;
                $lcCantidad = $loDetalleVenta[$i]->cantidad;
                // $lcCantidad = '1';

                $lcUnidadMedida = '47';
                $lcPrecioUnitario = $loDetalleVenta[$i]->precio;
                $lcMontoDescuento = '0';
                $lcSubTotal = $loDetalleVenta[$i]->precio;

                $lcNumeroSerie = $i + 1;
                $lcNroImai = '';

                //adicioniar a la cadena
                $tcFacturaDetalle .= $lcProducto . 'ß' . $lcDescripcion . 'ß' . $lcCantidad . 'ß' . $lcUnidadMedida . 'ß' . $lcPrecioUnitario . 'ß' . $lcMontoDescuento . 'ß' . $lcSubTotal . 'ß' . $lcNumeroSerie . 'ß' . $lcNroImai . 'þ';
            }

            // dd(auth()->user()->tokken_facturacion);
            //realizar la facturacion
            // dd($tcEmpresa, $tcPuntoVenta, $tcFactura, $tcFacturaDetalle);
            $lnUserID = Empleado::where('ci', $loVenta[0]->ci_empleado)->first()->id_usuario;
            $lnTokken = User::where('id', $lnUserID)->first()->tokken_facturacion;


            $loResponse = Http::withToken($lnTokken)
                ->post('https://apirest.facturatech.com.bo/api/servicio/emitirfacturaonlinemultisector', [
                    'tcEmpresa' => $tcEmpresa,
                    'tcPuntoVenta' => $tcPuntoVenta,
                    'tcFactura' => $tcFactura,
                    'tcFacturaDetalle' => $tcFacturaDetalle,
                    'tcFacturaSector' => '',
                    'tcFacturaSectorDetalle' => '',
                ]);

            // return response()->json($loResponse->json());
            // dd($loResponse->json());

            if ($loResponse->json()['error'] == 0 && $loResponse->json()['status'] == 1) {
                //actualizar la venta, guardar cod cuf
                $lcCuf = $loResponse->json()['values']['cuf'];
                $lcTipoFac = $loResponse->json()['values']['tipoFacturacion'];
                $lcFacNube = $loResponse->json()['values']['facturaNube'];

                DB::select(
                    "
                    update ventas set cuf = '$lcCuf', tipo_facturacion = '$lcTipoFac', factura_nube = '$lcFacNube
                    where id = '$lnVentaID'
                "
                );

                $loPaquete = $loResponse->json();
                // $loVenta[0]->facturar == '2';
            }
            //code...
        } catch (\Throwable $th) {
            $loPaquete->messageSistema = "Error:TRY/CATCH] " . $th->getMessage() . ' Linea: ' . $th->getLine();
            $loPaquete->message = "Error en el metodo de encriptacion";
        }

        return response()->json($loPaquete);
    }
}
