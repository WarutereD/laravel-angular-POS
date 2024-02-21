<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Categories;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();


        foreach ($products as $product) {
            $category = Categories::find($product->category_id);
            $product->category_name = $category->category_name;
        }

        return $products;
    }

    public function store(Request $request)
    {
        $category = Categories::where('category_name', $request->category_name)->first();
        
        if ($category) {
            // Replace the category_name in the request with the category_id
            $request->merge(['category_id' => $category->id]);
        } else {
            // Handle the case where the category is not found
            // You might want to return an error response here
            return response()->json(['error' => 'Category not found'], 404);
        }

        // Remove the category_name from the request
        $request->request->remove('category_name');
        return Product::create($request->all());
    }

    public function show($id)
    {
        return Product::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $product->update($request->all());

        return response()->json($product, 200);
        
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(['message' => 'Deleted'], 200);
    }
}
