<?php

use Illuminate\Database\Seeder;

class NotificationsTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Notification::class, 10)->create();
    }
}
