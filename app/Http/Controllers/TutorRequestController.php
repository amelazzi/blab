<?php

namespace App\Http\Controllers;

use App\TutorRequest;
use Illuminate\Http\Request;

class TutorRequestController extends Controller
{

    public function index()
    {
        return response()->json(TutorRequest::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(TutorRequest::create($request->all()), 201);
    }

    public function show($id)
    {
        $tutorRequest = TutorRequest::find($id);
        return response()->json($tutorRequest, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(TutorRequest::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(TutorRequest::find($id)->delete(), 204);
    }
}
