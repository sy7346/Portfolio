import React, { useState } from "react";
// import { pdfjs } from "react-pdf";
import { motion, useScroll, useSpring } from "framer-motion";
// import { Document, Page, pdfjs} from "react-pdf";
// const resume = "/Sumit-resume.pdf";
// import worker from "pdfjs-dist/build/pdf.worker.min?url";

// pdfjs.GlobalWorkerOptions.workerSrc = worker;
// import resume from "../assets/Sumit-resume.pdf";
// set workerSrc for react-pdf
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/* =====================
   SCROLL PROGRESS BAR
===================== */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-sky-400 origin-left z-50"
    />
  );
}

/* =====================
   ANIMATION PRESETS
===================== */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/* =====================
   DATA
===================== */
const skills = [
  { name: "HTML", value: 95 },
  { name: "CSS / Tailwind", value: 90 },
  { name: "JavaScript", value: 88 },
  { name: "React.js", value: 85 },
  { name: "WordPress", value: 95 },
];

const professionalSkills = [
  "UI / UX Design",
  "Responsive Web Design",
  "Performance Optimization",
  "SEO Friendly Code",
  "API Integration",
  "Animation & Interaction",
];

const tools = ["VS Code", "GitHub", "Figma", "Postman", "WordPress", "Vite"];

const stats = [
  { label: "Days I Code", value: "300+" },
  { label: "Projects Completed", value: "40+" },
  { label: "Happy Clients", value: "25+" },
];

/* =====================
   COMPONENT
===================== */
export default function About() {
  const [showPDF, setShowPDF] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      {/* TOP SCROLL PROGRESS */}
      <ScrollProgressBar />

      <section className="relative min-h-screen bg-[#0F172A] text-[#E5E7EB] overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-sky-400/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-green-500/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          {/* HEADER */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="text-center mb-24"
          >
            <motion.span variants={item} className="text-sky-400 uppercase tracking-widest text-sm">
              About Me
            </motion.span>

            <motion.h2 variants={item} className="text-4xl sm:text-5xl font-bold mt-4">
              
            </motion.h2>

            <motion.p variants={item} className="text-[#94A3B8] mt-4 text-base sm:text-lg">
              Creative Web Developer • React Specialist
            </motion.p>
          </motion.div>

          {/* INTRO + SKILLS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid lg:grid-cols-2 gap-16 items-center mb-32"
          >
            {/* LEFT */}
            <motion.div variants={item}>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
                I Build Visually Stunning & High-Performance Websites
              </h3>

              <p className="text-[#94A3B8] mb-5">
                I am a passionate Web Developer dedicated to crafting modern, animated, and responsive web experiences. I combine clean UI design, fast performance, and accessibility to help brands grow digitally and engage users effectively.
              </p>

              <p className="text-[#94A3B8] mb-8">
                With a focus on user-centric design and cutting-edge technologies, I turn ideas into functional websites that are both beautiful and high-performing.
              </p>

              {/* import { motion } from "framer-motion"; */}

<motion.button
  type="button"
   onClick={() =>
                  window.open("/Sumit-resume.pdf", "_blank")
                }
  
  // onClick={() => setShowPDF(true)}
  whileHover={{ scale: 1.05 }} 
  //  onClick={() => window.open("/Sumit-resume.pdf", "_blank")}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="
    cursor-pointer flex items-center justify-between
    px-4 py-3 w-[180px] rounded-full
    bg-gradient-to-r from-sky-400 to-green-500
    text-[#0F172A] font-mono font-semibold
    tracking-wider shadow-xl
    hover:ring-2 hover:ring-sky-300
  "
>
  Hire Me

  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-5 h-5 ml-2"
    animate={{ y: [0, 6, 0] }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    />
  </motion.svg>
</motion.button>

              
            </motion.div>

            {/* SKILL BARS */}
            <motion.div variants={item} className="space-y-6">
              <h4 className="text-xl sm:text-2xl font-semibold mb-6">Core Skills</h4>

              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>

                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gradient-to-r from-sky-400 to-green-500"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* PROFESSIONAL SKILLS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-32"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Professional Skillset
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {professionalSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 180 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* TOOLS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-32"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Tools I Use
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
              {tools.map((tool, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.15 }}
                  className="p-4 rounded-xl bg-slate-800/60"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* STATS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-8 text-center"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={item}
                className="p-8 rounded-2xl bg-gradient-to-br from-sky-400/10"
              >
                <motion.h4
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="text-3xl sm:text-4xl font-bold text-sky-400"
                >
                  {stat.value}
                </motion.h4>
                <p className="text-[#94A3B8] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* PDF Modal */}
        {showPDF && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
            <div className="bg-[#0F172A] p-4 rounded-xl max-w-3xl w-full relative">
              <button
                onClick={() => setShowPDF(false)}
                className="absolute top-2 right-2 text-white text-xl font-bold"
              >
                ✕
              </button>

              <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={index} pageNumber={index + 1} />
                ))}
              </Document>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
