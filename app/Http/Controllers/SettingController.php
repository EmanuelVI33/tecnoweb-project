<?php

namespace App\Http\Controllers;

use App\Http\Requests\SettingController\StoreSettingRequest;
use App\Services\SettingService;

class SettingController extends Controller
{
    private const BASE_ROUTE = 'settings';
    private $page;

    public function __construct(private SettingService $settingService)
    {
        $this->page = config('pages.admin.' . self::BASE_ROUTE);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $settings = $this->settingService->getAll();

            return $this->handleResponse(
                route: $this->page . 'Index',
                data: compact('settings'),
                message: 'Listado de configuraciones',
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSettingRequest $request)
    {
        try {
            // dd($request);
            $this->settingService->store($request->settingsData);

            return $this->handleResponse(
                route: $this->page . 'Index',
                message: 'Configuraciones guardadas correctamente',
            );
        } catch (\Exception $e) {
            return $this->handleError($e);
        }
    }
}
