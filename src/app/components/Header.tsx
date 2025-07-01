"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      <header
        className={`fixed z-50 bg-white shadow-lg transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-0 w-full rounded-none"
            : "top-4 w-11/12 max-w-7xl rounded-lg"
        } left-1/2 transform -translate-x-1/2`}
      >
        <div className="w-full">
          <nav className="flex items-center justify-between px-4 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {/* <img src="/img/logo.png" alt="Logo" className="h-8" /> */}
              YOUR LOGO
            </Link>

            <div className="flex items-center justify-between">
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
                <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
              </button>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8 mx-10">
                <Link
                  href="/"
                  className="text-gray-800 hover:text-yellow-500 font-medium text-sm uppercase transition-colors"
                >
                  Home
                </Link>

                {/* Shop Dropdown */}
                <div className="relative group">
                  <button className="text-gray-800 hover:text-yellow-500 font-medium text-sm uppercase transition-colors flex items-center">
                    Shop
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <Link
                      href="/category"
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      Shop Category
                    </Link>
                    <Link
                      href="/single-product"
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      Product Details
                    </Link>
                    <Link
                      href="/checkout"
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      Product Checkout
                    </Link>
                    <Link
                      href="/cart"
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      Shopping Cart
                    </Link>
                    <Link
                      href="/confirmation"
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      Confirmation
                    </Link>
                  </div>
                </div>

                {/* Pages Dropdown */}
                <div className="relative group">
                  <button className="text-gray-800 hover:text-yellow-500 font-medium text-sm uppercase transition-colors flex items-center">
                    Pages
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      href="/tracking"
                      className="block px-4 py-2 text-gray-800 hover:bg-yellow-500 hover:text-white transition-colors"
                    >
                      Tracking
                    </Link>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="text-gray-800 hover:text-yellow-500 font-medium text-sm uppercase transition-colors"
                >
                  Contact
                </Link>
              </div>

              {/* Right side icons */}
              <div className="hidden lg:flex items-center space-x-4">
                <a
                  href="/cart"
                  className="text-gray-800 hover:text-yellow-500 transition-colors"
                >
                  <span className="text-xl">🛍️</span>
                </a>
                <button
                  className="text-gray-800 hover:text-yellow-500 transition-colors"
                  onClick={() => setIsSearchVisible(!isSearchVisible)}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="px-4 py-2 space-y-2">
                <Link
                  href="/"
                  className="block py-2 text-gray-800 hover:text-yellow-500"
                >
                  Home
                </Link>
                <Link
                  href="/category"
                  className="block py-2 text-gray-800 hover:text-yellow-500"
                >
                  Shop Category
                </Link>
                <Link
                  href="/blog"
                  className="block py-2 text-gray-800 hover:text-yellow-500"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 text-gray-800 hover:text-yellow-500"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Search Bar */}
        {isSearchVisible && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-yellow-400 to-orange-500 py-4 z-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="flex-1 bg-transparent text-white placeholder-white border-none outline-none text-lg"
                />
                <button
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsSearchVisible(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
