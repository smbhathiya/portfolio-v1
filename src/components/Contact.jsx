import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook, FaGithub } from "react-icons/fa6";

const contactData = {
  email: "smbhathiya@gmail.com",
  phone: "+94 76 894 1816",
  linkedln: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
  facebook: "https://web.facebook.com/smbhathiya",
  github: "https://github.com/smbhathiya",
};

const Contact = () => {
  return (
    <section id="contact" className="bg-brandDark text-white">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl text-mainLight text-center mb-8">Contact Me</h2>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col ">
            <h3 className="text-lg text-center mb-4 ">
              If you are looking for a developer contact me
            </h3>
            <ul className="text-lg leading-relaxed">
              <li
                className="mb-4 flex items-center bg-bgDark2 hover:bg-bgDark3 p-3 rounded-md  hover:cursor-pointer hover:scale-105 duration-200 "
                title="Click here to send an email to me"
              >
                <MdEmail className="mr-3 text-xl" />
                <a href={`mailto:${contactData.email}`} className="">
                  {contactData.email}
                </a>
              </li>

              <li
                className="mb-4 flex items-center  bg-bgDark2 hover:bg-bgDark3 p-3 rounded-md t hover:cursor-pointer hover:scale-105 duration-200"
                title="Click here to call me"
              >
                <FaPhoneAlt className="mr-3 text-xl" />
                <a href={`tel:${contactData.phone}`} className="">
                  {contactData.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg text-center  mb-4">
              You may also find me on these platforms
            </h3>
            <div className="flex space-x-8 text-3xl justify-center ">
              <a
                href={contactData.linkedln}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-mainLight hover:text-iconLight hover:scale-125 duration-300 "
                title="Find me on LinkedIn"
              >
                <IoLogoLinkedin size={40} />
              </a>

              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mainLight hover:text-iconLight hover:scale-125 duration-300 "
                title="Find me on Github"
              >
                <FaGithub size={40} />
              </a>

              <a
                href={contactData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mainLight hover:text-iconLight hover:scale-125 duration-300 "
                title="Find me on Facebook"
              >
                <FaFacebook size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4 mx-auto w-[90%] border-t-2 border-main" />
    </section>
  );
};

export default Contact;
