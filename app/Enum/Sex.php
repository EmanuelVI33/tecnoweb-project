<?php

namespace App\Enum;

use App\Traits\EnumToArrayTrait;

enum Sex: String
{
    use EnumToArrayTrait;

    case MALE   = 'male';
    case FEMALE = 'female';
}
