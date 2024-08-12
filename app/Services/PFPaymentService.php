<?php

namespace App\Services;

use App\Data\PFPaymentData;
use App\Data\PFResponsePaymentData;
use App\Services\Production\SubscriptionService;
use GuzzleHttp\Client;

class PFPaymentService
{
    public $total;
    public $productsData;
    public $lcUrl;
    public $loClient;

    public function __construct(
        private SubscriptionService $subscriptionService,
    ) {
        $this->loClient = new \GuzzleHttp\Client();
    }

    public function createPayment(PFPaymentData $paymentData): PFResponsePaymentData
    {
        // $this->total = 0;
        // $subscription = $this->subscriptionService->getOne($paymentData->id);
        // $this->productsData = $this->getProductsData($subscription->name, $subscription->price);
        if ($paymentData->typePayment == 1) {
            $lcUrl = "https://serviciostigomoney.pagofacil.com.bo/api/servicio/generarqrv2";
        } else {
            $lcUrl = "https://serviciostigomoney.pagofacil.com.bo/api/servicio/realizarpagotigomoneyv2";
        }

        $laHeader = [
            'Accept' => 'application/json'
        ];
        $laBody = $this->getBody($paymentData);

        $loResponse = $this->loClient->post($lcUrl, [
            'headers' => $laHeader,
            'json' => $laBody
        ]);


        $laResult = json_decode($loResponse->getBody()->getContents());

        $lnNroTran = explode(';', $laResult->values)[0];

        $response = [
            'nroTran' => $lnNroTran,
            'message' => $laResult->message
        ];

        if ($paymentData->typePayment == 1) {
            $laValues = explode(";", $laResult->values)[1];
            $laQrImage = "data:image/png;base64," . json_decode($laValues)->qrImage;
            $response['qrImage'] = $laQrImage;
        }

        $response = PFResponsePaymentData::from($response);

        return $response;
    }

    private function getBody(PFPaymentData $paymentData): array
    {
        $lcComerceID           = "d029fa3a95e174a19934857f535eb9427d967218a36ea014b70ad704bc6c8d1c";
        $lnMoneda              = 2;
        $lnTelefono            = $paymentData->client->phone;
        $lcNombreUsuario       = $paymentData->client->name;
        $lnCiNit               = $paymentData->client->ci;
        $lcNroPago             = "test-" . rand(100000, 999999);  //se lo puede poner una venta
        $lnMontoClienteEmpresa = $paymentData->total;
        $lcCorreo              = "ccuellar260@gmail.com";
        $lcUrlCallBack         = "https://cristiancuellar.site/api/venta/store/realizarpago/callback";
        $lcUrlReturn           = "https://cristiancuellar.site/api/pagoExitoso";
        // $laPedidoDetalle       = $request->taPedidoDetalle; //poner detalle

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
            'taPedidoDetalle'       => $paymentData->products
        ];

        return $laBody;
    }

    public function consultarEstado(Int $tranId)
    {
        $loClientEstado = new Client();

        $lcUrlEstadoTransaccion = "https://serviciostigomoney.pagofacil.com.bo/api/servicio/consultartransaccion";

        $laHeaderEstadoTransaccion = [
            'Accept' => 'application/json'
        ];

        $laBodyEstadoTransaccion = [
            "TransaccionDePago" => $tranId
        ];

        $loEstadoTransaccion = $loClientEstado->post($lcUrlEstadoTransaccion, [
            'headers' => $laHeaderEstadoTransaccion,
            'json' => $laBodyEstadoTransaccion
        ]);

        $laResultEstadoTransaccion = json_decode($loEstadoTransaccion->getBody()->getContents());

        // dd($laResultEstadoTransaccion);

        return $laResultEstadoTransaccion;
    }
}
