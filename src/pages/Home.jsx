import { motion, useScroll, useSpring } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiWordpress, SiTailwindcss } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import img from "../assets/main.jpeg";
const techStacks = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "WordPress", icon: SiWordpress },
];

/* ================= HERO ANIMATION ================= */
const heroContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ================= education DATA ================= */
const educationData = [
  {
    year: "2020 - 2021",
    title: "12th Standard",
    org: "Delhi, India",
    desc: "Completed 12th grade from CBSE Board in Arts stream, with a strong foundation in communication, creativity, and analytical thinking.",
  },
  {
    year: "2021 - 2024",
    title: "Bachelor of Computer Applications",
    org: "Haryana, India",
    desc: "Completed BCA (Bachelor of Computer Applications) from Faridabad, developing skills in web development, programming, and software applications.",
  },
  {
    year: "2024",
    title: "Web Developer Certification",
    org: "Noida, India",
    desc: "Completed a 6-month Web Development course, gaining hands-on experience in HTML, CSS, JavaScript, Bootstrap, and React.js, building responsive and dynamic web applications.",
  },
];
// -------------------------------- experienceData ------------------------------- 

const experienceData = [
  {
    year: "2025 - Present",
    title: "Website Developer",
    org: "ClickCatchers Pvt. Ltd",
    desc: "Currently working as a Website Developer, responsible for designing and developing responsive, dynamic websites using WordPress, Elementor, HTML, CSS, and JavaScript. Focused on building engaging user interfaces and seamless user experiences while implementing modern web development practices.",
  },
  {
    year: "2024 - 2024",
    title: "Website Developer Intern & Basic SEO",
    org: "QorvaTect",
    desc: "Worked as a Web Developer Intern, creating and maintaining websites using WordPress with Elementor, along with HTML, CSS, and JavaScript. Handled basic SEO tasks to improve website performance and search engine visibility.",
  },
  {
    year: "2022 - Present",
    title: "Web Developer",
    org: "Freelancing Projects",
    desc: "Executed multiple freelance web development projects, delivering custom websites for clients using WordPress, Elementor, HTML, CSS, JavaScript, and React.js. Specialized in responsive design, UI/UX improvements, and client-focused solutions that enhance online presence.",
  },
];

/* ================= TIMELINE ================= */
const ProfessionalTimeline = ({ title, data }) => {
  return (
    <section className="py-28 bg-[#0F172A]">
      <h2 className="text-4xl font-bold text-center mb-20 text-[#E5E7EB]">
        My <span className="text-sky-400">{title}</span>
      </h2>

      <div className="max-w-6xl mx-auto relative px-6">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px]
        bg-gradient-to-b from-transparent via-sky-400/40 to-transparent" />

        <div className="space-y-20">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <span className="hidden md:block absolute left-1/2 -translate-x-1/2
              w-4 h-4 rounded-full bg-sky-400
              shadow-[0_0_18px_rgba(56,189,248,0.8)]" />

              <div className="w-full md:w-[45%] bg-slate-800/80 backdrop-blur-xl
              border border-white/10 rounded-2xl p-6 md:p-8
              transition hover:-translate-y-2
              hover:shadow-[0_0_40px_rgba(56,189,248,0.18)]">
                <span className="inline-block text-xs px-4 py-1 rounded-full
                bg-sky-400/10 text-sky-400 mb-3">
                  {item.year}
                </span>

                <h3 className="text-xl font-semibold text-[#E5E7EB]">
                  {item.title}
                </h3>

                <p className="text-[#94A3B8] text-sm mt-1">{item.org}</p>

                <p className="text-[#94A3B8] mt-4 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= HOME ================= */
const Home = () => {
  const { scrollYProgress } = useScroll();

  // 🔥 useSpring applied here
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="bg-[#0F172A] text-[#E5E7EB] overflow-hidden relative">

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px]
        bg-sky-400 origin-left z-50"
      />

      {/* HERO */}
      <div className="min-h-screen flex items-center px-6" sty>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
          
            variants={heroContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={heroItem}
              className="text-5xl lg:text-6xl font-bold"
            >
              Hi, I’m <span className="text-sky-400">Sumit Yadav</span>
            </motion.h1>

            <motion.h2
              variants={heroItem}
              className="mt-4 text-xl text-emerald-400"
            >
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "WordPress Developer",
                ]}
                loop
                cursor
              />
            </motion.h2>

            <motion.p
              variants={heroItem}
              className="mt-6 text-[#94A3B8] max-w-xl"
            >
             Professional Web Developer with experience in designing, developing, and maintaining responsive websites for companies and freelance clients. Skilled in front-end development, WordPress development using Elementor, and website optimization. Experienced in delivering user-focused web solutions that enhance engagement, improve website performance, and ensure seamless user experience. Adept at managing multiple projects, implementing modern web development practices, and collaborating with clients to meet business objectives effectively.
            </motion.p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center"
          >
            <img
              src={img}
              alt="profile"
              className="w-72 rounded-full border-4 border-sky-400 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 py-32 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "20+", label: "Projects" },
          { value: "8M+", label: "Experience" },
          { value: "100%", label: "Satisfaction" },
          { value: "7+", label: "Tech Stack" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="bg-slate-800/70 border border-white/10 rounded-xl p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-sky-400">
              {item.value}
            </h3>
            <p className="text-[#94A3B8] mt-1">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* EDUCATION & EXPERIENCE */}
      <ProfessionalTimeline title="Education" data={educationData} />
      <ProfessionalTimeline title="Experience" data={experienceData} />

      {/* TECH STACK */}
      <div className="max-w-7xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-sky-400">Tech Stack</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
        {techStacks.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.1 }}
            className="bg-slate-800/70 border border-white/10 rounded-xl p-6 text-center"
          >
            <tech.icon className="text-emerald-400 mx-auto mb-3 text-4xl" />
            <p className="text-[#94A3B8] text-sm font-medium">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Home;
