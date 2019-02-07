<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'title',
        'body',
        'rate',
        'from',
        'enrollment_id'
    ];
}
