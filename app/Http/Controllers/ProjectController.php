<?php

namespace App\Http\Controllers\Api;

use App\Models\Project;
use App\Services\ProjectService;
use App\Http\Requests\ProjectRequest;

class ProjectController extends AbstractController
{
    /**
     * ProjectController constructor.
     *
     * @param Project $model
     * @param ProjectService $service
     */
    public function __construct(Project $model, ProjectService $service)
    {
        parent::__construct($model, $service, new ProjectRequest());
    }
}
