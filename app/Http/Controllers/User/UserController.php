<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Services\Production\NewsService;
use App\Services\SettingService;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private const BASE_ROUTE = 'user';
    private $page;

    public function __construct(
        private NewsService $newsService,
        private SettingService $settingService,
    ) {
        $this->page = config('pages.user.' . self::BASE_ROUTE);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            // Registrar contador 
            $this->settingService->incrementCount('user_index', 'User index');
            // $pages = $this->settingService->getSettingPages();
            $news = $this->newsService->getAllForUser();

            return $this->handleResponseWithPaginate(
                route: $this->page . 'Index',
                paginate: $news, // Datos paginados
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}