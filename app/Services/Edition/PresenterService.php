<?php

namespace App\Services\Edition;

use App\Clases\UploadFileStrategy\FileUploader;
use App\Clases\UploadFileStrategy\UploadFileSystemStrategy;
use App\Models\Edition\Presenter;

class PresenterService
{

    public function __construct(private FileUploader $fileUploader)
    {
    }

    public function getAll()
    {
        $presenters = Presenter::all();
        return $presenters;
    }

    public function store(array $data, $image)
    {
        // Estrategia para subir imagenes
        $this->fileUploader->setStrategy(new UploadFileSystemStrategy());
        $folder = "presenters/";
        $path = $this->fileUploader->uploadFile($image, $folder);
        $data['photo_url'] = $path;
        $presenter = Presenter::create($data);
        return $presenter;
    }
}
