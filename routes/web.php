<?php

use App\Http\Controllers\Edition\ElementController;
use App\Http\Controllers\Edition\PresenterController;
use App\Http\Controllers\Edition\ProjectController;
use App\Http\Controllers\NosotrosController;
use App\Http\Controllers\Production\NewsCategoryController;
use App\Http\Controllers\Production\NewsController;
use App\Http\Controllers\Production\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/', [UserController::class, 'suscription'])->name('user.suscription');
});

Route::get('/news', [UserController::class, 'index'])->name('user.index');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/editor.php';
