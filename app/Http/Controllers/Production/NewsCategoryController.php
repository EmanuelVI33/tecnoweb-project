<?php

namespace App\Http\Controllers\Production;

use App\Http\Controllers\Controller;
use App\Http\Requests\Production\NewsCategory\StoreNewsCategoryRequest;
use App\Http\Requests\Production\NewsCategory\UpdateNewsCategoryRequest;
use App\Services\Production\NewsCategoryService;
use App\Traits\ErrorHandlerTrait;
use Inertia\Inertia;

class NewsCategoryController extends Controller
{
    use ErrorHandlerTrait;

    // Ruta de la page en el front
    private const PAGE = 'Production/Category';
    private const BASE_ROUTE = 'news-categories';

    public function __construct(private NewsCategoryService $newsCategoryService)
    {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $newsCategory = $this->newsCategoryService->getAll();
            return Inertia::render(self::PAGE . '/Index', compact('newsCategory'));
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsCategoryRequest $request)
    {
        try {
            $this->newsCategoryService->create($request->validated());
            return to_route(self::BASE_ROUTE . '.index');
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $newsCategory = $this->newsCategoryService->getOne($id);
            return Inertia::render(self::BASE_ROUTE . '/Show', ['newsCategory' => $newsCategory]);
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsCategoryRequest $request, string $id)
    {
        try {
            $this->newsCategoryService->update($id, $request->validated());
            return to_route(self::BASE_ROUTE . '.index');
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $this->newsCategoryService->delete($id);
            return to_route(self::BASE_ROUTE . '.index');
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }
}
