<?php

use Faker\Generator as Faker;

$factory->define(App\Testimonial::class, function (Faker $faker) {
    return [
        'body' => $faker->realText($maxNbChars = 191, $indexSize = 2),
        'weight' => $faker->numberBetween(0,4),
    ];
});
