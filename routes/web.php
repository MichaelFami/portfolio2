<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/portfolio', function () {
    return view('portfolio');
});

Route::get('/contactme', function () {
    return view('contactme');
});

Route::get('/aboutme', function () {
    return view('aboutme');
});

Route::get('/resume', function () {
    return view('resume');
});

Route::get('/theme', function () {
    return view('theme');
});
