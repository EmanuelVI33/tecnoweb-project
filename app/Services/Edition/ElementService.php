<?php

namespace App\Services\Edition;

use App\Clases\CreateElement;
use App\Clases\UploadFileStrategy\FileUploader;
use App\Clases\UploadFileStrategy\UploadFileSystemStrategy;
use App\Data\Edition\ElementData;
use App\Enum\ElementType;
use App\Models\Edition\Element;
use App\Models\Edition\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ElementService
{
    public function __construct(
        private FileUploader $fileUploader,
        private DIdService $dIdService,
    ) {}

    public function getAll() {}

    public function store(array $elementsData)
    {
        $this->fileUploader->setStrategy(new UploadFileSystemStrategy());
        $folder = "elements/";

        /** @var ElementData $elementData */
        foreach ($elementsData as $elementData) {
            if ($elementData->id !== null) continue;


            if ($elementData->type === ElementType::VIDEO) {
                // Si es video almacenamos el video
                $elementData->video_url = $this->fileUploader->uploadFile($elementData->file, $folder);
            }

            $type = ucfirst($elementData->type->value);
            /** @var CreateElement $createElementType */
            $createElementType = "App\Clases\CreateElement$type";
            (new $createElementType)->createElement($elementData);
        }
    }

    public function updateVideoUrl($id, $file)
    {
        try {
            $element = Element::findOrFail($id);
            $folder = "elements/";
            $this->fileUploader->setStrategy(new UploadFileSystemStrategy());
            $path = $this->fileUploader->uploadFile($file, $folder);
            $element->video_url = $path;
            $element->save();
        } catch (ModelNotFoundException $e) {
            throw new \Exception("Element not found", 404);
        } catch (\Exception $e) {
            throw new \Exception("Error uploading file", 500);
        }
    }

    public function generateVideo($createElementDtos, $projectId)
    {
        $user = Auth()->user();
        if (!$user) {
            throw new \Exception('Usuario no autenticado');
        }

        $project = Project::where('id', $projectId)->with('presenter')->first();
        $photoUrl = 'https://www.tecnoweb.org.bo/inf513/grupo23sa/proy2/public/' . $project->presenter->photo_url;

        $pointer = $user->pointer;
        foreach ($createElementDtos as $elementDto) {
            try {
                $videoId = '';
                $videoId = $this->dIdService->generateVideo($elementDto['content'], $elementDto['expression'], $photoUrl);
                $elementDto['video_id'] = $videoId;

                $element = Element::where('id', $elementDto['id'])->where('project_id', $projectId)->with('element')->first();

                if ($element) {
                    // Decrementar puntos
                    $pointer--;

                    $element->element->video_id = $videoId;
                    $element->element->save();
                } else {
                    Log::info("Element with id {$elementDto['id']} not found for project {$projectId}");
                }
            } catch (\Exception $e) {
                Log::error('Error generating video: ' . $e->getMessage());
                throw $e;
            }
        }

        $user->pointer = $pointer;

        try {
            $user = User::whereId($user->id)->update([
                'pointer' => $user->pointer,
            ]);
        } catch (\Exception $e) {
            throw new \Exception('Error al actualizar usuario');
        }

        return [
            'message' => 'Video generation initiated',
            'data' => $createElementDtos,
        ];
    }

    public function handleWebhook($data)
    {
        Log::info('Webhook received:', $data);
        $id = $data['id'];
        $videoUrl = $data['result_url'];

        try {
            $fileContent = file_get_contents($videoUrl);

            $fileName = uniqid() . '.mp4';

            // Guardar el contenido descargado temporalmente
            $tempPath = storage_path('app/public' . $fileName);
            file_put_contents($tempPath, $fileContent);

            // Crear un objeto UploadedFile
            $uploadedFile = new UploadedFile($tempPath, $fileName, 'video/mp4', null, true);

            $element = Element::whereHas('element', function ($query) use ($id) {
                $query->where('video_id', $id);
            })->first();

            if (!$element) {
                throw new \Exception('Element not found');
            }

            $this->updateVideoUrl($element->id, $uploadedFile);

            return $element->project_id;
        } catch (\Exception $e) {
            Log::error('Error in webhook: ' . $e->getMessage());
            throw $e;
        }
    }
}
