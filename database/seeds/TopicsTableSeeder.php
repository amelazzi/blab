<?php

use Illuminate\Database\Seeder;

class TopicsTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Topic::class, 10)->create();
    }
}
