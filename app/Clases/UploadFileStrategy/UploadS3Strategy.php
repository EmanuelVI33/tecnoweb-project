<?php

namespace App\Clases\UploadFileStrategy;

use App\Interfaces\UploadFileStrategy;
use Illuminate\Support\Facades\File;
use Illuminate\Http\UploadedFile;

class UploadS3Strategy implements UploadFileStrategy
{
    public function uploadFile(UploadedFile $file, String $path): String
    {
        $nameVideo = hexdec(uniqid()) . '.' . $file->getClientOriginalExtension();

        $folder = storage_path(self::PATH . $path);
        File::makeDirectory($folder, 0755, true, true);

        $file->move($folder, $nameVideo);

        return 'storage/' . $path . $nameVideo;
    }
}
