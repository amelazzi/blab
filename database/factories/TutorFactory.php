<?php

use Faker\Generator as Faker;

$factory->define(App\Tutor::class, function (Faker $faker) {
    return [
        'name' => $faker->name(),
        'about' => $faker->realText($maxNbChars = 191, $indexSize = 2),
        'image' => $faker->imageUrl($width = 640, $height = 480),
        'rate' => $faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 5),
    ];
});
