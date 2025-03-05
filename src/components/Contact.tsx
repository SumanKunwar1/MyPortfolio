import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-0 bg-[var(--color-primary)]/50">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Get in <span className="text-[var(--color-secondary)]">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
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
                <Phone className="text-[var(--color-secondary)]" />
                <a
                  href="tel:+9779767864470"
                  className="hover:text-[var(--color-secondary)]"
                >
                  +977 9767864470
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-[var(--color-secondary)]" />
                <span>Maitidevi, Kathmandu</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-[var(--color-primary)]/30 border border-[var(--color-secondary)]/20 rounded-lg focus:outline-none focus:border-[var(--color-secondary)] text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-[var(--color-primary)]/30 border border-[var(--color-secondary)]/20 rounded-lg focus:outline-none focus:border-[var(--color-secondary)] text-gray-900"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-[var(--color-primary)]/30 border border-[var(--color-secondary)]/20 rounded-lg focus:outline-none focus:border-[var(--color-secondary)] text-gray-900"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-full font-semibold hover:bg-[var(--color-secondary)]/90 transition-colors duration-300"
            >
              Send Message
            </button>
            alert("thank you for in");
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
