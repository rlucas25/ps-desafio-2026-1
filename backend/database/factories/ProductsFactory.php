<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Products;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductsFactory extends Factory
{
    protected $model = Products::class;

    public function definition(): array
    {
        $category = Category::inRandomOrder()->first();

        if (!$category) {
            $category = Category::factory()->create();
        }

        $sportProducts = [

            'Calcados' => [
                'names' => [
                    'Tênis Runner Pro',
                    'Tênis Speed Max',
                    'Tênis Training Elite',
                    'Tênis Air Motion',
                    'Tênis Urban Sport',
                    'Tênis Nitro Boost',
                    'Tênis Fast Grip',
                    'Tênis Prime Run',
                    'Tênis Dynamic Fit',
                    'Tênis Performance X'
                ],
            ],

            'Camisas' => [
                'names' => [
                    'Camisa Dry Fit',
                    'Camisa Training Pro',
                    'Camisa Match Elite',
                    'Camisa Sport Tech',
                    'Camisa Run Active',
                    'Camisa Fitness Core',
                    'Camisa Performance',
                    'Camisa Athlete Pro',
                    'Camisa Training Max',
                    'Camisa Sport Line'
                ],
            ],

            'Shorts' => [
                'names' => [
                    'Short Training Pro',
                    'Short Runner Max',
                    'Short Fitness Elite',
                    'Short Sport Core',
                    'Short Performance',
                    'Short Active Fit',
                    'Short Training Line',
                    'Short Athlete Pro',
                    'Short Dynamic Run',
                    'Short Sport Max'
                ],
            ],

            'Bolas' => [
                'names' => [
                    'Bola Futebol Pro',
                    'Bola Match Elite',
                    'Bola Training Max',
                    'Bola Soccer Pro',
                    'Bola Champion',
                    'Bola Professional',
                    'Bola Training Pro',
                    'Bola Campo Elite',
                    'Bola Performance',
                    'Bola Strike Pro'
                ],
            ]

        ];

        $categoryName = $category->name;

        $productData = $sportProducts[$categoryName] ?? [
            'names' => ['Produto Esportivo'],
            'image' => 'sports-equipment'
        ];

        $name = $this->faker->randomElement($productData['names']);

        return [
            'name' => $name,
            'brand' => $this->faker->randomElement(['Nike', 'Adidas', 'Puma', 'Destroyer']),
            'price' => $this->faker->randomFloat(2, 80, 600),
            'amount' => $this->faker->numberBetween(5, 50),
            'year' => $this->faker->numberBetween(2022, 2026),

            'image' => 'https://picsum.photos/640/480?random=' . rand(1, 1000),

            'category_id' => $category->id,
        ];
    }
}