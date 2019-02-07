<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    protected $fillable = [
        'title',
        'description',
    ];
    public function courses()
    {
        return $this->belongsToMany(Course::class);
    }
}
