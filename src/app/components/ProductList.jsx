"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { products } from "../data/products";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((product) => (
        <div key={product.id} className="border p-4">
            <img
            src={product.image}
            alt={product.title}
            className="w-fit h-fit object-cover"
          />

          <h3 className="text-red-700">{product.title}</h3>
          <p>${product.price}</p>
          <button
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
