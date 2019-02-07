<?php

use Faker\Generator as Faker;

$factory->define(App\Course::class, function (Faker $faker) {
    return [
        'title' => $faker->realText($maxNbChars = 50, $indexSize = 2),
        'description' => $faker->realText($maxNbChars = 191, $indexSize = 2),
        'image' => $faker->imageUrl($width = 640, $height = 480),
        'rate' => $faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 5),
        'price' => $faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = NULL),
        'tutor_id' => \App\Tutor::inRandomOrder()->first()->id,
        'language_id' => \App\Language::inRandomOrder()->first()->id,
    ];
});
