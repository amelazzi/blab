<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Socialite;

class SocialController extends Controller
{
    public function redirectToProvider($social)
    {
        if ($social == "facebook" || $social == "google") {
            return Socialite::driver($social)->stateless()->redirect();
        } else {
            return Socialite::driver($social)->redirect();
        }
    }

    public function handleProviderCallback($social)
    {
        if ($social == "facebook" || $social == "google") {
            $userSocial = Socialite::driver($social)->stateless()->user();
        } else {
            $userSocial = Socialite::driver($social)->user();
        }

        $token = $userSocial->token;

        $user = User::firstOrNew(['email' => $userSocial->getEmail()]);
        if (!$user->id) {
            $user->fill(["name" => $userSocial->getName(), "password" => bcrypt(str_random(6))]);
            $user->save();
        }
        return response()->json([
            'user' => [$user],
            'userSocial' => $userSocial,
            'token' => $token,
        ], 200);
    }
}
