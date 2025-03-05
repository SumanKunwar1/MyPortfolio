import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="section-container text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="text-white">Suman </span>
          <span className="text-[var(--color-secondary)]">Kunwar</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold mb-8"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Versatile Developer Specializing in JavaScript, Python, PHP, Java and
          Cutting-Edge Frameworks like MERN, Laravel, Django and Next.js to
          Deliver High-Impact Web Solutions.{" "}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full font-semibold hover:bg-[var(--color-secondary)]/90 transition-colors duration-300"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-full font-semibold hover:bg-[var(--color-secondary)]/10 transition-colors duration-300"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-20 w-72 h-72 bg-[var(--color-accent)] rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-[var(--color-secondary)] rounded-full filter blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
