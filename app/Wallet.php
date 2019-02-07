<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
  protected $fillable = [
        'balance',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
