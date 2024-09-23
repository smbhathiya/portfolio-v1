import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation
import { projects } from "../data/projectData";

const Projects = () => {
  return (
    <section id="projects" className="bg-brandDark text-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl text-mainLight text-center mb-8">Projects</h2>

        <div className="grid grid-cols-1 gap-8 transition-opacity duration-700">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and y-axis 20px down
              animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and y-axis 0px (moves up)
              transition={{ duration: 0.5 }} // Duration of the animation
              className="bg-bgDark2 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
            >
              {/* Image Section */}
              <div className="flex-shrink-0 md:w-1/3 overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
                />
              </div>


              {/* Text Section */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
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
                <div className="flex space-x-2 items-center">
                  {/* Conditionally render Live Preview or Release button */}
                  {project.livePreview ? (
                    <a
                      href={project.livePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600"
                      title="View live preview"
                    >
                      Live Preview
                    </a>
                  ) : project.release ? (
                    <a
                      href={project.release}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-green-600"
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
                    className="bg-main text-white px-4 py-2 rounded-lg hover:bg-mainDark"
                    title="View project on GitHub"
                  >
                    GitHub
                  </a>

                  {/* Date display */}
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
