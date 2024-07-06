<?php

namespace App\Enum;

use App\Traits\EnumToArrayTrait;

enum ProjectStatus: String
{
    use EnumToArrayTrait;

    case EDITION = 'edition';
    case PRODUCTION = 'production';
    case PUBLIC = 'public';
}
