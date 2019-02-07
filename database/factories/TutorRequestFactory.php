<?php

use Faker\Generator as Faker;

$factory->define(App\TutorRequest::class, function (Faker $faker) {
    return [
        'body' => $faker->realText($maxNbChars = 191, $indexSize = 2),
        'student_id' => \App\Student::inRandomOrder()->first()->id,
        'language_id' => \App\Language::inRandomOrder()->first()->id,
    ];
});
