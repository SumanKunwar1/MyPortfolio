import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "PHP/Laravel", level: 80 },
      { name: "React/Next.js", level: 88 },
      { name: "Node.js/Express", level: 85 },
      { name: "Python/Django", level: 70 },
      { name: "MySQL/MongoDB", level: 85 },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 80 },
      { name: "Public Speaking", level: 70 },
      { name: "Teamwork", level: 90 },
      { name: "Time Management", level: 90 },
      { name: "Leadership", level: 70 },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Content Creation", level: 90 },
      { name: "Strategic Planning", level: 85 },
      { name: "Digital Marketing", level: 70 },
      { name: "Project Management", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-[var(--color-primary)]/50">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          My <span className="text-[var(--color-secondary)]">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-[var(--color-primary)]/30 p-6 rounded-lg backdrop-blur-sm border border-[var(--color-secondary)]/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-secondary)]">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="skill-progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
