<?php

use Illuminate\Database\Seeder;

class MessagesTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Message::class, 10)->create();
    }
}
