<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = [
        'title',
        'body',
        'type',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
