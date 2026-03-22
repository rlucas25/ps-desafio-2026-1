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

    public function instruments(){
        return $this->hasMany(Instruments::class, 'category_id', 'id');
    }

    // Delete all instruments with category
    protected static function booted()
    {
        self::deleting(function (Category $category){
            $category->instruments()->each(function (Instruments $instrument){
                $instrument->delete();
                
            });
        });
    }
}
