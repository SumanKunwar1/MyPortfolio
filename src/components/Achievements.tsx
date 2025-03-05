import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-0 bg-[var(--color-primary)]/50">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-[var(--color-secondary)]">Achievements</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[var(--color-primary)]/30 p-8 rounded-lg backdrop-blur-sm border border-[var(--color-secondary)]/20"
        >
          <div className="flex items-start space-x-4">
            <Trophy className="text-[var(--color-secondary)] w-8 h-8 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-2">
                Hult Prize Winner
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Won first prize in a sustainable fashion competition for an innovative idea to replace 
                conventional materials with sustainable plant-based alternatives. The project focused on 
                utilizing eco-friendly materials such as:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                <li>Hemp fiber</li>
                <li>Agave Americana</li>
                <li>Banana fiber</li>
              </ul>
              <p className="mt-4 text-gray-300">
                This achievement demonstrates my ability to innovate and develop sustainable solutions 
                while considering environmental impact and market viability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;