<?php

namespace App\Enum;

use App\Traits\EnumToArrayTrait;

enum ElementType: String
{
    use EnumToArrayTrait;

    case VIDEO = 'video';
    case PRESENTER = 'presenter';
}
