<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;

class CategoriesController extends Controller
{
    public function index()
    {
        return Categories::all();
    }
    
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'category_name' => 'required|unique:tbl_categories|max:255',
        ]);

        $category = Categories::create([
            'category_name' => $request->category_name,
        ]);

        return response()->json(['category' => $category], 201);
    }
}
