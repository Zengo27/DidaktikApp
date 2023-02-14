<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lekuas', function (Blueprint $table) {
            $table->id();
            $table->string('izena');
            $table->string('lng');
            $table->string('lat');
            $table->string('iconUrl');
            $table->integer('jolasaId');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lekuas');
    }
};
