<?php

use Faker\Generator as Faker;

$factory->define(App\Wallet::class, function (Faker $faker) {
    return [
        'balance' => $faker->randomFloat($nbMaxDecimals = NULL, $min = 0, $max = null),
    ];
});
