<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\UserController;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/profile', function (Request $request) {
        return response()->json(Auth::user(), Response::HTTP_OK);
    });
});

Route::middleware(['auth:sanctum', 'can:admin'])->group(function () {
    Route::apiResource('/users', UserController::class);
    Route::apiResource('/category', CategoryController::class)->except(['index', 'show']);
    Route::apiResource('/products', ProductsController::class)->except(['index', 'show', 'purchase']);
});

Route::get('/category', [CategoryController::class, 'index']);
Route::get('/category/{id}', [CategoryController::class, 'show']);

Route::get('/products', [ProductsController::class, 'index']);
Route::get('/products/{id}', [ProductsController::class, 'show']);

Route::put('/products/{id}/purchase', [ProductsController::class, 'purchase']);



Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';
