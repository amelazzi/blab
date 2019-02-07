<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
  protected $fillable = [
        'name',
    ];

    public function tutorRequests()
    {
        return $this->hasMany('App\TutorRequest');
    }
}
