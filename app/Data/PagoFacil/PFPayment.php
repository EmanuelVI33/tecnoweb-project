<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class PFPaymentData extends Data
{
    public function __construct(
        public Int $id,
        public Int $typePayment,
        public PFClientData $client,
        public array $products,
    ) {}
}
