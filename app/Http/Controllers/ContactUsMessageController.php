<?php

namespace App\Http\Controllers;

use App\ContactUsMessage;
use Illuminate\Http\Request;

class ContactUsMessageController extends Controller
{

    public function index()
    {
        return response()->json(ContactUsMessage::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(ContactUsMessage::create($request->all()), 201);
    }

    public function show($id)
    {
        $ContactUsMessage = ContactUsMessage::find($id);
        return response()->json($ContactUsMessage, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(ContactUsMessage::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(ContactUsMessage::find($id)->delete(), 204);
    }
}
