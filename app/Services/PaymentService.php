<?php

namespace App\Services;

use App\Data\PFPaymentData;
use App\Models\Production\Payment;
use Illuminate\Support\Facades\Auth;

class PaymentService
{
    public function __construct(private Payment $payment)
    {
        $this->payment = $payment;
    }


    public function getAll()
    {
        return $this->payment->all();
    }

    public function getByUserId($userId)
    {
        return $this->payment->where('user_id', $userId)->get();
    }

    public function store(PFPaymentData $payment, String $transactionId)
    {
        try {
            $userId = Auth::id();
            $paymentData = [
                'user_id' => $userId,
                'subscription_id' => $payment->id,
                'type_payment' => $payment->typePayment,
                'customer_name' => $payment->client->name,
                'customer_ci' => $payment->client->ci,
                'phone' => $payment->client->phone,
                'transaction_id' => $transactionId,
            ];

            $this->payment->create($paymentData);
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage(), 500);
        }
    }

    public function get($id): ?Payment
    {
        return $this->payment->findOrfail($id);
    }

    public function update($id, $paymentData)
    {
        return $this->payment->where('id', $id)->update($paymentData);
    }
}
