<?php

use Illuminate\Database\Seeder;

class ReviewsTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Review::class, 10)->create();
    }
}
