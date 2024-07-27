import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define your projects data
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-one",
    liveDemo: "https://yourwebsite.com/project-one",
    image: "https://via.placeholder.com/150",
    date: "July 2024",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two.",
    technologies: ["Node.js", "Express"],
    github: "https://github.com/yourusername/project-two",
    liveDemo: "https://yourwebsite.com/project-two",
    image: "https://via.placeholder.com/150",
    date: "June 2024",
  },
  // Add more projects as needed
];

const Projects = () => {
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div
          ref={projectsRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ${
            projectsInView ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: projectsInView ? 1 : 0,
                y: projectsInView ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className="bg-brandDark p-6 rounded-lg shadow-lg "
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <div className="text-sm mb-4">
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  GitHub
                </a>
              </div>
              <div className="text-xs text-gray-400 mt-2">{project.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
