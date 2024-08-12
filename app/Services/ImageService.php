<?php

namespace App\Services;

use Illuminate\Support\Facades\File;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class ImageService
{
    const PATH = '/app/public/';

    protected ImageManager $manager;

    public function __construct()
    {
        $this->manager = new ImageManager(new Driver());
    }

    /**
     * $image El archivo de la image
     * $path ruta donde debe guardarse, debe terminar con '/', ejemplo 'users/'
     */
    public function saveImage($image, $directory = 'storage/', Int $width = 300)
    {
        $nameImg = hexdec(uniqid()) . '.' . $image->getClientOriginalExtension();
        $img = $this->manager->read($image);
        $folder = storage_path(self::PATH . $directory);
        File::makeDirectory($folder, 0755, true, true);
        $img->save($folder . $nameImg);

        return 'storage/' . $directory . $nameImg;
    }
}