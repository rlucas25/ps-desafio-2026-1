<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;
use App\Models\Products;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class ProductsController extends Controller
{

    protected $product;

    public function __construct(products $product)
    {
        $this->product = $product;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $products = $this->product->with('category')->get();
        return response()->json($products, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductsRequest $request): JsonResponse
    {
        $data = $request->validated();
        
        if ($request->hasFile('image')){
            $path = $request->file('image')->store('products','public');
            $data['image'] = url('storage/'.$path);    
        }

        $product = $this->product->create($data);
        $id = $product->id;
        $product_category = $this->product->with('category')->findOrFail($id);

        return response()->json($product_category, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        $product = $this->product->with('category')->findOrFail($id);
        return response()->json($product, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductsRequest $request, $id): JsonResponse
    {
        $product = $this->product->with('category')->findOrFail($id);
        $data = $request->validated(); 

        if($request->hasFile('image')) {
            try {
                $image_name = explode('products/', $product['image']);
                Storage::disk('public')->delete('products/'.$image_name[1]);
            } catch (Throwable) {
            } finally {
                $path = $request->file('image')->store('products', 'public');
                $data['image'] = url('storage/'.$path);
            }
        }

        $product->update($data);

        return response()->json($product, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): JsonResponse
    {
        $product = $this->product->findOrFail($id);
        $product->delete();
        return response()->json(['Message' => 'produto deletado com sucesso!']);
    
    }
}
