<?php

use Faker\Generator as Faker;

$factory->define(App\Message::class, function (Faker $faker) {
    return [
        'read' => $faker->boolean(),
        'body' => $faker->realText($maxNbChars = 191, $indexSize = 2),
        'student_id' => \App\Student::inRandomOrder()->first()->id,
        'tutor_id' => \App\Tutor::inRandomOrder()->first()->id,
        'from' => ['\App\Student', '\App\Tutor'][rand(0, 1)],
    ];
});
