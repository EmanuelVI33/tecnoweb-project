<?php

use App\Http\Controllers\Production\NewsCategoryController;
use App\Http\Controllers\Production\NewsController;
use App\Http\Controllers\Production\PaymentController;
use App\Http\Controllers\Production\SubscriptionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Ruta para el administrativo
Route::group(['prefix' => '/admin'], function () {
    Route::get('/', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
    // Rutas para las noticias
    Route::group(['prefix' => '/news'], function () {
        Route::get('/', [NewsController::class, 'index'])->name('news.index');
        Route::post('/', [NewsController::class, 'store'])->name('news.store');
        Route::get('{id}', [NewsController::class, 'show'])->name('news.show');
        Route::put('/{id}', [NewsController::class, 'update'])->name('news.update');
        Route::delete('/{id}', [NewsController::class, 'destroy'])->name('news.destroy');
    });
    // Rutas para las suscripciones
    Route::group(['prefix' => '/subscriptions'], function () {
        Route::get('/', [SubscriptionController::class, 'index'])->name('subscriptions.index');
        Route::post('/', [SubscriptionController::class, 'store'])->name('subscriptions.store');
        Route::get('{id}', [SubscriptionController::class, 'show'])->name('subscriptions.show');
        Route::put('/{id}', [SubscriptionController::class, 'update'])->name('subscriptions.update');
        Route::delete('/{id}', [SubscriptionController::class, 'destroy'])->name('subscriptions.destroy');
    });
    // Rutas para las categorias de noticias
    Route::group(['prefix' => '/news-categories'], function () {
        Route::get('/', [NewsCategoryController::class, 'index'])->name('news-categories.index');
        Route::post('/', [NewsCategoryController::class, 'store'])->name('news-categories.store');
        Route::get('{id}', [NewsCategoryController::class, 'show'])->name('news-categories.show');
        Route::put('/{id}', [NewsCategoryController::class, 'update'])->name('news-categories.update');
        Route::delete('/{id}', [NewsCategoryController::class, 'destroy'])->name('news-categories.destroy');
    });
    // Rutas para los pagos
    Route::group(['prefix' => '/payments'], function () {
        Route::get('/', [PaymentController::class, 'index'])->name('payments.index');
        Route::post('/', [PaymentController::class, 'store'])->name('payments.store');
        Route::get('{id}', [PaymentController::class, 'show'])->name('payments.show');
        Route::put('/{id}', [PaymentController::class, 'update'])->name('payments.update');
        Route::delete('/{id}', [PaymentController::class, 'destroy'])->name('payments.destroy');
    });
})->middleware(['auth', 'role:administrative']);
