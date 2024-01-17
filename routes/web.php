<?php

use App\Http\Controllers\WorkController;
use Illuminate\Support\Facades\Route;
use \Inertia\Inertia;

Route::get('/',[WorkController::class,"home"])->name('portfolio.homeSweetHome');

Route::get('works',[WorkController::class,"index"])->name('portfolio.works');

Route::get('/works/{work:slug}',array(WorkController::class,"show"))->name('portfolio.work');

Route::get('/about',function (){
    return Inertia::render('AboutPage');
})->name('portfolio.about');

Route::get('/resume',function (){
    return Inertia::render('CurriculumPage');
})->name('portfolio.curriculum');