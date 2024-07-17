<?php

use App\Http\Controllers\Edition\ElementController;
use App\Http\Controllers\Edition\PresenterController;
use App\Http\Controllers\Edition\ProjectController;
use App\Http\Controllers\NosotrosController;
use App\Http\Controllers\Production\NewsCategoryController;
use App\Http\Controllers\Production\NewsController;
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
    Route::get('/nosotros', [NosotrosController::class, 'index'])->name('nosotros');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

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

    Route::group(['prefix' => '/admin'], function () {
        Route::get('/', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('admin.dashboard');

        Route::group(['prefix' => '/news'], function () {
            Route::get('/', [NewsController::class, 'index'])->name('news.index');
            Route::post('/', [NewsController::class, 'store'])->name('news.store');
            Route::get('{id}', [NewsController::class, 'show'])->name('news.show');
            Route::put('/{id}', [NewsController::class, 'update'])->name('news.update');
            Route::delete('/{id}', [NewsController::class, 'destroy'])->name('news.destroy');
        });

        Route::group(['prefix' => '/news-categories'], function () {
            Route::get('/', [NewsCategoryController::class, 'index'])->name('news-categories.index');
            Route::post('/', [NewsCategoryController::class, 'store'])->name('news-categories.store');
            Route::get('{id}', [NewsCategoryController::class, 'show'])->name('news-categories.show');
            Route::put('/{id}', [NewsCategoryController::class, 'update'])->name('news-categories.update');
            Route::delete('/{id}', [NewsCategoryController::class, 'destroy'])->name('news-categories.destroy');
        });
    });

    Route::group(['prefix' => '/user'], function () {
        Route::get('/', [UserController::class, 'index'])->name('user.index');
        Route::post('/', [UserController::class, 'suscription'])->name('user.suscription');
    });
});

// Aplicar excepcion del token
Route::post('/elements/webhook', [ElementController::class, 'handleWebhook'])->withoutMiddleware([\App\Http\Middleware\VerifyCsrfToken::class]);

require __DIR__ . '/auth.php';
