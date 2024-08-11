<?php

namespace App\Services;

use App\Data\PFPaymentData;
use App\Data\PFResponsePaymentData;
use App\Services\PFPaymentService;
use App\Services\Production\SubscriptionService;

class SubsPaymentService
{
    public $total;

    public function __construct(
        private SubscriptionService $subscriptionService,
        private PFPaymentService $pFPaymentService,
        private PaymentService $paymentService
    ) {}

    public function createPayment(PFPaymentData $payment): ?Int
    {
        $this->total = 0;
        $subscription = $this->subscriptionService->getOne($payment->id);

        // Calcular detalle
        $payment->products = $this->getProductsData($subscription->name, $subscription->price);
        $payment->total = $this->total;

        // Crear payment en Pago Fácil
        /** @var PFResponsePaymentData */
        $pFResponse = $this->pFPaymentService->createPayment($payment);

        // Registrar payment en la base de datos
        $id = $this->paymentService->store($payment, $pFResponse);
        return $id;
    }

    public function consultar(Int $id)
    {
        $payment = $this->paymentService->get($id);
        $tranId = $payment->transaction_id;
        $response = $this->pFPaymentService->consultarEstado($tranId);
        $stateTran = $response->values->EstadoTransaccion;
        $data = [];

        if ($payment->state_tran != $stateTran) {
            $data['state_tran'] = $stateTran;
        }

        if ($response->status == 2) {
            $data['state'] = $response->status;
        }

        if (!empty($data)) {
            $this->paymentService->update($id, $data);
        }

        return $response->values->messageEstado;
    }

    private function getProductsData(String $name = "Subscripción", String $price = "1"): array
    {
        $productsData = [];

        $productsData[] = [
            "Serial" => "1",
            "Producto" => $name,
            "Cantidad" => "1",
            "Precio" => $price,
            "Descuento" => "0",
            "Total" => floatval($price),
        ];

        $this->total += floatval($price);

        return $productsData;
    }
}
