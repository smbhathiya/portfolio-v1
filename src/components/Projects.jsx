import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { assets } from "../assets/assets";

const projects = [
  {
    id: 6,
    title: "Portfolio",
    description:
      "My portfolio website showcases various projects and skills. Built with React and Vite for a modern and efficient development experience, it uses Tailwind CSS for styling. The site is deployed using Firebase, ensuring reliable and scalable hosting.",
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase"],
    github: "https://github.com/smbhathiya/PortfolioWebsite.git",
    date: "August 2024",
    image: assets.portfolio_img,
  },
  {
    id: 5,
    title: "Debra Event Management System",
    description:
      "Debra is a service-oriented project developed using ASP.NET. It encompasses both a website and a Windows desktop application. The project aims to provide seamless integration between these platforms to deliver efficient service solutions.",
    technologies: ["ASP.NET", "C#", "Bootstrap", "CSS", "Visual Studio"],
    github: "https://github.com/smbhathiya/DebraEventmanagement.git",
    date: "June 2024",
    image: assets.debra_img,
  },
  {
    id: 4,
    title: "EManager",
    description:
      "EManager is a Java-based employee management system developed using object-oriented programming (OOP) concepts. It provides a simple yet effective platform for managing employee data.",
    technologies: ["Java", "MySQL"],
    github: "https://github.com/smbhathiya/EManager.git",
    date: "January 2024",
    image: assets.emanager_img,
  },
  {
    id: 3,
    title: "DriveMate",
    description:
      "DriveMate is a research project, developed using Java, is designed for driving learning schools to train drivers effectively. The software aims to replace traditional training methods with a comprehensive online system, enhancing the learning experience for new drivers.",
    technologies: ["Java", "MySQL", "HTML"],
    github: "https://github.com/smbhathiya/DriveMateLearner.git",
    date: "May 2024",
    image: assets.Drivemate_img,
  },
  {
    id: 2,
    title: "Sweet Cupcakes",
    description:
      "Sweet cupcake is an android app developed for a cupcake shop to sell cupcakes. Customers can order cupcakes using this and shop can manage products and orders using this app.",
    technologies: ["Java", "Firebase", "XML", "Android Studio"],
    github: "https://github.com/smbhathiya/SweetCupCakes.git",
    date: "April 2024",
    image: assets.Sweetcupcakes_img,
  },
  {
    id: 1,
    title: "Cineplex Cinema",
    description:
      "Cineplex is a website that developed for a cinema hall to sell tickets online. Using this website users and purchase tickets and book seats and also can get details about ongoing and upcoming movies.",
    technologies: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
    github: "https://github.com/smbhathiya/CineplexCinemaWebsite.git",
    date: "April 2024",
    image: assets.cineplex_img,
  },
];

const Projects = () => {
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="bg-brandDark text-white ">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl text-mainLight text-center mb-8">Projects</h2>

        <div
          ref={projectsRef}
          className={`grid grid-cols-1 gap-8 ${
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
              transition={{ duration: 0.1 }}
              className="bg-bgDark2 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 hover:shadow-main"
            >
              {/* Image Section */}
              <div className="flex-shrink-0 md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg border-2 border-main"
                />
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <div className="text-sm mb-4">
                  <strong>Technologies:</strong>{" "}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <p
                        key={index}
                        className="text-sm bg-bgDark3 rounded-md p-2 "
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-main text-white px-4 py-2 rounded-lg hover:bg-mainDark mb-2"
                    title="View project on Github"
                  >
                    GitHub
                  </a>
                  <div className="text-xs text-gray-400">{project.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="my-4 mx-auto w-[90%] border-t-2 border-main" />
    </section>
  );
};

export default Projects;
