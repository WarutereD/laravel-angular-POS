<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\CategoriesController;

Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'index']);
    Route::post('/add', [ProductController::class, 'store']);
    Route::get('/{id}', [ProductController::class, 'show']);
    Route::put('/{id}', [ProductController::class, 'update']);
    Route::delete('/{id}', [ProductController::class, 'destroy']);
});
Route::prefix('sales')->group(function () {
    Route::post('/', [SalesController::class, 'store']);
});
Route::prefix('categories')->group(function () {
    Route::post('/add', [CategoriesController::class, 'store']);
    Route::get('/', [CategoriesController::class, 'index']);
});

