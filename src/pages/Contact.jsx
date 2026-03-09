import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  /* ===================== SCROLL PROGRESS ===================== */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const validate = (fields) => {
    const tempErrors = { name: "", email: "", message: "" };
    if (!fields.user_name.trim()) tempErrors.name = "Name is required";
    if (!fields.user_email.trim()) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.user_email))
      tempErrors.email = "Email is invalid";
    if (!fields.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((err) => err === "");
  };

  const sendEmail = (fields) => {
    setLoading(true);
    emailjs
      .sendForm(
        "service_8a2ow2b",
        "template_8p7r0r9",
        formRef.current,
        "_1Y_c10_5hxGOQ3B6"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          formRef.current.reset();
          setErrors({ name: "", email: "", message: "" });
          setTimeout(() => setSuccess(""), 5000);
        },
        () => {
          setLoading(false);
          setSuccess("Oops! Something went wrong.");
          setTimeout(() => setSuccess(""), 5000);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value,
    };
    if (validate(fields)) sendEmail(fields);
  };

  return (
    <section className="relative min-h-screen bg-[#0F172A] py-32 px-6 flex items-center justify-center">

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px]
        bg-sky-400 origin-left z-50"
      />

      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#E5E7EB]"
        >
          Get in <span className="text-[#38BDF8]">Touch</span>
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#111827]/60 backdrop-blur-md border border-[#1F2933] rounded-2xl p-10 shadow-2xl grid gap-6"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="user_name"
              placeholder=" "
              className="peer w-full bg-transparent border-b-2 border-[#94A3B8] text-[#E5E7EB] py-3 px-1 placeholder-transparent focus:border-[#38BDF8] focus:outline-none transition"
            />
            <label className="absolute left-1 top-3 text-[#94A3B8] text-sm transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#94A3B8] peer-placeholder-shown:text-sm
              peer-focus:-top-3 peer-focus:text-[#38BDF8] peer-focus:text-base"
            >
              Your Name
            </label>
            {errors.name && (
              <p className="text-[#22C55E] text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="user_email"
              placeholder=" "
              className="peer w-full bg-transparent border-b-2 border-[#94A3B8] text-[#E5E7EB] py-3 px-1 placeholder-transparent focus:border-[#38BDF8] focus:outline-none transition"
            />
            <label className="absolute left-1 top-3 text-[#94A3B8] text-sm transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#94A3B8] peer-placeholder-shown:text-sm
              peer-focus:-top-3 peer-focus:text-[#38BDF8] peer-focus:text-base"
            >
              Your Email
            </label>
            {errors.email && (
              <p className="text-[#22C55E] text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="6"
              placeholder=" "
              className="peer w-full bg-transparent border-b-2 border-[#94A3B8] text-[#E5E7EB] py-3 px-1 placeholder-transparent focus:border-[#38BDF8] focus:outline-none transition resize-none"
            />
            <label className="absolute left-1 top-3 text-[#94A3B8] text-sm transition-all
              peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#94A3B8] peer-placeholder-shown:text-sm
              peer-focus:-top-3 peer-focus:text-[#38BDF8] peer-focus:text-base"
            >
              Your Message
            </label>
            {errors.message && (
              <p className="text-[#22C55E] text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56,189,248,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#38BDF8] text-[#0F172A] font-semibold px-6 py-3 rounded-xl transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center mt-2 font-medium ${
                success.includes("success") ? "text-[#22C55E]" : "text-red-500"
              }`}
            >
              {success}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
