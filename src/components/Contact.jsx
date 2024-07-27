import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io";
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
    <section id="contact" className="bg-brandDark text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col ">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <ul className="text-lg leading-relaxed">
              <li className="mb-4 flex items-center bg-box p-3 rounded-lg hover:bg-primary hover:cursor-pointer hover:scale-105 duration-200">
                <MdEmail className="mr-3 text-xl" />
                <a href={`mailto:${contactData.email}`} className="">
                  {contactData.email}
                </a>
              </li>

              <li className="mb-4 flex items-center bg-primary p-3 rounded-lg hover:bg-light hover:cursor-pointer hover:scale-105 duration-200">
                <FaPhoneAlt className="mr-3 text-xl" />
                <a href={`tel:${contactData.phone}`} className="">
                  {contactData.phone}
                </a>
              </li>

              <li className="mb-4 flex items-center bg-boxG p-3 rounded-lg hover:bg-boxGh hover:cursor-pointer hover:scale-105 duration-200">
                <IoLogoWhatsapp className="mr-3 text-xl" />
                <a
                  href={`https://wa.me/${contactData.phone.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col ">
            <h3 className="text-2xl font-bold mb-4">Follow Me</h3>
            <ul className="text-lg leading-relaxed">
              {/* linkedin  */}
              <a
                href={contactData.linkedln}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <li className="mb-4 flex items-center bg-linkedin hover:bg-linkedinH p-3 rounded-lg  hover:scale-105 duration-200">
                  <IoLogoLinkedin className="mr-3 text-2xl" />
                  LinkedIn
                </li>
              </a>

              {/* github  */}
              <a
                href={contactData.github}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <li className="mb-4 flex items-center bg-github hover:bg-githubH p-3 rounded-lg hover:scale-105 duration-200">
                  <FaGithub className="mr-3 text-2xl" />
                  Github
                </li>
              </a>

              <a
                href={contactData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <li className="mb-4 flex items-center bg-fb hover:bg-fbH p-3 rounded-lg  hover:scale-105 duration-200">
                  <FaFacebook className="mr-3 text-2xl" />
                  Facebook
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
