<?php

use Illuminate\Database\Seeder;

class TutorsTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Tutor::class, 10)->create();
    }
}
