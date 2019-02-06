<?php

use Illuminate\Database\Seeder;

class StudentsTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Student::class, 10)->create();
    }
}
