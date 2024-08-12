<?php

namespace App\Http\Controllers\Production;

use App\Http\Controllers\Controller;
use App\Http\Requests\Production\News\StoreNewsRequest;
use App\Http\Requests\Production\News\UpdateNewsRequest;
use App\Services\Production\NewsCategoryService;
use App\Services\Production\NewsService;
use App\Traits\ResponseControllerTrait;

class NewsController extends Controller
{
    private const BASE_ROUTE = 'news';
    private $page;

    public function __construct(private NewsService $newsService, private NewsCategoryService $newsCategoryService)
    {
        $this->page = config('pages.admin.' . self::BASE_ROUTE);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $news = $this->newsService->getAll();
            $newsCategories = $this->newsCategoryService->getAll();

            return $this->handleResponse(
                route: $this->page . 'Index',
                data: compact('news', 'newsCategories'),
                message: 'Listado de noticias',
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsRequest $request)
    {
        try {
            $this->newsService->create($request->validated());
            return $this->handleSuccess(
                route: self::BASE_ROUTE . '.index',
                message: 'Noticia creada correctamente'
            );
        } catch (\Exception $e) {
            dd($e);
            return $this->handleError($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $news = $this->newsService->getOne($id);

            return $this->handleResponse(
                route: $this->page . 'Show',
                data: compact('news'),
                message: 'Detalle de la noticia',
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsRequest $request, string $id)
    {
        try {
            $this->newsService->update($id, $request->validated());
            return $this->handleSuccess(
                route: self::BASE_ROUTE . '.index',
                message: 'Noticia actualizada correctamente'
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
            $this->newsService->delete($id);
            return $this->handleSuccess(
                route: self::BASE_ROUTE . '.index',
                message: 'Noticia eliminada correctamente'
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }
}
