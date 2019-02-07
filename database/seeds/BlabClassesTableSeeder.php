<?php

use Illuminate\Database\Seeder;

class BlabClassesTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\BlabClass::class, 10)->create();
    }
}
