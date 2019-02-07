<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        // $this->call(TutorsTableSeeder::class);
        // $this->call(StudentsTableSeeder::class);
        // $this->call(WalletsTableSeeder::class);
        // $this->call(TestimonialsTableSeeder::class);
        // $this->call(NotificationsTableSeeder::class); // all included within users

        $this->call(LanguagesTableSeeder::class);

        $this->call(TutorRequestsTableSeeder::class); // requires students and languages
        $this->call(MessagesTableSeeder::class); // requires students and tutors

        $this->call(CoursesTableSeeder::class);
        // $this->call(BlabClassesTableSeeder::class); // included within courses

        $this->call(TopicsTableSeeder::class);
        $this->call(ReviewsTableSeeder::class);

        $this->call(ContactUsMessagesTableSeeder::class);
    }
}
