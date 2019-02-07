<?php

use Illuminate\Database\Seeder;

class CoursesTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Course::class, 10)->create()->each(function($course) {
            $course->blabClasses()->saveMany(factory(App\BlabClass::class, 5)->make());

            factory(App\Topic::class, 3)->create()->each(function($topic) use ($course) {
                $course->topics()->attach($topic->id);
            });

            $course->students()->attach(
                1
            );

        });
    }
}
