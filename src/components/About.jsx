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
      className="bg-brandDark text-white py-12 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 pb-6">
        <h2 className="text-4xl text-center mb-8 text-mainLight">About Me</h2>
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
            <div className="bg-brandDark hover:bg-bgDark2 p-6 rounded-2xl duration-300 sm:text-justify text-center cursor-pointer">
              <div className="flex items-center justify-center sm:justify-start mb-6">
                <img
                  src={assets.profile_img}
                  alt="profile"
                  className="w-40 h-40 rounded-full mr-4"
                />
              </div>
              <p className="text-2xl mb-4 text-mainLight">
                Hi, I'm {data.name},
              </p>
              <p className="text-lg mb-4">
                I completed my {data.education} at ICBT Campus, offered by
                Cardiff Metropolitan University, and am currently pursuing a
                Top-up Degree in Software Engineering.
              </p>
              <p className="text-lg">{data.description}</p>
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
            <div className="bg-brandDark p-6 rounded-2xl hover:bg-bgDark2 duration-300">
              <ul className="text-lg leading-relaxed space-y-2">
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
      <hr className="my-4 mx-auto w-[90%] border-t-2 border-main" />
    </section>
  );
};

export default About;
