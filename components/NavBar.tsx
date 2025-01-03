import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className=" text-[#333232] h-auto w-full flex justify-between px-7 py-7 text-sm font-bold ">
        <div className="flex items-center  w-max justify-between gap-3  ">
          <button>News & Notable</button>
          <button>Gifts</button>
          <button>Skin Care</button>
          <button>Hand & Body</button>
          <button>Home</button>
          <button>Hair</button>
          <button>Fragrance</button>
          <button>Kits & Travel</button>
          <button>Read</button>
          <button>Stores</button>
          <Link href="/">Facial Appointments</Link>
          <button>Search</button>
        </div>
        <div className="flex items-center  w-max justify-between gap-3">
          <Link href="/">Log in</Link>
          <Link href="/">Cabinet</Link>
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
