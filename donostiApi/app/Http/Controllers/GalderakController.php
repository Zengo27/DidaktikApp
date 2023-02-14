<?php

namespace App\Http\Controllers;

use App\Models\Galderak;
use Illuminate\Http\Request;

class GalderakController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Galderak::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Galderak  $galderak
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $galdera = Galderak::find($id);
        return $galdera;

    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Galderak  $galderak
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Galderak $galderak)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Galderak  $galderak
     * @return \Illuminate\Http\Response
     */
    public function destroy(Galderak $galderak)
    {
        //
    }
}
