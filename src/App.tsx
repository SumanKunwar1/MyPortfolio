import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const navItems = [
  { name: "Home", target: "hero" },
  { name: "About", target: "about" },
  { name: "Experience", target: "experience" },
  { name: "Skills", target: "skills" },
  { name: "Education", target: "education" },
  { name: "Projects", target: "projects" },
  { name: "Contact", target: "contact" },
];

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-primary)]">
      <nav className="fixed w-full bg-[var(--color-primary)]/90 backdrop-blur-sm z-50 py-4 border-b border-[var(--color-secondary)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-[var(--color-secondary)]"
            >
              SK
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.target}
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-[var(--color-primary)]/90 border-t border-[var(--color-secondary)]/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/suman-kunwar-204286227/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-secondary)]"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:sumankunwar755@gmail.com"
                className="hover:text-[var(--color-secondary)]"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+9779767864470"
                className="hover:text-[var(--color-secondary)]"
              >
                <Phone size={24} />
              </a>
              <a
                href="https://github.com/SumanKunwar1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-secondary)]"
              >
                <Github size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 Suman Kunwar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
