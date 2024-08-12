<?php

namespace App\Http\Requests\Production\Subscription;

trait SubscriptionValidationTrait
{
    const ruleArray = [
        'name' => 'required|string|max:255',
        'description' => 'nullable|string',
        'price' => 'required|numeric',
        'duration' => 'required|numeric',
    ];

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return self::ruleArray;
    }
}
