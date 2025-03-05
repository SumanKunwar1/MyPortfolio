import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'B.Sc. IT',
    institution: 'Lord Buddha Education Foundation Campus',
    location: 'Maitidevi, Kathmandu',
    period: 'Expected 2025',
    details: 'Currently pursuing Bachelor\'s degree in Information Technology'
  },
  {
    degree: '+2 (Science)',
    institution: 'Aishwarya Vidya Niketan',
    location: 'Dhangadhi, Kailali',
    period: '2017 - 2019',
    details: 'Completed higher secondary education with focus on Science'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-2">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-[var(--color-secondary)]">Education</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[var(--color-primary)]/30 p-6 rounded-lg backdrop-blur-sm border border-[var(--color-secondary)]/20"
            >
              <h3 className="text-xl font-semibold text-[var(--color-secondary)]">{edu.degree}</h3>
              <p className="text-lg text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400 mb-2">{edu.location}</p>
              <p className="text-sm text-[var(--color-secondary)]">{edu.period}</p>
              <p className="mt-2 text-gray-300">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;