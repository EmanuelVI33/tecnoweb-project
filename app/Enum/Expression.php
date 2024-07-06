<?php

namespace App\Enum;

use App\Traits\EnumToArrayTrait;

enum Expression: String
{
    use EnumToArrayTrait;

    case NEUTRAL = 'neutral';
    case HAPPY = 'happy';
    case SURPRISE = 'surprise';
    case SERIOUS = 'serious';
}
