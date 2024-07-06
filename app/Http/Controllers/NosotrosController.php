<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class NosotrosController extends Controller
{
    public function index()
    {
        return Inertia::render('Nosotros');
    }
}
