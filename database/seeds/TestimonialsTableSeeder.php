<?php

use Illuminate\Database\Seeder;

class TestimonialsTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Testimonial::class, 10)->create();
    }
}
