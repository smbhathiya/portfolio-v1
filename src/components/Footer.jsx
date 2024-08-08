import React from "react";

const Footer = () => {
  return (
    <div className="bg-brandDark text-white p-4 sm:mx-10 sm:mr-10">
      <footer>
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-base  sm:text-center text-mainLight">
            © 2024{" "}
            <a href="/" className="hover:underline">
              MY PORTFOLIO
            </a>
            . All Rights Reserved
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-base font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a
                href="/"
                className="hover:underline me-4 md:me-6 hover:text-white duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className="hover:underline me-4 md:me-6 hover:text-white duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/#skills"
                className="hover:underline me-4 md:me-6 hover:text-white duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="/#projects"
                className="hover:underline me-4 md:me-6 hover:text-white duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                className="hover:underline hover:text-white duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
