<?php

use Faker\Generator as Faker;

$factory->define(App\Topic::class, function (Faker $faker) {
    return [
        'title' => $faker->realText($maxNbChars = 50, $indexSize = 2),
        'description' => $faker->realText($maxNbChars = 191, $indexSize = 2),
    ];
});
