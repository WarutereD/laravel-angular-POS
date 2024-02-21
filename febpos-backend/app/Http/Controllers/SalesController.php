<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sales;
use App\Models\Product;

class SalesController extends Controller
{
    public function store(Request $request)
    {
        $totalAmount = 0;
        $quantity = 0;
        $items = [];

        foreach ($request->input('items') as $item) {
            $product = Product::find($item['product_id']);
            $quantity += $item['quantity'];
            $totalAmount += $item['quantity'] * $product->selling_price;
            $unitPrice = $product->selling_price;

            $items[] = [
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
                'unit_price' => $product->selling_price,
                'total_amount' => $item['quantity'] * $product->selling_price,

            ];
        }

        $sale = Sales::create([
            'sale_date' => now(),
            'quantity' => $quantity,
            'total_amount' => $totalAmount,
            'unit_price' => $unitPrice,
        ]);

        foreach ($items as $item) {
            $sale->items()->create($item);
        }

        return response()->json($sale);
    }
}