<?php

namespace App\Data\Edition;

use App\Enum\ElementType;
use App\Enum\Expression;
use Illuminate\Http\UploadedFile;
use Spatie\LaravelData\Data;

class ElementData extends Data
{
    public function __construct(
        public ?String $id,
        public String $title,
        public ?String $video_url,
        public ElementType $type,
        public ?String $content,
        public ?Expression $expression,
        public ?String $video_id,
        public ?UploadedFile $file,
        public String $project_id,
    ) {
    }
}
