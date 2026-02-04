'use client';
import { Icon } from "@iconify/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "../features/ui/uiSlice";
import Link from "next/link";

export default function Navbar() {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector((state) => state.ui.isSearchOpen);
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white/55 p-4 text-black shadow-md flex justify-evenly items-center relative">
     
      {/* Social icons */}
      <div className="flex gap-2">
        <Icon icon="mingcute:facebook-line" className="w-8 h-8 text-gray-400 hover:text-blue-500" />
        <Icon icon="mingcute:instagram-line" className="w-8 h-8 text-gray-400 hover:text-pink-500" />
        <Icon icon="ic:baseline-whatsapp" className="w-8 h-8 text-gray-400 hover:text-green-500" />
      </div>

      {/* Brand */}
      <div className="text-3xl font-bold dancing-font">LumaWear</div>

      {/* Search + Cart */}
      <div className="flex items-center gap-4">
        <Icon icon="mdi:human-greeting-variant" className="w-8 h-8 text-gray-400 hover:text-black" />

        {/* Cart icon with badge */}
        <Link href="/cart" className="relative">
          <Icon icon="mdi:cart" className="w-8 h-8 text-gray-400 hover:text-black" />
          {totalCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 text-xs flex items-center justify-center rounded-full">
              {totalCount}
            </span>
          )}
        </Link>

        {/* Search icon */}
        <Icon
          icon="material-symbols:search-rounded"
          className="w-8 h-8 text-gray-400 hover:text-black"
          onClick={() => dispatch(toggleSearch())}
        />

        <input
          type="text"
          placeholder="Search products..."
          className={`absolute right-10 top-5 border px-3 py-1 rounded transition-all duration-300 ${
            isSearchOpen ? "w-48 opacity-100 visible" : "w-0 opacity-0 invisible"
          }`}
        />
      </div>
    </nav>
  );
}
