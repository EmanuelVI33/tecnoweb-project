<?php

namespace App\Http\Controllers\Edition;

use App\Http\Controllers\Controller;
use App\Http\Requests\Edition\ElementController\StoreElementRequest;
use App\Services\Edition\ElementService;
use App\Services\Edition\ProjectService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ElementController extends Controller
{
    public function __construct(
        private ElementService $elementService,
        private ProjectService $projectService,
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Production/News/Index', [
            'news' => []
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function store(StoreElementRequest $request)
    {
        $project_id = $request->project_id;
        try {
            $this->elementService->store(
                $request->elementsData,
            );

            to_route('projects.show', [
                'id' => $project_id,
            ])->with('success', 'Elementos creados correctamente');
        } catch (\Exception $e) {
            return back()->with('error', [
                'statu' => $e->getCode(),
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function generateElements(Request $request, $projectId)
    {
        try {
            $createElementDtos = $request->input('elements');
            $this->elementService->generateVideo($createElementDtos, $projectId);

            to_route('projects.show', [
                'id' => $projectId,
            ]);
        } catch (\Exception $e) {
            return back()->with('error', [
                'statu' => $e->getCode(),
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function handleWebhook(Request $request)
    {
        $projectId = $this->elementService->handleWebhook($request->all());

        to_route('projects.show', [
            'id' => $projectId,
        ]);
    }
}
