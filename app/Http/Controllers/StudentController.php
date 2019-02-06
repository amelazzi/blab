<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{

    public function index()
    {
        return response()->json(Student::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(Student::create($request->all()), 201);
    }

    public function show($id)
    {
        $student = Student::find($id);
        return response()->json($student, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(Student::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(Student::find($id)->delete(), 204);
    }
}
