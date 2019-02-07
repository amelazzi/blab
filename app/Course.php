<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
        'rate',
        'price',
        'tutor_id',
    ];

    public function tutor()
    {
        return $this->belongsTo('App\Tutor');
    }

    public function blabClasses()
    {
        return $this->hasMany('App\BlabClass');
    }
}
