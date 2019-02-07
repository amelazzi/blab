<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\User::class, 10)->create()->each(function($user) {
            if(rand(0, 1)) {
                $user->tutor()->save(factory(App\Tutor::class)->make());
            } else {
                $user->student()->save(factory(App\Student::class)->make());
            }

            $user->wallet()->save(factory(App\Wallet::class)->make());

            $user->testimonial()->save(factory(App\Testimonial::class)->make());

            $user->notifications()->saveMany(factory(App\Notification::class, 5)->make());
        });
    }
}
