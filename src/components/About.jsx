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
    <section id="about" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Description */}
          <motion.div
            ref={descriptionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: descriptionInView ? 1 : 0,
              y: descriptionInView ? 0 : 50,
            }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-lg leading-relaxed mb-4 text-left bg-box p-5 rounded-lg hover:bg-primary hover:cursor-pointer hover:scale-105 duration-200">
              <strong>Hi, I'm {data.name},</strong>
              <br /> I completed my {data.education} at ICBT Campus, offered by
              Cardiff Metropolitan University, and am currently pursuing a
              Top-up Degree in Software Engineering. <br />
              <br /> I am an enthusiastic, self-motivated, responsible, and
              hardworking individual. I adapt to challenging situations and work
              effectively both independently and as part of a team. My
              experience as a team leader on campus has honed my leadership and
              collaborative skills. I am capable of working under pressure and
              meeting deadlines, and I approach tasks with an active and dynamic
              mindset to ensure successful completion.
            </p>
          </motion.div>
          {/* Details */}
          <motion.div
            ref={detailsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: detailsInView ? 1 : 0,
              y: detailsInView ? 0 : 50,
            }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <ul className="text-lg leading-relaxed">
              <li className="bg-box p-3 rounded-lg mb-2 hover:bg-primary hover:cursor-pointer hover:scale-105 duration-200">
                <strong>Name:</strong> {data.name}
              </li>
              <li className="bg-box p-3 rounded-lg mb-2 hover:bg-primary hover:cursor-pointer hover:scale-105 duration-200">
                <strong>Education:</strong> {data.education}
              </li>
              <li className="bg-box p-3 rounded-lg mb-2 hover:bg-primary hover:cursor-pointer hover:scale-105 duration-200">
                <strong>Current Study:</strong> {data.currentStudy}
              </li>
              <li className="bg-box p-3 rounded-lg mb-2 hover:bg-primary hover:cursor-pointer hover:scale-105 duration-200">
                <strong>Country:</strong> {data.country}
              </li>
              <li className="bg-box p-3 rounded-lg mb-2 hover:bg-primary hover:cursor-pointer hover:scale-105 duration-200">
                <strong>City:</strong> {data.city}
              </li>
              <li className="bg-box p-3 rounded-lg mb-2 hover:bg-primary hover:cursor-pointer hover:scale-105 duration-200">
                <strong>Address:</strong> {data.address}
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
