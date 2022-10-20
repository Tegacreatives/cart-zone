import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Store } from "../utils/Store";

const NavBar = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <nav className="flex justify-between py-6 px-10 h-15 shadow-md">
      <Link href="/">
        <a className="text-lg font-bold">Cart Zone</a>
      </Link>
      <ul className="flex flex-row space-x-6">
        <Link href="/categories">Categories</Link>
        <Link href="/deals">Deals</Link>
        <Link href="/shop">What's New</Link>
        <Link href="/delivery">Delivery</Link>
      </ul>
      <div>
        <form action="">
          <div className="flex relative justify-between items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt="search"
              className="h-5 w-5 absolute ml-3 
          pointer-events-none"
            />
            <input
              type="text"
              className="bg-gray-200 px-3 py-1
                placeholder-gray-500 text-black rounded-2xl border-none pl-12 w-full"
              name="search"
              placeholder="Search Product"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
      <ul className="flex flex-row space-x-6">
        <Link href="/account">Account</Link>
        <Link href="/cart">
          <a>
            Cart{" "}
            {cartItemsCount > 0 && (
              <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                {cartItemsCount}
              </span>
            )}
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
