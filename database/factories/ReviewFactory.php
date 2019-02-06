<?php

use Faker\Generator as Faker;

$factory->define(App\Review::class, function (Faker $faker) {
    return [
        'title' => $faker->realText($maxNbChars = 50, $indexSize = 2),
        'body' => $faker->realText($maxNbChars = 191, $indexSize = 2),
        'rate' => $faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = 5),
    ];
});
