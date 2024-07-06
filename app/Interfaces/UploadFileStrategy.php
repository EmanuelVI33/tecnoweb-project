<?php

namespace App\Interfaces;

use Illuminate\Http\UploadedFile;

interface UploadFileStrategy
{
    const PATH = '/app/public/';

    public function uploadFile(UploadedFile $file, String $path): String;
}
