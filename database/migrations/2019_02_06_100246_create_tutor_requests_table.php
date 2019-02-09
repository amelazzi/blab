<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTutorRequestsTable extends Migration
{
    public function up()
    {
        Schema::create('tutor_requests', function (Blueprint $table) {
            $table->increments('id');
            $table->string('body');

            $table->unsignedInteger('student_id');
            $table->foreign('student_id')->references('id')->on('students');

            $table->unsignedInteger('language_id');
            $table->foreign('language_id')->references('id')->on('languages');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tutor_requests');
    }
}