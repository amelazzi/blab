<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
  protected $fillable = [
        'balance',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
