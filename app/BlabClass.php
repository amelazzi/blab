<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BlabClass extends Model
{
    protected $fillable = [
        'title',
        'description',
        'date',
        'course_id',
    ];

    public function course()
    {
        return $this->belongsTo('App\Course');
    }
}
