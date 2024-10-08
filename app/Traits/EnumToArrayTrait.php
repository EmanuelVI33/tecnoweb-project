<?php

namespace App\Traits;

trait EnumToArrayTrait
{
    public static function toArray(): array
    {
        return array_column(static::cases(), 'value');
    }
}