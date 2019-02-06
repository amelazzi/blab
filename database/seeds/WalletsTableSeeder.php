<?php

use Illuminate\Database\Seeder;

class WalletsTableSeeder extends Seeder
{
    public function run()
    {
        factory(App\Wallet::class, 10)->create();
    }
}
