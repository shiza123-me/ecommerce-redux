"use client";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between mb-4 border p-2 rounded">
          <img src={item.image} className="w-24 h-24 object-cover" />
          <div className="flex-1 ml-2">
            <h2 className="font-semibold">{item.title}</h2>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="flex gap-2 mt-1">
              <button
                className="bg-green-400 p-1 rounded text-white text-sm"
                onClick={() => dispatch(addToCart(item))}
              >
                +1
              </button>
              <button
                className="bg-red-400 p-1 rounded text-white text-sm"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <h2 className="text-xl font-bold mt-4">Total: ${total}</h2>
      {cartItems.length > 0 && (
        <button
          className="bg-blue-500 text-white p-2 rounded mt-4"
          onClick={() => alert(`Order placed! Total: $${total}`)}
        >
          Place Order
        </button>
      )}
    </div>
  );
}
