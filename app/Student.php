<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'name',
        'about',
        'image',
        'rate',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function tutorRequests()
    {
        return $this->hasMany('App\TutorRequest');
    }

    public function messages()
    {
        return $this->hasMany('App\Message');
    }

    public function courses()
    {
        return $this->belongsToMany(Course::class, 'enrollments');

    }
}
