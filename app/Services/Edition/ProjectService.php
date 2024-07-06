<?php

namespace App\Services\Edition;

use App\Clases\UploadFileStrategy\FileUploader;
use App\Clases\UploadFileStrategy\UploadFileSystemStrategy;
use App\Models\Edition\Project;

class ProjectService
{
    public function __construct(
        private FileUploader $fileUploader,
        private ElementService $elementService,
    ) {
    }

    public function getAll()
    {
        $projects = Project::with('presenter')
            ->get();
        return $projects;
    }

    public function store(array $data, $image): Project
    {
        $this->fileUploader->setStrategy(new UploadFileSystemStrategy());
        $folder = "projects/";
        // Guardar imagen
        $path = $this->fileUploader->uploadFile($image, $folder);
        $data['cover_url'] = $path;
        // Estado por default
        $project = Project::create($data);
        return $project;
    }

    public function findOne(String $id): Project
    {
        try {
            $project = Project::where('id', $id)
                ->with(['presenter', 'elements.element'])
                ->first();

            if (!$project) {
                throw new \Exception("El proyecto con el $id, no se encuentra registrado");
            }

            return $project;
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function update(array $data, int $id): void
    {
        $project = $this->findOne($id);
        $project->update($data);
    }

    public function delete(int $id): void
    {
        $project = $this->findOne($id);
        $project->delete();
    }

    public function updateElement(array $elementsData): void
    {
        $this->elementService->store($elementsData);
    }
}
