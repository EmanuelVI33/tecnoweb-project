<?php

namespace App\Http\Controllers\Edition;

use App\Http\Controllers\Controller;
use App\Http\Requests\Edition\PresenterController\StorePresenterController;
use App\Models\Edition\Presenter;
use App\Services\Edition\PresenterService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PresenterController extends Controller
{
    private const PAGE = 'Edition';
    private const BASE_ROUTE = 'presenters';

    public function __construct(private PresenterService $presenterService)
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $presenters = $this->presenterService->getAll();
        return Inertia::render(self::PAGE . '/Index', [
            'presenters' => $presenters
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePresenterController $request)
    {
        $this->presenterService->store(
            $request->validated(),
            $request->file('photo_url')
        );
        return to_route('projects.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Presenter $presenter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Presenter $presenter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Presenter $presenter)
    {
        //
    }
}
