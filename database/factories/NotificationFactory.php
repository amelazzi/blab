<?php

use Faker\Generator as Faker;

$factory->define(App\Notification::class, function (Faker $faker) {
    return [
        'title' => $faker->realText($maxNbChars = 50, $indexSize = 2),
        'body' => $faker->realText($maxNbChars = 191, $indexSize = 2),
        'type' => $faker->numberBetween(0,4),
    ];
});
