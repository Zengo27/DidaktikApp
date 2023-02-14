<?php

namespace App\Http\Controllers;

use App\Models\Informazioa;
use Illuminate\Http\Request;

class InformazioaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Informazioa::all();
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
     * @param  \App\Models\Informazioa  $informazioa
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $informazioa = Informazioa::find($id);
        return $informazioa;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Informazioa  $informazioa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Informazioa $informazioa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Informazioa  $informazioa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Informazioa $informazioa)
    {
        //
    }
}
