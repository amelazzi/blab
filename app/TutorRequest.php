<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TutorRequest extends Model
{
  protected $fillable = [
        'body',
        'language_id',
    ];

    public function student()
    {
        return $this->belongsTo('App\Student');
    }

    public function language()
    {
        return $this->belongsTo('App\Language');
    }
}
