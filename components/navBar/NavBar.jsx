import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between py-5">
      <div className="text-2xl">Cart Zone</div>
      <ul className="flex flex-row space-x-6">
        <li>Categories</li>
        <li>Deals</li>
        <li>What's New</li>
        <li>Delivery</li>
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
        <li>Account</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default NavBar;
