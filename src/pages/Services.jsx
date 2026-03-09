import {
  Code,
  Layers,
  Palette,
  Rocket,
  Database,
  LayoutTemplate,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Code size={36} />,
      title: "Web Development",
      desc: "Modern, fast and SEO-friendly websites built with clean code and best practices.",
    },
    {
      icon: <Layers size={36} />,
      title: "React Development",
      desc: "Scalable and high-performance Single Page Applications using React.",
    },
    {
      icon: <LayoutTemplate size={36} />,
      title: "WordPress Development",
      desc: "Custom WordPress websites, themes and business-focused solutions.",
    },
    {
      icon: <Database size={36} />,
      title: "CMS Development",
      desc: "Easy-to-manage CMS solutions for scalable and dynamic content management.",
    },
    {
      icon: <Palette size={36} />,
      title: "UI / UX Design",
      desc: "Clean, modern and user-friendly designs that improve user engagement.",
    },
    {
      icon: <Rocket size={36} />,
      title: "Performance Optimization",
      desc: "Speed optimization, SEO improvements and better Core Web Vitals.",
    },
  ];

  /* ===================== SCROLL PROGRESS ===================== */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="relative bg-[#0F172A] text-[#E5E7EB]">

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px]
        bg-sky-400 origin-left z-50"
      />

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 text-center px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          My <span className="text-[#38BDF8]">Services</span>
        </h1>
        <p className="text-[#94A3B8] max-w-3xl mx-auto text-lg">
          I help businesses build modern, high-performing websites and web applications with great user experience.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">
            What I <span className="text-[#38BDF8]">Offer</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Complete web solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group bg-[#111827]/70 border border-[#1F2933] rounded-2xl p-8 hover:border-[#38BDF8] transition"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] mb-6 group-hover:bg-[#38BDF8] group-hover:text-[#0F172A] transition">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#94A3B8] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#111827]/60 border-t border-[#1F2933] py-20 text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something <span className="text-[#38BDF8]">Great</span>
        </h2>
        <p className="text-[#94A3B8] max-w-2xl mx-auto mb-8">
          Have a project in mind? Let’s work together and bring your ideas to life.
        </p>
        <a
  href="/contact"
  className="
    flex justify-center items-center gap-3
    mx-auto px-6 py-3 w-[200px]
    rounded-full border-2 border-sky-400
    text-lg font-semibold text-[#0F172A]
    bg-gradient-to-r from-sky-400 to-green-500
    shadow-xl overflow-hidden relative
    transition-all duration-300
    hover:text-[#0F172A]
    group
  "
>
  <span
    className="
      absolute inset-0
      bg-gradient-to-r from-green-500 to-sky-400
      -translate-x-full
      group-hover:translate-x-0
      transition-transform duration-700
      -z-10
    "
  ></span>

  Contact Me

  <svg
    className="
      w-8 h-8 p-2
      rounded-full border border-[#0F172A]
      rotate-45 
      transition-all duration-300
      group-hover:rotate-90
      group-hover:bg-[#0F172A]
    "
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-[#0F172A] group-hover:fill-white"
    />
  </svg>
</a>

      </motion.div>
    </section>
  );
};

export default Services;
