"use client";

import React, { useState } from "react";

import { CiMenuFries } from "react-icons/ci";

const ResponsiveNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative bg-[--background] boxShadow rounded-full px-10 py-4 default:px-20">
      <img
        src="https://i.ibb.co/0BZfPq6/darklogo.png"
        alt="logo"
        className="w-[55px] "
      />
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
        <li className="text-white font-semibold before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          home
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          features
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          blogs
        </li>
        <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
          shop
        </li>
      </ul>

      <div className="items-center gap-[10px] flex">
        <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">
          Contact Us
        </button>

        <CiMenuFries
          className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } lg:hidden bg-[--background] boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
            home
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">
            Features
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
            Blogs
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">
            Shop
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
