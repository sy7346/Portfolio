import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#0F172A] text-[#E5E7EB] pt-16 pb-10 overflow-hidden">

      {/* Top Gradient Line */}
      {/* <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#38BDF8] to-[#22C55E]" /> */}

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-[#38BDF8] to-[#22C55E] blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Brand Section */}
          <div className="space-y-4">
            <h2
              className="text-4xl bg-gradient-to-r from-[#38BDF8] to-[#22C55E] 
              bg-clip-text text-transparent"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Sumit Yadav
            </h2>

            <p className="text-[#94A3B8] text-sm">
              Frontend Developer passionate about creating modern, responsive
              and animated web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#38BDF8]">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#22C55E] transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#22C55E] transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#22C55E] transition duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#22C55E] transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#38BDF8]">
              Connect With Me
            </h3>

            <div className="flex justify-center md:justify-start gap-4">

              <a
                href="https://github.com/sy7346"
                className="p-3 rounded-full border border-[#1E293B] 
                hover:border-[#38BDF8] hover:shadow-[0_0_15px_#38BDF8] 
                transition duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/sumit-yadav-webdeveloper/"
                className="p-3 rounded-full border border-[#1E293B] 
                hover:border-[#22C55E] hover:shadow-[0_0_15px_#22C55E] 
                transition duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="sy734681@gmail.com"
                className="p-3 rounded-full border border-[#1E293B] 
                hover:border-[#38BDF8] hover:shadow-[0_0_15px_#38BDF8] 
                transition duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-[#1E293B] pt-6 text-center text-sm text-[#94A3B8]">
          © {new Date().getFullYear()} Sumit Yadav. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
