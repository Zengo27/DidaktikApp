<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Informazioa extends Model
{
    use HasFactory;
    public function lekua(){
        return $this->hasOne(Lekua::class,'lekuId','id');
    }
}
