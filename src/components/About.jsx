import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white flex justify-center items-center py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Description */}
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed mb-4">
              Hi, I'm Bhathiya Lakshan, a passionate software engineer with a strong interest in creating impactful solutions.
              I have a background in computing and software engineering and am currently pursuing a top-up degree.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I have developed various projects including Drive Mate, a comprehensive desktop software solution for driving schools in Sri Lanka, and Cineplex, a movie theater management system.
              My skills include Java, Python, .NET Framework, Node.js, React, and Tailwind CSS.
            </p>
          </div>
          
          {/* Details */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Details</h3>
            <ul className="text-lg leading-relaxed">
              <li><strong>Name:</strong> Bhathiya Lakshan</li>
              <li><strong>Education:</strong> Higher Diploma in Computing and Software Engineering</li>
              <li><strong>Current Study:</strong> Top-up Degree</li>
              <li><strong>Location:</strong> Sri Lanka</li>
              <li><strong>Email:</strong> your-email@example.com</li>
            </ul>
          </div>
        </div>
        
        {/* Skills */}
        <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 text-center">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                <span className="text-3xl"><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Java-Light.svg" alt="Java" width="40" height="40"/></span>
                <span>Java</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl"><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Python-Light.svg" alt="Python" width="40" height="40"/>
                </span>
                <span>Python</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl"><img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/DotNet.svg" alt="DotNet" width="40" height="40"/></span>
                <span>.NET Framework</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">🟢</span>
                <span>Node.js</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">⚛️</span>
                <span>React</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">🎨</span>
                <span>Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">🌀</span> {/* Consider using a different icon for C */}
                <span>C</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">🔵</span> {/* Consider using a different icon for C# */}
                <span>C#</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">💻</span> {/* Use an icon representing JavaScript */}
                <span>JavaScript</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">🗄️</span> {/* Use an icon representing MySQL */}
                <span>MySQL</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">📊</span> {/* Use an icon representing MongoDB */}
                <span>MongoDB</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">🌐</span> {/* Use an icon representing HTML */}
                <span>HTML</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">🎨</span> {/* Use an icon representing CSS */}
                <span>CSS</span>
                </div>
                <div className="flex flex-col items-center">
                <span className="text-3xl">🔘</span> {/* Use an icon representing Bootstrap */}
                <span>Bootstrap</span>
            </div>
            </div>
        
        </div>
        </div>
    </section>
  );
}

export default About;
