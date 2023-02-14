<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GalderakController; 
use App\Http\Controllers\InformazioaController; 
use App\Http\Controllers\LekuaController; 

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('galderak', GalderakController::class);
Route::apiResource('informazioa', InformazioaController::class);
Route::apiResource('lekua', LekuaController::class);
