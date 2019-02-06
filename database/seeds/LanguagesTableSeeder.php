<?php

use Illuminate\Database\Seeder;

class LanguagesTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Language::class, 10)->create();
    }
}
