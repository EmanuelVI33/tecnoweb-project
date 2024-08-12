<?php

namespace App\Services\Edition;

use App\Clases\UploadFileStrategy\FileUploader;
use App\Clases\UploadFileStrategy\UploadFileSystemStrategy;
use App\Models\Edition\Project;
use Illuminate\Http\UploadedFile;

class ProjectService
{
    const FOLDER = 'projects/';

    public function __construct(
        private FileUploader $fileUploader,
        private ElementService $elementService,
    ) {
    }

    public function getAll()
    {
        $projects = Project::with('presenter')
            ->orderBy('created_at', 'desc')
            ->get();
        return $projects;
    }

    public function store(array $data, $image): Project
    {
        $this->fileUploader->setStrategy(new UploadFileSystemStrategy());

        if ($image) {
            $data['cover_url'] = $this->savaImage($image);
        }

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

    public function update(int $id, array $data, ?UploadedFile $image): void
    {
        $project = $this->findOne($id);

        if ($image) {
            $data['cover_url'] = $this->savaImage($image);
        }

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

    private function savaImage(UploadedFile $image)
    {
        $this->fileUploader->setStrategy(new UploadFileSystemStrategy());
        $path = $this->fileUploader->uploadFile($image, self::FOLDER);
        return $path;
    }
}
