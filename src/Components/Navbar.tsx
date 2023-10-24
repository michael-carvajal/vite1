import React, { useState } from "react";
import logo from "../images/better_logo.jpg";
const Navbar = () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

      const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
      };

  return (
    <nav className="flex h-20  relative w-full items-center justify-between px-5 shadow-md">
      <img src={logo} className="h-4/5" />
      <div className="hidden space-x-4 md:block">
        <a
          href="#"
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
          aria-current="page"
        >
          Featured
        </a>
        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          About Us
        </a>
        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Testimonials
        </a>
        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Follow Us
        </a>
      </div>
      <div className=" flex items-center md:hidden">
        {/* <!-- Mobile menu button--> */}
        <button
          type="button"
          className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
                  aria-expanded={mobileMenuOpen}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
          <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
         <div className="sm:hidden absolute right-0 top-20 bg-slate-800 rounded" id="mobile-menu ">
    <div className="space-y-1 px-2 pb-3 pt-2 ">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
      )}
    </nav>
  );
};

export default Navbar;
