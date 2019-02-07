<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('courses', 'CourseController');
Route::resource('tutors', 'TutorController');
Route::resource('students', 'StudentController');
Route::resource('topics', 'TopicController');
Route::resource('reviews', 'ReviewController');
Route::resource('notifications', 'NotificationController');
Route::resource('messages', 'MessageController');
Route::resource('contact-us', 'ContactUsMessageController');
Route::resource('wallets', 'WalletController');
Route::resource('tutor-requests', 'TutorRequestController');
Route::resource('languages', 'LanguageController');
Route::resource('classes', 'BlabClassController');
