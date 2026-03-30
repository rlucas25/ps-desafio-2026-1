<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Products;
use Illuminate\Database\Seeder;

class productsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $calcados = Category::where('name', 'Calcados')->first();
        $shorts = Category::where('name', 'Shorts')->first();
        $camisas = Category::where('name', 'Camisas')->first();
        $bolas = Category::where('name', 'Bolas')->first();

        $products = [
            [
                'name' => 'Tênis World Destroyer',
                'brand' => 'Destroyer',
                'price' => 399.90,
                'year' => 2024,
                'image' => null,
                'amount' => 25,
                'category_id' => $calcados->id,
            ],
            [
                'name' => 'Camiseta World Destroyer',
                'brand' => 'Destroyer',
                'price' => 99.90,
                'year' => 2024,
                'image' => null,
                'amount' => 25,
                'category_id' => $camisas->id,
            ],
            [
                'name' => 'Short World Destroyer',
                'brand' => 'Destroyer',
                'price' => 59.90,
                'year' => 2024,
                'image' => null,
                'amount' => 25,
                'category_id' => $shorts->id,
            ],
            [
                'name' => 'Bola World Destroyer',
                'brand' => 'Destroyer',
                'price' => 59.90,
                'year' => 2024,
                'image' => null,
                'amount' => 25,
                'category_id' => $bolas->id,
            ],
            
        ];

        foreach ($products as $product) {
            Products::create($product);
        }
    }
}
