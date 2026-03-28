<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /** @use HasFactory<\Database\Factories\CategoryFactory> */
    use HasFactory, HasUuids;

    protected $fillable = [
        'name'
    ];

    public function products(){
        return $this->hasMany(products::class, 'category_id', 'id');
    }

    // Delete all products with category
    protected static function booted()
    {
        self::deleting(function (Category $category){
            $category->products()->each(function (products $product){
                $product->delete();
                
            });
        });
    }
}
