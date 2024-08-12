<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubsPaymentController;
use App\Http\Controllers\User\PaymentController;
use App\Http\Controllers\User\SubscriptionController;
use App\Http\Controllers\User\UserController;
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

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// User
Route::get('/news', [UserController::class, 'index'])->name('user.index');

Route::prefix('/subscriptions')->name('subscriptions.')->group(function () {
    Route::get('/', [SubscriptionController::class, 'index'])->name('index');
    Route::get('/{id}/buy', [SubscriptionController::class, 'buy'])->name('buy');
    Route::post('/', [SubscriptionController::class, 'store'])->name('store');
});

Route::prefix('/payments')->name('payments.')->group(function () {
    Route::get('/', [SubsPaymentController::class, 'index'])->name('index');
    Route::post('/', [SubsPaymentController::class, 'store'])->name('store');
    Route::get('/{id}', [SubsPaymentController::class, 'show'])->name('show');
    Route::post('/{id}/consultar', [SubsPaymentController::class, 'consultar'])->name('consultar');
    Route::get('/callback', [PaymentController::class, 'callback'])->name('callback');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/editor.php';