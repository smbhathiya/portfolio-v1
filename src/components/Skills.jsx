import React from "react";
import { skillData } from "../data/skillData";

const Skills = () => {
  const languages = skillData.filter((skill) => skill.type === "language");
  const frameworks = skillData.filter((skill) => skill.type === "framework");
  const tools = skillData.filter((skill) => skill.type === "tool");
  const databases = skillData.filter((skill) => skill.type === "database");

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-brandDark via-bgDark2 to-brandDark text-white md:m-4 m-2 p-2 rounded-3xl shadow-lg"
    >
      <div className="container mx-auto px-4 py-12">
        <h2 className="md:text-4xl text-2xl font-bold text-mainLight text-center ">
          Languages, Tools, and Technologies
        </h2>

        {/* On medium screens (md) and up, show columns */}
        <div className="md:flex md:flex-row md:space-x-4">
          {[
            { title: "Languages", data: languages },
            { title: "Frameworks", data: frameworks },
            { title: "Tools", data: tools },
            { title: "Databases", data: databases },
          ].map((section, index) => (
            <div
              key={index}
              className="mt-12 md:w-1/4 backdrop-blur-md bg-opacity-30 bg-bgDark3 p-4 rounded-xl shadow-lg hover:shadow-2xl  hover:bg-mainDark transition duration-700 ease-in-out cursor-pointer"
            >
              <h3 className="text-2xl text-white mb-8 text-center font-semibold tracking-wide">
                {section.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {section.data.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-col items-center group transform hover:scale-105 transition-transform duration-300 ease-out"
                  >
                    <span className="md:w-11 md:h-11 h-12 w-12 flex justify-center items-center bg-white/10 rounded-full mb-4 transition-all duration-300">
                      <img
                        src={skill.src}
                        alt={skill.alt}
                        className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </span>
                    <span className="text-center text-sm md:text-sm font-semibold text-white  transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
