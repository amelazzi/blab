<?php

use Faker\Generator as Faker;

$factory->define(App\ContactUsMessage::class, function (Faker $faker) {
    return [
        'name' => $faker->name(),
        'phone' => $faker->phoneNumber(),
        'email' => $faker->email(),
        'body' => $faker->realText($maxNbChars = 191, $indexSize = 2),
    ];
});
