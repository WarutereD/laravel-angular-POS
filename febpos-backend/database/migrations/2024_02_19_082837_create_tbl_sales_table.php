<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_sales', function (Blueprint $table) {
            $table->id();
            $table->dateTime('sale_date');
            $table->decimal('total_amount', 10, 2);
            $table->decimal('unit_price', 10, 2);
            $table->bigInteger('quantity');
            $table->unsignedBigInteger('product_id')->nullable(); // Add foreign key
            $table->timestamps();

             $table->foreign('product_id')->references('id')->on('tbl_products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_sales');
    }
};
