<?php

namespace App\Http\Controllers;

use App\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{

    public function index()
    {
        return response()->json(Notification::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(Notification::create($request->all()), 201);
    }

    public function show($id)
    {
        $notification = Notification::find($id);
        return response()->json($notification, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(Notification::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(Notification::find($id)->delete(), 204);
    }
}
