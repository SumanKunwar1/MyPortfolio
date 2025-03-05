import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-0 bg-[var(--color-primary)]/50">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-[var(--color-secondary)]">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <MapPin className="text-[var(--color-secondary)]" />
              <span>Maitidevi, Kathmandu</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-[var(--color-secondary)]" />
              <a
                href="tel:+9779767864470"
                className="hover:text-[var(--color-secondary)]"
              >
                +977 9767864470
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-[var(--color-secondary)]" />
              <a
                href="mailto:sumankunwar755@gmail.com"
                className="hover:text-[var(--color-secondary)]"
              >
                sumankunwar755@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="text-[var(--color-secondary)]" />
              <a
                href="https://linkedin.com/in/suman-kunwar-204286227/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-secondary)]"
              >
                Suman Kunwar
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--color-primary)]/30 p-6 rounded-lg backdrop-blur-sm border border-[var(--color-secondary)]/20"
          >
            <p className="text-lg leading-relaxed">
              I am a dedicated Full Stack Developer with a passion for creating
              dynamic and responsive web applications. With expertise in the
              MERN stack, Laravel, Next.js, and other modern technologies, I
              specialize in building both front-end and back-end solutions that
              are secure, scalable, and user-friendly. My proficiency in
              JavaScript, Python, and MySQL enables me to deliver
              high-performance websites that meet clients’ needs. In addition to
              my technical skills, I have hands-on experience in digital
              marketing and social media strategy, allowing me to integrate my
              development work with effective online presence strategies that
              help businesses grow and engage their audiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
