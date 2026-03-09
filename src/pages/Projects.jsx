import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ravyn from "../assets/ravynperfumes.png";
import gnxmart from "../assets/gnx.png";
import kandp from "../assets/kandp.png";
import jai from "../assets/jai.png";
import math from "../assets/math.png";
import key from "../assets/key.png";
import khushi from "../assets/khushi.png";
import prakritihastkala from "../assets/prekrtic.png";
import summer from "../assets/summer.png";
import tech from "../assets/tech.png";
// import kelovo from "../assets/kelevo.png";
import kelovo from "../assets/kelovo.png";
import gotzila from "../assets/gotzila.png";
 
/* ===================== SCROLL PROGRESS BAR ===================== */
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
        className="fixed top-0 left-0 right-0 h-[3px]
        bg-sky-400 origin-left z-50"
    />
  );
}

/* ===================== ANIMATIONS ===================== */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 0.9 },
};

/* ===================== PROJECT DATA ===================== */
const projects = [
  {
    title: "Gotzilasupplement",
    category: "html",
    description: "Gotzila Supplement Website is a modern, performance-focused platform built for a premium fitness and nutrition brand. The website is designed to deliver a strong visual impact while maintaining a smooth and user-friendly experience for customers. It showcases supplements with clear layouts, engaging product sections, and intuitive navigation that improves product discovery and conversions. I worked on creating a responsive, fast-loading, and conversion-oriented interface that works seamlessly across all devices. The project reflects my ability to design and develop brand-driven websites that combine strong UI/UX, modern design principles, and business-focused functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: gotzila,
    live: "https://www.gotzilasupplement.com/",
    code: "https://www.gotzilasupplement.com/",
  },
  // --------------------- react js----------------------
   {
    title: "technology-library",
    category: "react",
    description: "Technology Library is an interactive web application designed to serve as a centralized resource hub for technology articles, tutorials, and guides. The project focuses on delivering a clean, organized, and user-friendly experience that makes exploring tech content easy and enjoyable. I worked on building the interface with responsive layouts, intuitive navigation, and modern design elements to enhance readability and engagement across devices. This application demonstrates my ability to create dynamic, content-centric platforms with attention to UX, accessibility, and performance. The Technology Library project highlights my skills in front-end development and creating informative web experiences that help users learn and discover technology topics efficiently.",
    tech: ["React", "Vite", "Tailwind", ],
    image: tech,
    live: "https://technology-library.netlify.app/",
    code: "https://technology-library.netlify.app/",
  },
  {
    title: "summer-collection",
    category: "react",
    description: "Summer Collection is a vibrant, responsive ecommerce-style web interface designed to showcase a curated selection of summer fashion items. The project focuses on delivering a visually appealing and user-friendly experience, with clean layouts, engaging imagery, and intuitive navigation that encourages product exploration. I developed this site with a strong emphasis on responsive design to ensure seamless performance across mobile and desktop devices. This project highlights my ability to create stylish and modern frontend layouts that blend aesthetic appeal with functional design. The Summer Collection site demonstrates my skills in building attractive, user-focused web experiences tailored for fashion and lifestyle audiences.",
    tech: ["React", "Vite", "Tailwind", "API"],
    image: summer,
    live: "https://summer-collection1.netlify.app/",
    code: "https://summer-collection1.netlify.app/",
  },
  // ----------------- wordpress --------------------
  {
    title: "Kelevo Software",
    category: "wordpress",
    description: "Kelevo Software is a professional technology solutions website for a trusted IT services provider specializing in CRM and ERP implementations and consulting. The platform highlights comprehensive services including Zoho customization, Salesforce integration, Odoo development, and business process automation to help companies streamline operations and drive growth. I worked on crafting a responsive, clean, and business-focused interface that clearly communicates the company’s expertise, service offerings, and industry impact. The design emphasizes intuitive navigation and professional presentation to improve user engagement and lead generation. This project reflects my ability to build scalable, client-centric web experiences tailored for B2B technology and consulting brands.",
    tech: ["WordPress", "PHP"],
    image: kelovo,
    live: "https://kelevosoftware.com/",
    code: "https://kelevosoftware.com/",
  },
   {
    title: "jaishreegarments",
    category: "wordpress",
    description: "Jaishree Garments is a professional website developed for a leading apparel and textile business, showcasing their diverse range of garments and fabric products. The platform is designed with a clean, organized layout that highlights product categories, company services, and brand values to make browsing simple and engaging. I built this site with a focus on responsive design, ensuring seamless performance across desktop and mobile devices. The user interface emphasizes clarity and visual appeal, helping visitors explore offerings and connect with the business easily. This project demonstrates my ability to create polished, business-oriented websites that effectively represent a brand and enhance online presence.",
    tech: ["WordPress", "PHP"],
    image: jai,
    live: "https://jaishreegarments.com/",
    code: "https://jaishreegarments.com/",
  },
  {
    title: "ravynperfumes",
    category: "wordpress",
    description: "Ravyn Perfumes is a stylish and immersive ecommerce-focused website designed to showcase a curated collection of luxury fragrances. The platform emphasizes elegant visuals, clear product presentation, and a smooth browsing experience to help users discover and explore premium perfume offerings. I developed this site with a thoughtful focus on responsive design, ensuring consistent performance across desktop and mobile devices. The interface balances aesthetic appeal with intuitive navigation, creating a refined user experience that aligns with the brand’s identity. This project demonstrates my ability to build modern, visually driven web experiences tailored for lifestyle and ecommerce audiences.",
    tech: ["WordPress", "PHP"],
    src: "ravynperfumes.png",
    image: ravyn,
    live: "https://ravynperfumes.com/",
    code: "https://ravynperfumes.com/",
  },
  {
    title: "WordPress Corporate Site",
    category: "wordpress",
    description: "GNX Mart is a dynamic ecommerce platform that showcases a wide range of practical products including men’s and women’s shoes, electric mosquito rackets, and daily accessories, designed for comfort, style, and everyday convenience. The site features a clean, organized layout with clear product categories, engaging visuals, and intuitive navigation to help users explore offerings easily. I developed this responsive website with attention to seamless performance across devices, effective product presentation, and a user-focused shopping experience. This project highlights my ability to build commercial web interfaces that combine strong UX design with modern frontend development for retail audiences.",
    tech: ["WordPress", "PHP"],
    image: gnxmart,
    live: "https://gnxmart.com/",
    code: "https://gnxmart.com/",
  },
  {
    title: "Kandp",
    category: "wordpress",
    description: "kandp.me is a sleek, responsive personal branding website designed to present a professional digital portfolio with clarity and style. The site highlights key information about the individual’s skills, projects, and contact details in a clean, modern layout that enhances readability and engagement. I crafted this site to focus on effective visual hierarchy, smooth navigation, and seamless performance across desktop and mobile devices. The design emphasizes personal identity and professional presence while providing visitors with an intuitive browsing experience. This project demonstrates my ability to build polished, personal web experiences that reflect brand personality and showcase expertise effectively.",
    tech: ["WordPress", "PHP"],
    image: kandp,
    live: "https://kandp.me/",
    code: "https://kandp.me/",
  },
  {
    title: "Mathemagics",
    category: "wordpress",
    description: "Mathemagics is an educational website designed to support students in mastering mathematics through modern, interactive digital learning. The platform highlights smart classroom features, structured board exam preparation, and personalized guidance to help learners build strong fundamentals and confidence. I developed this site with a focus on responsive and user-friendly design that clearly presents key offerings such as theory lessons, practice sessions, career counseling, and performance support tools. The interface balances engaging visuals with intuitive navigation to make academic resources accessible across devices. This project showcases my ability to create informative, education-centric web experiences that enhance learning and student engagement.",
    tech: ["WordPress", "PHP"],
    image: math,
    live: "https://mathemagics.in/",
    code: "https://mathemagics.in/",
  },
  {
    title: "keymantra",
    category: "wordpress",
    description: "Key Mantra is a professional website developed for a business offering digital solutions including custom software, mobile app development, and IT consulting services. The platform features a clean and modern design that clearly highlights the company’s core services, expertise, and value propositions. I built this site with a focus on responsive layouts, intuitive navigation, and visual clarity to enhance user engagement across desktop and mobile devices. The interface effectively communicates service offerings while maintaining a professional brand presence. This project demonstrates my ability to create business-oriented web solutions that blend thoughtful design with functional, user-centric development.",
    tech: ["WordPress", "PHP"],
    image: key,
    live: "https://keymantra.in/",
    code: "https://keymantra.in/",
  },
  {
    title: "khushicentre",
    category: "wordpress",
    description: "Khushi Centre is a welcoming and informative website designed for a community-focused service provider offering holistic wellness, training, and personal development programs. The platform highlights key offerings with clear service sections, engaging visuals, and an intuitive layout that helps visitors learn about workshops, courses, and support initiatives. I developed this site with a focus on responsive design and user-friendly navigation to ensure seamless browsing across devices. The interface emphasizes clarity and accessibility, making it easier for users to connect with the centre’s mission and offerings. This project showcases my ability to create meaningful, community-centric web experiences that reflect purpose and professionalism.",
    tech: ["WordPress", "PHP"],
    image: khushi,
    live: "https://khushicentre.in/",
    code: "https://khushicentre.in/",
  },
  {
    title: "prakritihastkala",
    category: "wordpress",
    description: "Prakriti Hastkala is a visually engaging ecommerce website dedicated to showcasing and selling authentic handcrafted products that celebrate traditional Indian artistry. The platform highlights diverse categories of artisanal goods with clear product layouts, vibrant visuals, and intuitive navigation to create an enjoyable browsing experience. I developed this site with a focus on responsive design, ensuring seamless performance across desktop and mobile devices. The interface blends aesthetic appeal with user-friendly structure, making it easy for customers to explore and connect with handcrafted offerings. This project demonstrates my ability to build elegant, commerce-driven web experiences that support cultural brands and promote artisanal craftsmanship online.",
    tech: ["WordPress", "PHP"],
    image: prakritihastkala,
    live: "https://prakritihastkala.com/",
    code: "https://prakritihastkala.com/",
  },
];

/* ===================== COMPONENT ===================== */
export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section className="relative min-h-screen bg-[#0F172A] text-[#E5E7EB] py-28 px-6">
      <ScrollProgressBar />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-[#38BDF8] uppercase tracking-widest text-sm">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            My Projects
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-xl mx-auto">
            Explore my HTML, React and WordPress projects.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["all", "html", "react", "wordpress"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm transition
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#38BDF8] to-[#22C55E] text-black"
                    : "border border-[#94A3B8]/40 text-[#94A3B8]"
                }`}
            >
              {tab === "all"
                ? "All"
                : tab === "html"
                ? "HTML / CSS / JS"
                : tab === "react"
                ? "React"
                : "WordPress"}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -10, scale: 1.03 }}
                onClick={() => setSelected(project)}
                className="cursor-pointer rounded-2xl overflow-hidden
                  bg-[#111827]/70 backdrop-blur border border-[#1F2933] transition"
              >
                {/* IMAGE + HOVER ICONS */}
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition duration-300">
                    <a
                      href={project.live}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="p-4 rounded-full bg-[#38BDF8] text-[#0F172A] hover:scale-110 transition"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="p-4 rounded-full bg-[#22C55E] text-[#0F172A] hover:scale-110 transition"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-[#111827]/50"
                      >
                       {/* <p>{project.description}</p>  */}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-[999]"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-[#111827] rounded-2xl max-w-lg w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selected.image}
                  className="rounded-xl mb-4"
                  alt={selected.title}
                />
                <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                <p className="text-[#94A3B8] mb-6">{selected.description}</p>
                <div className="flex gap-4">
                  <a
                    href={selected.live}
                    className="flex-1 text-center py-2 rounded-lg 
                    bg-gradient-to-r from-[#38BDF8] to-[#22C55E] text-black"
                  >
                    Live Demo
                  </a>
                  <a
                    href={selected.code}
                    className="flex-1 text-center py-2 rounded-lg 
                    border border-[#94A3B8]/40"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
