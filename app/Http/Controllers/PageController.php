<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{

public function index()
{
    $movies = \App\Models\Movie::all();
    return view('welcome', ['movies' => $movies]);
}

}
