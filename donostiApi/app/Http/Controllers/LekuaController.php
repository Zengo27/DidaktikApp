<?php

namespace App\Http\Controllers;

use App\Models\Lekua;
use Illuminate\Http\Request;

class LekuaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Lekua::all();
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $lekua = new Lekua;
        $lekua->izena = $request->izena;
        $lekua->lng = $request->koordenatuX;
        $lekua->lat = $request->koordenatuY;
        $lekua->iconUrl = $request->marker;
        $lekua->jolasaId = $request->jolasaId;
        $lekua->save();
        return $lekua;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lekua  $lekua
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $lekua = Lekua::find($id);
        return $lekua;
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Lekua  $lekua
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $lekua = Lekua::find($id);
        $lekua->izena = $request->izena;
        $lekua->lng = $request->koordenatuX;
        $lekua->lat = $request->koordenatuY;
        $lekua->iconUrl = $request->marker;
        $lekua->jolasaId = $request->jolasaId;
        $lekua->save();
        return $lekua;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lekua  $lekua
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lekua $lekua)
    {
        //
    }
}
