import React from "react";
import { skillData } from "../data/skillData"; // Adjust the path as necessary

const Skills = () => {
  const languages = skillData.filter((skill) => skill.type === "language");
  const frameworks = skillData.filter((skill) => skill.type === "framework");
  const tools = skillData.filter((skill) => skill.type === "tool");
  const databases = skillData.filter((skill) => skill.type === "database");

  return (
    <section id="skills" className="bg-brandDark text-white m-4 rounded-3xl p-4">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl text-mainLight text-center mb-8">
          Languages, Tools, and Technologies
        </h2>

        {/* Languages Section */}
        <div className="mt-12 bg-bgDark2 pt-12 pb-12 p-6 rounded-2xl">
          <h3 className="text-2xl text-mainLight mb-4 text-center">
            Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center hover:scale-125 duration-200 cursor-pointer"
              >
                <span className="text-3xl">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    width="45"
                    height="45"
                    className=""
                  />
                </span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="mt-12 bg-bgDark2 pt-12 pb-12 p-6 rounded-2xl">
          <h3 className="text-2xl text-mainLight mb-4 text-center">
            Frameworks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {frameworks.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center hover:scale-125 duration-200 cursor-pointer"
              >
                <span className="text-3xl">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    width="45"
                    height="45"
                    className=""
                  />
                </span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-12 bg-bgDark2 pt-12 pb-12 p-6 rounded-2xl">
          <h3 className="text-2xl text-mainLight mb-4 text-center">Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center hover:scale-125 duration-200 cursor-pointer"
              >
                <span className="text-3xl">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    width="45"
                    height="45"
                    className=""
                  />
                </span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Databases Section */}
        <div className="mt-12 bg-bgDark2 pt-12 pb-12 p-6 rounded-2xl">
          <h3 className="text-2xl text-mainLight mb-4 text-center">
            Databases
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {databases.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center hover:scale-125 duration-200 cursor-pointer"
              >
                <span className="text-3xl">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    width="45"
                    height="45"
                    className=""
                  />
                </span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
