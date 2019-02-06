<?php

namespace App\Http\Controllers;

use App\Tutor;
use Illuminate\Http\Request;

class TutorController extends Controller
{
    public function index()
    {
        return response()->json(Tutor::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(Tutor::create($request->all()), 201);
    }

    public function show($id)
    {
        $tutor = Tutor::find($id);
        return response()->json($tutor, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(Tutor::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(Tutor::find($id)->delete(), 204);
    }
}
