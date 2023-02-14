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
        Schema::create('galderaks', function (Blueprint $table) {
            $table->id();
            $table->string('galdera');
            $table->string('erantzuna1');
            $table->string('erantzuna2');
            $table->string('erantzuna3');
            $table->string('erantzunEgokia');
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
        Schema::dropIfExists('galderaks');
    }
};
