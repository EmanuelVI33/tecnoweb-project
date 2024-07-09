<?php

use App\Http\Controllers\Edition\ElementController;
use App\Http\Controllers\Edition\PresenterController;
use App\Http\Controllers\Edition\ProjectController;
use App\Http\Controllers\NosotrosController;
use App\Http\Controllers\ProfileController;
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
});

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
            Route::get('/', [ElementController::class, 'index'])->name('news.index');
            // Route::post('/', [ElementController::class, 'index'])->name('projects.index');
        });
    });
});

// Aplicar excepcion del token
Route::post('/elements/webhook', [ElementController::class, 'handleWebhook'])->withoutMiddleware([\App\Http\Middleware\VerifyCsrfToken::class]);


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
