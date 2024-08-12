<?php

use App\Http\Controllers\Production\NewsCategoryController;
use App\Http\Controllers\Production\NewsController;
use App\Http\Controllers\Production\PaymentController;
use App\Http\Controllers\Production\SubscriptionController;
use App\Http\Controllers\SettingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'role:administrative'])->group(function () {
    // Ruta para el administrativo
    Route::prefix('/admin')->name('admin.')->group(function () {
        Route::get('/', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('dashboard');
        Route::prefix('/news')->name('news.')->group(function () {
            Route::get('/', [NewsController::class, 'index'])->name('index');
            Route::post('/', [NewsController::class, 'store'])->name('store');
            Route::get('{id}', [NewsController::class, 'show'])->name('show');
            Route::put('/{id}', [NewsController::class, 'update'])->name('update');
            Route::delete('/{id}', [NewsController::class, 'destroy'])->name('destroy');
        });
        Route::prefix('/subscriptions')->name('subscriptions.')->group(function () {
            Route::get('/', [SubscriptionController::class, 'index'])->name('index');
            Route::post('/', [SubscriptionController::class, 'store'])->name('store');
            Route::get('{id}', [SubscriptionController::class, 'show'])->name('show');
            Route::put('/{id}', [SubscriptionController::class, 'update'])->name('update');
            Route::delete('/{id}', [SubscriptionController::class, 'destroy'])->name('destroy');
        });
        Route::prefix('/news-categories')->name('news-categories.')->group(function () {
            Route::get('/', [NewsCategoryController::class, 'index'])->name('index');
            Route::post('/', [NewsCategoryController::class, 'store'])->name('store');
            Route::get('{id}', [NewsCategoryController::class, 'show'])->name('show');
            Route::put('/{id}', [NewsCategoryController::class, 'update'])->name('update');
            Route::delete('/{id}', [NewsCategoryController::class, 'destroy'])->name('destroy');
        });
        Route::prefix('/payments')->name('payments.')->group(function () {
            Route::get('/', [PaymentController::class, 'index'])->name('index');
            Route::post('/', [PaymentController::class, 'store'])->name('store');
            Route::get('{id}', [PaymentController::class, 'show'])->name('show');
            Route::put('/{id}', [PaymentController::class, 'update'])->name('update');
            Route::delete('/{id}', [PaymentController::class, 'destroy'])->name('destroy');
        });
        Route::prefix('/settings')->name('settings.')->group(function () {
            Route::get('/', [SettingController::class, 'index'])->name('index');
            Route::post('/', [SettingController::class, 'store'])->name('store');
        });
    });
});
