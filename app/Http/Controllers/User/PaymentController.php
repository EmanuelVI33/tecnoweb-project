<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Services\Production\SubscriptionService;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    private $pcTokenService = "51247fae280c20410824977b0781453df59fad5b23bf2a0d14e884482f91e09078dbe5966e0b970ba696ec4caf9aa5661802935f86717c481f1670e63f35d5041c31d7cc6124be82afedc4fe926b806755efe678917468e31593a5f427c79cdf016b686fca0cb58eb145cf524f62088b57c6987b3bb3f30c2082b640d7c52907";
    private $pcTokenSecret = "9E7BC239DDC04F83B49FFDA5";
    private const BASE_ROUTE = 'payments';
    private $page;

    public function __construct(private SubscriptionService $subscriptionService)
    {
        $this->page = config('pages.user.' . self::BASE_ROUTE);
    }

    public function store(Request $request)
    {
        // dd($request->all());
        $subs = $this->subscriptionService->getOne($request->id);

        // dd($subs);

        // Detalle solo una suscripción
        $laPedidoDetalle = [];
        $laPedidoDetalle[] = [
            "Serial" => "1",
            "Producto" => $subs->name,
            "Cantidad" => "1",
            "Precio" => $subs->price,
            "Descuento" => "0",
            "Total" => $subs->price,
        ];
        $lnMontoTotal = $subs->price;

        // Detalle de la transacción
        try {
            $lcComerceID           = "d029fa3a95e174a19934857f535eb9427d967218a36ea014b70ad704bc6c8d1c";
            $lnMoneda              = 2;
            $lnTelefono            = $request->phone ?? "77777777";
            $lcNombreUsuario       = $request->customer_name ?? "Emanuel Vaca";
            $lnCiNit               = $request->customer_ci ?? "123456";
            $lcNroPago             = "Subs-" . rand(100000, 999999);  //se lo puede poner una venta
            $lnMontoClienteEmpresa = $lnMontoTotal;
            $lcCorreo              = "emanuelvaca39@gmail.com";
            $lcUrlCallBack         = "https://cristiancuellar.site/api/venta/store/realizarpago/callback"; // Cuando paga el cliente
            $lcUrlReturn           = "https://cristiancuellar.site/api/pagoExitoso"; // Cuando se realiza el pago
            // $laPedidoDetalle       = $request->taPedidoDetalle; //poner detalle
            $lcUrl                 = "";
            $loClient = new Client();

            // if ($request->typeService == 1) {
            if (1) {
                $lcUrl = "https://serviciostigomoney.pagofacil.com.bo/api/servicio/generarqrv2";
            } else {
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
                'json' => $laBody,
            ]);

            $laResult = json_decode($loResponse->getBody()->getContents());
            $lnNroTran = explode(';', $laResult->values)[0];

            // if ($request->tnTipoServicio == 1) {
            if (1) {
                $laValues = explode(";", $laResult->values)[1];
                // dd($laValues);

                $laQrImage = "data:image/png;base64," . json_decode($laValues)->qrImage;

                // echo '<img src="' . $laQrImage . '" alt="Imagen base64">';

                return $this->handleResponse($this->page . 'Qr', compact('laQrImage', 'lnNroTran'));

                // return redirect()->route('PagoQr')->with([
                //     'tnNroVenta' => $lnNroTran,
                //     'tcQRImage' => $laQrImage,
                // ]);
            } elseif ($request->tnTipoServicio == 2) {

                //redirigri y

                // dd($laResult);
                // return redirect()->route('PagoQr')->with([
                //     'tnTransaccion' =>  $laResult->values,
                //     'tcMensaje' => $laResult->message,
                // ]);
                return $this->handleResponse($this->page . 'Index', compact('lnNroTran'));
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
}
