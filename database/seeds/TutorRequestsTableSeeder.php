<?php

use Illuminate\Database\Seeder;

class TutorRequestsTableSeeder extends Seeder
{

    public function run()
    {
        factory(App\TutorRequest::class, 10)->create();
    }
}
