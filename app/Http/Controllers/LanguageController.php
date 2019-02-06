<?php

namespace App\Http\Controllers;

use App\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function index()
    {
        return response()->json(Language::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(Language::create($request->all()), 201);
    }

    public function show($id)
    {
        $language = Language::find($id);
        return response()->json($language, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(Language::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(Language::find($id)->delete(), 204);
    }
}
