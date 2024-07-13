<?php

namespace App\Http\Controllers\Production;

use App\Http\Controllers\Controller;
use App\Http\Requests\Production\NewsCategory\StoreNewsCategoryRequest;
use App\Http\Requests\Production\NewsCategory\UpdateNewsCategoryRequest;
use App\Services\Production\NewsCategoryService;
use App\Traits\ResponseControllerTrait;
use Inertia\Inertia;

class NewsCategoryController extends Controller
{
    use ResponseControllerTrait;

    private const BASE_ROUTE = 'news-categories';
    private $page;

    public function __construct(private NewsCategoryService $newsCategoryService)
    {
        $this->page = config('pages.admin.' . self::BASE_ROUTE);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $newsCategory = $this->newsCategoryService->getAll();

            return Inertia::render($this->page . 'Index', [
                'newsCategory' => $newsCategory,
            ]);

            // return $this->handleResponse(
            //     route: $this->page . 'Index',
            //     data: compact('newsCategory'),
            //     message: 'Listado de categorías de noticias',
            // );
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
            return $this->handleSuccess(
                route: self::BASE_ROUTE . '.index',
                message: 'Categoría creada correctamente'
            );
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
            return $this->handleSuccess(
                route: $this->page . 'Show',
                data: ['newsCategory' => $newsCategory]
            );
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
            return $this->handleSuccess(
                route: self::BASE_ROUTE . '.index',
                message: 'Categoría actualizada correctamente'
            );
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
            return $this->handleSuccess(
                route: self::BASE_ROUTE . '.index',
                message: 'Categoría eliminada correctamente'
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }
}
