<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
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

    public function message()
    {
        return $this->hasMany('App\Message');
    }

    public function courses()
    {
        return $this->hasMany('App\Course');
    }
}
