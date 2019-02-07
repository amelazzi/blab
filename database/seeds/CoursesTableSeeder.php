<?php

use Illuminate\Database\Seeder;

class CoursesTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Course::class, 10)->create()->each(function($course) {
            $course->blabClasses()->saveMany(factory(App\BlabClass::class, 5)->make());
        });
    }
}
