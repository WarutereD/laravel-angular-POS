<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleItem extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = "tbl_sale_items";
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
