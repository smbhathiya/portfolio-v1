import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Debra Event Management System",
    description:
      "Debra is a service-oriented project developed using ASP.NET. It encompasses both a website and a Windows desktop application. The project aims to provide seamless integration between these platforms to deliver efficient service solutions.",
    technologies: ["ASP.NET", "C#", "Bootstrap", "CSS", "Visual Studio"],
    github: "https://github.com/smbhathiya/DebraEventmanagement.git",
    date: "June 2024",
  },
  {
    id: 2,
    title: "EManager",
    description:
      "EManager is a Java-based employee management system developed using object-oriented programming (OOP) concepts. It provides a simple yet effective platform for managing employee data.",
    technologies: ["Java", "MySQL"],
    github: "https://github.com/smbhathiya/EManager.git",
    date: "January 2024",
  },
  {
    id: 3,
    title: "DriveMate",
    description:
      "DriveMate is a research project, developed using Java, is designed for driving learning schools to train drivers effectively. The software aims to replace traditional training methods with a comprehensive online system, enhancing the learning experience for new drivers.",
    technologies: ["Java", "MySQL", "HTML"],
    github: "https://github.com/smbhathiya/DriveMateLearner.git",
    date: "May 2024",
  },
  {
    id: 4,
    title: "Sweet Cupcakes",
    description:
      "Sweet cupcake is an android app developed for a cupcake shop to sell cupcakes. Customers can order cupcakes using this and shop can manage products and orders using this app.",
    technologies: ["Java", "Firebase", "XML", "Android Studio"],
    github: "https://github.com/smbhathiya/SweetCupCakes.git",
    date: "April 2024",
  },
  {
    id: 5,
    title: "Cineplex Cinema",
    description:
      "Cineplex is a website that developed for a cinema hall to sell tickets online. Using this website users and purchase tickets and book seats and also can get details about ongoing and upcoming movies.",
    technologies: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
    github: "https://github.com/smbhathiya/CineplexCinemaWebsite.git",
    date: "April 2024",
  },
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
              className="bg-brandDark p-6 rounded-lg shadow-lg transform transition-transform crsor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <hr />
              <p className="text-lg mb-4 mt-4 ">{project.description}</p>
              <hr />
              <div className="text-sm mb-4 mt-4">
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
