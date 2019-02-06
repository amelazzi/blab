<?php

use Faker\Generator as Faker;

$factory->define(App\Message::class, function (Faker $faker) {
    return [
        'read' => $faker->boolean(),
        'body' => $faker->realText($maxNbChars = 191, $indexSize = 2),
    ];
});
