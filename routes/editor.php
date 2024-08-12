<?php

use App\Http\Controllers\Edition\ElementController;
use App\Http\Controllers\Edition\PresenterController;
use App\Http\Controllers\Edition\ProjectController;
use App\Http\Controllers\NosotrosController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'role:editor'])->group(function () {
    Route::group(['prefix' => '/editor'], function () {
        Route::get('/nosotros', [NosotrosController::class, 'index'])->name('nosotros');

        Route::group(['prefix' => '/presenters'], function () {
            Route::get('/', [PresenterController::class, 'index'])->name('presenters.index');
            Route::post('/', [PresenterController::class, 'store'])->name('presenters.store');
        });
        Route::group(['prefix' => '/projects'], function () {
            Route::get('/', [ProjectController::class, 'index'])->name('projects.index');
            Route::post('/', [ProjectController::class, 'store'])->name('projects.store');
            Route::get('{id}', [ProjectController::class, 'show'])->name('projects.show');
            Route::put('/{id}', [ProjectController::class, 'update'])->name('projects.update');
            Route::delete('/{id}', [ProjectController::class, 'destroy'])->name('projects.destroy');
        });
        Route::group(['prefix' => '/elements'], function () {
            Route::post('/', [ElementController::class, 'store'])->name('elements.store');
            Route::post('/generate/{projectId}', [ElementController::class, 'generateElements']);
        });
    });
});

// Aplicar middleware para verificar la autenticación
Route::post('/elements/webhook', [ElementController::class, 'handleWebhook'])->withoutMiddleware([\App\Http\Middleware\VerifyCsrfToken::class]);
