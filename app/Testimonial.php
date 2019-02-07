<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
  protected $fillable = [
        'body',
        'weight'
    ];
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
