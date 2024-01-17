<?php

namespace App\Http\Controllers;

use App\Models\Work;
use App\Models\WorkPhotos;
use Illuminate\Http\Request;
use \Inertia\Inertia;


class WorkController extends Controller
{
    public function home()
    {
        $works = Work::query()->orderBy('ordering','ASC')->limit(3)->get();
        // dd($works);

        return Inertia::render('HomePage',[
            "works" => $works
        ]);          
    }

    public function index()
    {
        $works = Work::query()->orderBy('ordering','ASC')->get();

        return Inertia::render('WorksPage',[
            "works" => $works
        ]);          
    }

    public function show(Work $work)
    {
        $photos = WorkPhotos::query()->where('work_id',$work->id)->orderBy('ordering','ASC')->get();
        
        return Inertia::render('WorkPage',[
            "work" => $work,
            "photos" => $photos
        ]);
        
    }
}
