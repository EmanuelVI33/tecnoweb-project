<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class PFProductData extends Data
{
    public $total;

    public function __construct(
        public ?String $serial,
        public String $product,
        public String $precio,
        public String $amount = "1",
        public ?String $descuento = "0",
    ) {
        $this->total = floatval($this->amount) * floatval($this->precio);
    }
}
