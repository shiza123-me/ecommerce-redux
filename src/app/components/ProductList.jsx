"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";
import { products } from "../data/products";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

console.log("CART ITEMS:", cartItems);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 mt-28">
      {items.map((product) => (
        <div key={product.id} className="border border-gray-300 rounded-lg p-4">
            <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover"

          />

          <h3 className="text-red-700 text-sm">{product.title}</h3>
          <p className="text-sm">${product.price}</p>
          <button
  onClick={() => {
    console.log("ADD CLICKED", product);
    dispatch(addToCart(product));
  }}



            className="text-sm border bg-red-400 rounded-lg p-2 hover:bg-red-200"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
