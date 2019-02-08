<?php

use Illuminate\Http\Request;

Route::group(['middleware' => ['json.response']], function () {

    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/login', 'Auth\LoginController@login')->name('login.api');
    Route::post('/register', 'Auth\RegisterController@register')->name('register.api');

    Route::middleware('auth:api')->group(function () {
        Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

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
    });



});

// 12 tables + 2 many-to-many tables + migrations table + password-resets table
