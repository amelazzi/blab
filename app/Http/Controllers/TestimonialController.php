<?php

namespace App\Http\Controllers;

use App\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{

    public function index()
    {
        return response()->json(Testimonial::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(Testimonial::create($request->all()), 201);
    }

    public function show($id)
    {
        $testimonial = Testimonial::find($id);
        return response()->json($testimonial, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(Testimonial::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(Testimonial::find($id)->delete(), 204);
    }
}
