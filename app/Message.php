<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
  protected $fillable = [
      'body',
      'read',
      'from',
  ];

  public function student()
    {
        return $this->belongsTo('App\Student');
    }
  public function tutor()
    {
        return $this->belongsTo('App\Tutor');
    }
}
