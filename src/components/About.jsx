import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define data at the top
const data = {
  name: "S.M. Bhathiya Lakshan",
  background:
    "a passionate software engineer with a strong interest in creating impactful solutions.",
  education: "Higher Diploma in Computing and Software Engineering",
  currentStudy: "Top-up Degree in Software Engineering",
  country: "Sri Lanka",
  city: "Kuliyapitiya",
  address: "91/2, Kurumbahenpitiyawaththa, Anukkane",
  description:
    "I am an enthusiastic, self-motivated, responsible, and hardworking individual. I adapt to challenging situations and work effectively both independently and as part of a team. My experience as a team leader on campus has honed my leadership and collaborative skills. I am capable of working under pressure and meeting deadlines, and I approach tasks with an active and dynamic mindset to ensure successful completion.",
};

const About = () => {
  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: detailsRef, inView: detailsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="bg-brandDark text-white py-12 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Description */}
          <motion.div
            ref={descriptionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: descriptionInView ? 1 : 0,
              y: descriptionInView ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-brandDark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">About Me</h3>
              <p className="text-lg leading-relaxed">
                <strong>Hi, I'm {data.name},</strong>
                <br /> I completed my {data.education} at ICBT Campus, offered
                by Cardiff Metropolitan University, and am currently pursuing a
                Top-up Degree in Software Engineering. <br />
                <br />
                {data.description}
              </p>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            ref={detailsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: detailsInView ? 1 : 0,
              y: detailsInView ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-brandDark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Details</h3>
              <ul className="text-lg leading-relaxed space-y-2">
                <li className="p-3 rounded-lg hover:bg-primary hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                  <strong>Name:</strong> {data.name}
                </li>
                <li className="p-3 rounded-lg hover:bg-primary hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                  <strong>Education:</strong> {data.education}
                </li>
                <li className="p-3 rounded-lg hover:bg-primary hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                  <strong>Current Study:</strong> {data.currentStudy}
                </li>
                <li className="p-3 rounded-lg hover:bg-primary hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                  <strong>Country:</strong> {data.country}
                </li>
                <li className="p-3 rounded-lg hover:bg-primary hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                  <strong>City:</strong> {data.city}
                </li>
                <li className="p-3 rounded-lg hover:bg-primary hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                  <strong>Address:</strong> {data.address}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brandDark to-transparent h-24"></div>
    </section>
  );
};

export default About;
