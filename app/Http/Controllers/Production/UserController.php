<?php

namespace App\Http\Controllers\Production;

use App\Http\Controllers\Controller;
use App\Services\SettingService;

class UserController extends Controller
{
    public function __construct(private SettingService $settingService) {}

    public function index()
    {
        $pages = $this->settingService->getSettingPages();
        $total = $this->settingService->getTotalVisit();

        return $this->handleResponse(
            'Admin/Dashboard',
            compact('pages', 'total')
        );
    }
}
