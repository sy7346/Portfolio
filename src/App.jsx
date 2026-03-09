import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <Router>
       <Preloader />
      <Navbar />

      {/* Page Content */}
      <main className=" min-h-screen">
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<Home />} />

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />

          {/* If URL wrong → Redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <BackToTop />
      <Footer />
    </Router>
  );
};

export default App;
