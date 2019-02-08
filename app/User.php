<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function tutor()
    {
        return $this->hasOne('App\Tutor');
    }

    public function student()
    {
        return $this->hasOne('App\Student');
    }

    public function wallet()
    {
        return $this->hasOne('App\Wallet');
    }

    public function testimonial()
    {
        return $this->hasOne('App\Testimonial');
    }

    public function notifications()
    {
        return $this->hasMany('App\Notification');
    }
}
