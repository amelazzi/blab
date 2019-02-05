<?php

use Faker\Generator as Faker;

$factory->define(App\Course::class, function (Faker $faker) {
    return [
        'title' => $faker->realText($maxNbChars = 50, $indexSize = 2),
        'description' => $faker->realText($maxNbChars = 250, $indexSize = 2),
        'image' => imageUrl($width = 640, $height = 480),
        'rate' => randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 5),
        'price' => randomFloat($nbMaxDecimals = NULL, $min = 0, $max = NULL),
    ];
});
