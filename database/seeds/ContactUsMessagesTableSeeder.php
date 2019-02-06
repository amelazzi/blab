<?php

use Illuminate\Database\Seeder;

class ContactUsMessagesTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\ContactUsMessage::class, 10)->create();
    }
}
