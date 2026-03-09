import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#0F172A] z-[9999] transition-all duration-700 ${
        loading
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Animated Background Glow */}
      <div className="absolute w-72 h-72 bg-[#38BDF8] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-[#22C55E] rounded-full blur-[120px] opacity-30 animate-ping"></div>

      <div className="relative text-center space-y-6">

        {/* Animated Name */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-widest text-[#E5E7EB] 
          animate-[fadeIn_1.5s_ease-in-out]"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          Sumit Yadav
        </h1>

        {/* Profession */}
        <p className="text-lg md:text-2xl text-[#38BDF8] tracking-[6px] animate-[fadeUp_2s_ease-in-out]">
          FRONTEND DEVELOPER
        </p>

        {/* Animated Bars */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-8 bg-[#38BDF8] animate-bounce"></div>
          <div className="w-2 h-8 bg-[#22C55E] animate-bounce delay-150"></div>
          <div className="w-2 h-8 bg-[#38BDF8] animate-bounce delay-300"></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
