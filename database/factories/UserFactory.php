<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'date_of_birth' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'country' => $faker->country,
        'state' => $faker->state,
        'password' => Hash::make('$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm'), // secret
        'remember_token' => Str::random(10),
    ];
});
