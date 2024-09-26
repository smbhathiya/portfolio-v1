import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projectData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-brandDark text-white m-2 rounded-3xl p-2 md:p-4 bg-gradient-to-r from-brandDark via-bgDark2 to-brandDark md:m-4 shadow-lg"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="md:text-4xl text-3xl font-bold text-mainLight text-center mb-10">
          Projects
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-bgDark2 p-6 rounded-lg shadow-lg hover:bg-mainDark transition duration-700 ease-in-out cursor-pointer"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {project.title}
              </h3>

              {/* Image Section */}
              <div className="flex-shrink-0 overflow-hidden rounded-lg mb-4 cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Text Section */}
              <p className="md:text-lg text-sm text-justify mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="text-sm mb-4">
                <strong>Technologies:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <p
                      key={index}
                      className="text-sm bg-bgDark3 rounded-md p-2"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>

              {/* Buttons and Date */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
                <div className="flex space-x-2 items-center">
                  {/* Conditionally render Live Preview or Release button */}
                  {project.livePreview ? (
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 text-sm md:text-base rounded-lg cursor-pointer hover:bg-blue-600"
                      title="View live preview"
                    >
                      Live Preview
                    </a>
                  ) : project.release ? (
                    <a
                      href={project.release}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-500"
                      title="View release"
                    >
                      Release
                    </a>
                  ) : null}

                  {/* GitHub button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-main text-white px-4 py-2 rounded-lg hover:bg-button hover:shadow-lg"
                    title="View project on GitHub"
                  >
                    GitHub
                  </a>
                </div>

                {/* Date display */}
                <div className="text-xs text-gray-400 mt-2 md:mt-0">
                  {project.date}
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
