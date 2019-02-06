<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{

    public function index()
    {
        return response()->json(Message::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(Message::create($request->all()), 201);
    }

    public function show($id)
    {
        $message = Message::find($id);
        return response()->json($message, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(Message::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(Message::find($id)->delete(), 204);
    }
}
