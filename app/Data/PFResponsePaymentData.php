<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class PFResponsePaymentData extends Data
{
    public function __construct(
        public String $nroTran,
        public String $message,
        public ?String $qrImage,
    ) {}
}
