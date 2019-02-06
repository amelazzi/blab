<?php

namespace App\Http\Controllers;

use App\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index()
    {
        return response()->json(Review::get(), 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return response()->json(Review::create($request->all()), 201);
    }

    public function show($id)
    {
        $review = Review::find($id);
        return response()->json($review, 201);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        return response()->json(Review::find($id)->update($request->all()), 204);
    }

    public function destroy($id)
    {
        return response()->json(Review::find($id)->delete(), 204);
    }
}
