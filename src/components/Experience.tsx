import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Developer",
    company: "W.A.S. Media Marketing",
    period: "Oct. 2024 - Present",
    responsibilities: [
      "Built and maintained websites and web applications",
      "Collaborated with teams to deliver user-focused solutions",
      "Reviewed code to ensure quality and security",
    ],
  },
  {
    title: "Web Developer",
    company: "House of Rajkarnicar",
    period: "Mar. 2024 - Oct. 2024",
    responsibilities: [
      "Developed and maintained responsive websites and web applications",
      "Worked with cross-functional teams to create user-centric solutions",
      "Oversaw social media strategies, resulting in increased engagement",
    ],
  },
  {
    title: "Digital Marketer & E-commerce Officer",
    company: "MastaKala.com",
    period: "Dec. 2023 - Mar. 2024",
    responsibilities: [
      "Developed and managed e-commerce strategies",
      "Curated content and managed social media platforms",
      "Enhanced brand presence through targeted online campaigns",
    ],
  },
  {
    title: "Product Head / Digital Marketer",
    company: "Socheko.com",
    period: "Jul. 2021 - Oct. 2023",
    responsibilities: [
      "Led product marketing initiatives, increasing sales",
      "Managed digital marketing campaigns, driving website traffic",
      "Supervised teams to execute strategic projects",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Work <span className="text-[var(--color-secondary)]">Experience</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[var(--color-secondary)]">
                  {exp.title}
                </h3>
                <p className="text-lg text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
