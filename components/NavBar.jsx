import React from "react";
import Link from "next/link";

const NavBar = () => {
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
        <Link href="/cart">Cart</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
