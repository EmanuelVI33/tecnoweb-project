<?php

namespace App\Http\Controllers\Edition;

use App\Http\Controllers\Controller;
use App\Http\Requests\Edition\ElementController\StoreElementRequest;
use App\Http\Requests\Edition\ProjectController\StoreProjectRequest;
use App\Services\Edition\ProjectService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    private const PAGE = 'Edition/Project';
    private const BASE_ROUTE = 'projects';

    public function __construct(public ProjectService $projectService)
    {
    }

    /**
     * Display a listing of the resource.docker compose 
     */
    public function index()
    {
        $projects = $this->projectService->getAll();
        return Inertia::render(self::PAGE . 'Index', [
            'projects' => $projects
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $this->projectService->store(
            $request->validated(),
            $request->file('cover_url')
        );
        return to_route(self::BASE_ROUTE . '.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(String $id)
    {
        $project = $this->projectService->findOne($id);
        return Inertia::render(self::PAGE . 'Show', [
            'project' => $project,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $this->projectService->update(
            $request->validate(),
            $id
        );
        to_route(self::BASE_ROUTE . '.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $this->projectService->delete($id);
        to_route(self::BASE_ROUTE . '.index');
    }

    /**
     * Actualizar los elementos de un projecto
     */
    public function updateElement(String $id, StoreElementRequest $storeElementRequest)
    {
        $this->projectService->updateElement($storeElementRequest->elementsData);
        to_route(self::BASE_ROUTE . '.show', ['id' => $id]);
    }
}
