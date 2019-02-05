<?php

namespace App\Http\Controllers;

use App\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        return response()->json(Course::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(Course::create($request->all()), 201);
    }

    public function show($id)
    {
        $course = Course::find($id);
        return response()->json($course, 201);
    }

    public function edit(Course $course)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(Course::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(Course::find($id)->delete(), 204);
    }
}
