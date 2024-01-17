<?php

use App\Http\Controllers\WorkController;
use Illuminate\Support\Facades\Route;
use \Inertia\Inertia;

Route::get('/',[WorkController::class,"home"])->name('portfolio.homeSweetHome');

Route::get('trabalhos',[WorkController::class,"index"])->name('portfolio.works');

Route::get('/trabalhos/{work:slug}',array(WorkController::class,"show"))->name('portfolio.work');

Route::get('/sobre',function (){
    return Inertia::render('AboutPage');
})->name('portfolio.about');

Route::get('/curriculo',function (){
    return Inertia::render('CurriculumPage');
})->name('portfolio.curriculum');