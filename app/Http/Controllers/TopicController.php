<?php

namespace App\Http\Controllers;

use App\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    public function index()
    {
        return response()->json(Topic::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(Topic::create($request->all()), 201);
    }

    public function show($id)
    {
        $topic = Topic::find($id);
        return response()->json($topic, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(Topic::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(Topic::find($id)->delete(), 204);
    }
}
