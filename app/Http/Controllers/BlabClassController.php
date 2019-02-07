<?php

namespace App\Http\Controllers;

use App\BlabClass;
use Illuminate\Http\Request;

class BlabClassController extends Controller
{
    public function index()
    {
        return response()->json(BlabClass::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(BlabClass::create($request->all()), 201);
    }

    public function show($id)
    {
        $blabClass = BlabClass::find($id);
        return response()->json($blabClass, 201);
    }

    public function edit(BlabClass $BlabClass)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(BlabClass::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(BlabClass::find($id)->delete(), 204);
    }
}
