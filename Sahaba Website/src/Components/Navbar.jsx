import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "New Arrivals", path: "/collections" },
    { name: "Collections", path: "/collections" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#f6ede8]/75 backdrop-blur-lg border-[#e3d2c8]/70 shadow-sm"
          : "bg-[#f6ede8] border-[#e8dad2]"
      }`}
    >
      {/* Top Announcement Bar */}
      <div className="bg-[#2c221e] text-[#f6ede8] text-[11px] sm:text-xs tracking-widest uppercase text-center py-2 px-4">
        Complimentary Delivery on Orders Above ৳3,000 • New Collection Live
      </div>

      {/* Main Navbar */}
      <nav className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-3 items-center h-20">
          {/* Left: Mobile Menu Button + Desktop Links */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 rounded-full text-[#4a3931] hover:text-[#8c5234] hover:bg-[#e8d8ce]/70 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <ul className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-[0.15em] uppercase text-[#5c483e]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative py-1.5 transition-colors duration-300 hover:text-[#8c5234] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-full after:bg-[#8c5234] after:origin-left after:transition-transform after:duration-300 ${
                        isActive
                          ? "text-[#2c221e] font-semibold after:scale-x-100"
                          : "after:scale-x-0 hover:after:scale-x-100"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: SAHABA Brand Logo */}
          <div className="flex justify-center">
            <Link
              to="/"
              className="group text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/logo.png"
                alt="Sahaba"
                className="h-15 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Right: Action Icons */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 text-[#4a3931]">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 rounded-full hover:bg-[#e8d8ce]/75 hover:text-[#8c5234] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.7} />
            </button>

            {/* <Link
              to="/wishlist"
              className="hidden sm:block p-2.5 rounded-full hover:bg-[#e8d8ce]/75 hover:text-[#8c5234] hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Wishlist"
            >
              <Heart size={20} strokeWidth={1.7} />
            </Link> */}

            <Link
              to="/cart"
              className="group relative p-2.5 rounded-full hover:bg-[#e8d8ce]/75 hover:text-[#8c5234] hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.7} />
              <span className="absolute top-1 right-1 bg-[#2c221e] group-hover:bg-[#8c5234] text-[#f6ede8] text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-300">
                0
              </span>
            </Link>

            <Link
              to="/account"
              className="hidden sm:block p-2.5 rounded-full hover:bg-[#e8d8ce]/75 hover:text-[#8c5234] hover:scale-105 active:scale-95 transition-all duration-300"
              aria-label="Account"
            >
              <User size={20} strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Expandable Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-[#e3d2c8]/80 bg-[#faf4f0]/90 backdrop-blur-md px-4 py-3 transition-all duration-300">
          <div className="max-w-2xl mx-auto flex items-center gap-3">
            <Search size={18} className="text-[#8c5234]" />
            <input
              type="text"
              placeholder="Search dresses, festive wear, silk..."
              className="w-full bg-transparent text-sm text-[#2c221e] placeholder-[#9c877c] focus:outline-none"
              autoFocus
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 rounded-full text-[#5c483e] hover:bg-[#e8d8ce]/70 hover:text-[#2c221e] transition-all duration-200 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e3d2c8]/80 bg-[#faf4f0]/95 backdrop-blur-md px-6 py-5 space-y-4">
          <ul className="flex flex-col space-y-2 text-xs font-medium tracking-[0.18em] uppercase text-[#5c483e]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-[#e8d8ce]/70 text-[#8c5234] font-semibold"
                        : "hover:bg-[#e8d8ce]/40 hover:text-[#8c5234]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-[#e3d2c8] flex items-center gap-6 text-xs uppercase tracking-widest text-[#5c483e]">
            <Link
              to="/wishlist"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 hover:text-[#8c5234] transition-colors"
            >
              <Heart size={16} /> Wishlist
            </Link>
            <Link
              to="/account"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 hover:text-[#8c5234] transition-colors"
            >
              <User size={16} /> Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
