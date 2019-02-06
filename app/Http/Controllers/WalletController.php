<?php

namespace App\Http\Controllers;

use App\Wallet;
use Illuminate\Http\Request;

class WalletController extends Controller
{

    public function index()
    {
        return response()->json(Wallet::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(Wallet::create($request->all()), 201);
    }

    public function show($id)
    {
        $Wallet = Wallet::find($id);
        return response()->json($Wallet, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(Wallet::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(Wallet::find($id)->delete(), 204);
    }
}
