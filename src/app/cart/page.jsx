"use client"; // important for client-side Redux

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
<Link href="/"
className="text-center border border-gray-300 bg-blue-950 text-white p-2 rounded-full mb-4"
>Go To Products</Link>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link href="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Go to Products
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 mt-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center border p-4 rounded-lg shadow-sm gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-700">Price: ${item.price}</p>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +1
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 p-4 border-t">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => alert(`Order placed! Total: $${total.toFixed(2)}`)}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
