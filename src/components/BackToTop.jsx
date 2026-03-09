import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Pulse Ring */}
      <div className="absolute inset-0 rounded-full animate-ping bg-[#38BDF8]/30"></div>

      {/* Button */}
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center 
        w-12 h-12 md:w-14 md:h-14 rounded-full 
        bg-[#38BDF8] text-[#0F172A] shadow-lg 
        transition duration-300 hover:scale-110 
        hover:shadow-[0_0_20px_#22C55E]"
      >
        {/* Animated Arrow */}
        <ArrowUp
          size={22}
          className="md:w-6 md:h-6 
          transition-all duration-300 
          group-hover:-translate-y-1 
          group-hover:animate-bounce"
        />
      </button>
    </div>
  );
};

export default BackToTop;
