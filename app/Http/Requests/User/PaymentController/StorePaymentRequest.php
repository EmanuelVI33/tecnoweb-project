<?php

namespace App\Http\Requests\User\PaymentController;

use App\Data\PFClientData;
use App\Data\PFPaymentData;
use Illuminate\Foundation\Http\FormRequest;

class StorePaymentRequest extends FormRequest
{
    public PFPaymentData $paymentData;
    public PFClientData $clientData;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'id' => ['required', 'integer', 'exists:subscriptions,id'],
            'user_id' => ['required', 'integer', 'exists:users,id'],
            // Client data
            'customer_name' => ['required', 'string'],
            'customer_ci' => ['required', 'string'],
            'phone' => ['required', 'string'],
            'type_payment' => ['required', 'string'],
        ];
    }

    protected function passedValidation()
    {
        // Create client data
        $this->clientData = new PFClientData(
            name: $this->customer_name,
            ci: $this->customer_ci,
            phone: $this->phone,
        );

        // Create payment data
        $this->paymentData = new PFPaymentData(
            id: $this->id,
            typePayment: $this->type_payment,
            client: $this->clientData,
            products: [],
        );
    }
}
