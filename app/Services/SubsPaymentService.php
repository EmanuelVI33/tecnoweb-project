<?php

namespace App\Services;

use App\Data\PFPaymentData;
use App\Services\PFPaymentService;

class SubsPaymentService
{
    public function __construct(private PFPaymentService $pFPaymentService, private PaymentService $paymentService) {}

    public function createPayment(PFPaymentData $payment): array
    {
        $dataApi = $this->pFPaymentService->createPayment($payment);
        // Registrar payment en la base de datos
        $this->paymentService->store($payment, $dataApi['transaction_id']);
        return $dataApi;
    }
}
