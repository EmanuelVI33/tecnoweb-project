<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class PFClientData extends Data
{
    public function __construct(
        public String $name,
        public String $ci,
        public String $phone,
    ) {}
}
