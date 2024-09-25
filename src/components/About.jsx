import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { assets } from "../assets/assets";

const ListItem = ({ label, value }) => (
  <li className="p-3 rounded-md  hover:cursor-pointer transition-transform duration-300">
    <div className="font-semibold">{label}: </div> {value}
  </li>
);

const data = {
  name: "S.M. Bhathiya Lakshan Senadthipathi",
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
      className="bg-brandDark text-white py-12 relative overflow-hidden md:m-4 m-2 rounded-3xl p-4 bg-gradient-to-r from-brandDark via-bgDark2 to-brandDark
        shadow-lg"
    >
      <div className="container mx-auto px-4 pb-6 ">
        <h2 className="md:text-4xl text-3xl font-bold text-mainLight text-center mb-10">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Description */}
          <motion.div
            ref={descriptionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: descriptionInView ? 1 : 0,
              y: descriptionInView ? 0 : 50,
            }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className=" p-6 rounded-2xl duration-300 sm:text-justify text-center cursor-pointer">
              <div className="flex items-center justify-center sm:justify-start mb-6">
                <img
                  src={assets.profile_img}
                  alt="profile"
                  className="w-40 h-40 rounded-full mr-4"
                />
              </div>
              <p className="md:text-2xl text-xl mb-4 text-mainLight">
                Hi, I'm {data.name},
              </p>
              <p className="md:text-lg text-sm mb-4">
                I completed my {data.education} at ICBT Campus, offered by
                Cardiff Metropolitan University, and am currently pursuing a
                Top-up Degree in Software Engineering.
              </p>
              <p className="md:text-lg text-sm">{data.description}</p>
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
            className="flex-1"
          >
            <div className="bg-bgDark3 md:p-6 hover:bg-mainDark rounded-2xl duration-300">
              <ul className="text-sm md:text-lg leading-relaxed space-y-2">
                <ListItem label="Name" value={data.name} />
                <ListItem label="Education" value={data.education} />
                <ListItem label="Current Study" value={data.currentStudy} />
                <ListItem label="Country" value={data.country} />
                <ListItem label="City" value={data.city} />
                <ListItem label="Address" value={data.address} />
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
