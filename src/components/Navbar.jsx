import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0F172A]/80 backdrop-blur-md shadow-lg border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h2
  className="text-4xl bg-[#38BDF8]
  bg-clip-text text-transparent cursor-pointer transition duration-500 hover:scale-110"
  style={{ fontFamily: "'Brush Script MT', cursive" }}
>
  Sumit
</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[#E5E7EB] font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <Link to={link.path} className="transition duration-300">
                {link.name}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#38BDF8] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-[#38BDF8] text-[#0F172A] 
            font-semibold transition duration-300 
            hover:bg-[#22C55E] hover:shadow-[0_0_15px_#22C55E]"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-[#E5E7EB] cursor-pointer transition duration-300 hover:text-[#38BDF8]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0F172A] overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-[#E5E7EB] text-lg">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="transition duration-300 hover:text-[#38BDF8]"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-6 py-2 rounded-full bg-[#38BDF8] text-[#0F172A] 
            font-semibold transition duration-300 
            hover:bg-[#22C55E] hover:shadow-[0_0_15px_#22C55E]"
          >
            Hire Me
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
