"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/features/products/productsSlice";
import { addToCart } from "@/features/cart/cartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((product) => (
        <div key={product.id} className="border p-4">
          <h3>{product.title}</h3>
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
