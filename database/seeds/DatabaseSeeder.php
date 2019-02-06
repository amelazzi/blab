<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(TutorsTableSeeder::class);
        $this->call(CoursesTableSeeder::class);
        $this->call(StudentsTableSeeder::class);
        $this->call(TopicsTableSeeder::class);
        $this->call(ReviewsTableSeeder::class);
        $this->call(NotificationsTableSeeder::class);
        $this->call(MessagesTableSeeder::class);
        $this->call(TestimonialsTableSeeder::class);
        $this->call(ContactUsMessagesTableSeeder::class);
        $this->call(WalletsTableSeeder::class);
        $this->call(TutorRequestsTableSeeder::class);
        $this->call(LanguagesTableSeeder::class);
    }
}
