<?php

namespace App\Http\Controllers\Production;

use App\Http\Controllers\Controller;

class SettingController extends Controller
{
    public function index()
    {
        return $this->handleResponse('Admin/Pages/Setting');
    }
}
