import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nepal Insurance Authority",
    description:
      "Developed a modern, responsive website using React, Node.js, and Tailwind CSS. React provided a fast, dynamic user interface, Node.js ensured scalability, and Tailwind CSS enabled a flexible, mobile-friendly design.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    image:
      "https://snowberry.prixacdn.net/media/gallery_folder/nib_M5QGi1HDte_izzvubibnuxzggtufgd6rnjgt1wa7nfmspxzm9rb89bvzcqadcjojcgplnid_2aXIM1X3pF_bzj3zyu9td4xrukby4ane4ihji1c682tjlqy09rwgq9cjd6iqlcbmroipkle.png",
    link: "https://nia.gov.np/",
  },
  {
    title: "BTMC Foundation",
    description:
      "Created an educational website for BTMC Foundation using Next.js, TypeScript, and Tailwind CSS, ensuring fast load times, scalability, and a modern, responsive design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image:
      "/src/public/a-photo-of-a-serene-buddhist-monastery-n_WN4LsbuUSDapOHYR_kibgQ_Jtyfgj4jTLG4c2gTa6BkGQ (1).jpeg",
    link: "https://www.btmcfoundation.org/",
  },
  {
    title: "Asian Forum of Insurance Regulatory",
    description:
      "Used Laravel for robust content management and Tailwind CSS for responsive design, enabling smooth navigation and event management for AFIR’s annual conference website.",
    technologies: ["Laravel", "Tailwind CSS"],
    image:
      "https://conference.nia.gov.np/assets/img/7th%20HLM%20Group%20Photo.JPG",
    link: "https://conference.nia.gov.np/",
  },
  {
    title: "Trinity Waterproofing",
    description:
      "Developed a professional, responsive website using React, Node.js, and Tailwind CSS for seamless service showcases and project portfolios, ensuring fast load times and smooth UX.",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    image: "/src/public/WhatsApp Image 2025-02-05 at 13.03.02.jpeg",
    link: "https://trinitywaterproofing.com.np/",
  },
  {
    title: "Dharma Ideal",
    description:
      "Built a fast, SEO-friendly website for Dharma Ideal using Next.js and MySQL, focusing on donations and event management with smooth navigation and secure data handling.",
    technologies: ["Next.js", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
    link: "https://www.dharmaideal.org/",
  },
  {
    title: "MastaKala",
    description:
      "Developed a full-featured e-commerce platform using Laravel, Vue.js, and MySQL, ensuring real-time inventory management, secure transactions, and a smooth user experience.",
    technologies: ["Laravel", "Vue.js", "MySQL"],
    image:
      "https://static-01.daraz.com.np/other/shop/3738ba615000421e151abebf601cca83.png",
    link: "https://mastakala.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Recent <span className="text-[var(--color-secondary)]">Work</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[var(--color-primary)]/30 rounded-lg overflow-hidden backdrop-blur-sm border border-[var(--color-secondary)]/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--color-secondary)] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[var(--color-secondary)] hover:text-[var(--color-secondary)]/80"
                  >
                    <ExternalLink size={20} />
                    <span>Visit Site</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
