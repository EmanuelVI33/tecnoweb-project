<?php

namespace App\Clases\UploadFileStrategy;

use App\Interfaces\UploadFileStrategy;
use Illuminate\Http\UploadedFile;

class FileUploader
{
    protected UploadFileStrategy $strategy;

    public function setStrategy(UploadFileStrategy $strategy): void
    {
        $this->strategy = $strategy;
    }

    public function uploadFile(UploadedFile $file, string $path): string
    {
        return $this->strategy->uploadFile($file, $path);
    }
}
