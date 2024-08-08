import React from "react";
import { assets } from "../assets/assets";
import { IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa";

const socialLinks = {
  whatsapp: "https://wa.me/+94768941816",
  linkedin: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
  facebook: "https://www.facebook.com/smbhathiya",
  github: "https://github.com/smbhathiya",
};

const Home = () => {
  return (
    <section id="home">
      <div className="min-h-[400px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white sm:mt-10 mt-0">
        <div className="container pb-6 sm:pb-1">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Image Section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[200px] flex justify-center items-center relative order-1 sm:order-2 mt-20 sm:mt-0"
            >
              <img
                data-aos-once="true"
                src={assets.profile_img}
                alt="profile_img"
                className="w-[200px] sm:w-[350px] sm:scale-100 mx-auto rounded-3xl hover:scale-110 duration-500 cursor-pointer"
              />
            </div>
            {/* Text Section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-2xl sm:text-3xl lg:text-3xl"
              >
                <span className="bg-clip-text text-mainLight font-monospace text-2xl">
                  Hi, I'm Bhathiya Lakshan
                </span>
                <p className="text-lg sm:text-justify sm:p-0 p-1 font-monospace mt-2">
                  I’m a software engineer with a Higher Diploma in Computing and
                  Software Engineering from ICBT Campus, offered by Cardiff
                  Metropolitan University. I focus on mobile and web app
                  development, and I approach each project with enthusiasm and
                  adaptability.
                </p>
              </h1>
              <div data-aos="fade-up" data-aos-once="true">
                {/* Social Media Icons */}
                <div className="flex justify-center sm:justify-start gap-6 mt-1">
                  <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-main hover:text-iconLight hover:scale-125 duration-300"
                    title="Contact me from whatsapp"
                  >
                    <IoLogoWhatsapp size={40} />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-main hover:text-iconLight hover:scale-125 duration-300"
                    title="Find me on LinkedIn"
                  >
                    <IoLogoLinkedin size={40} />
                  </a>
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-main hover:text-iconLight hover:scale-125 duration-300"
                    title="Find ome on Facebook"
                  >
                    <FaFacebook size={40} />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-main hover:text-iconLight hover:scale-125 duration-300"
                    title="Find me on Github"
                  >
                    <FaGithub size={40} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4 mx-auto w-[90%] border-t-2 border-main" />
    </section>
  );
};

export default Home;
