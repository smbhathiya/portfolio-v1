import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DownloadCVButton from "./DownloadCVButton";

const Menu = [
  { id: 1, name: "Home", link: "/#navbar" },
  { id: 2, name: "About", link: "/#about" },
  { id: 3, name: "Projects", link: "/#projects" },
  { id: 4, name: "Languages & Tools", link: "/#skills" },
  { id: 5, name: "Contact", link: "/#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const opacity = Math.max(0.9, 1 - scrollTop / 200);
      setBgOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const offset = 110;
        const element = document.querySelector(hash);
        if (element) {
          const topPosition =
            element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: topPosition,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="navbar">
      <div
        className="bg-bgDark width-full z-50 md:mx-4 md:mr-4 mx-2 mr-2 rounded-bl-3xl rounded-br-3xl fixed top-0 left-0 right-0 transition-all duration-300 backdrop-blur-md"
        style={{ backgroundColor: `rgba(6, 6, 8, ${bgOpacity})` }}
      >
        <div className="container p-4 py-4 pt- pb-6 relative">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="/"
                className="text-xl sm:text-4xl font-medium flex justify-center text-mainLight items-center gap-2 tracking-wider font-sans ml-6"
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-10 sm:h-16 w-auto"
                />
                BHATHIYA
              </a>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl focus:outline-none mr-4 text-white"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="hidden md:flex items-center justify-between w-full"
            >
              <ul className="flex items-center gap-4 flex-grow justify-center">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block font-sans text-lg py-4 px-3 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="ml-auto">
                <DownloadCVButton />
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden fixed top-0 left-0 w-full bg-brandDark text-white p-4 transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              style={{
                transitionDuration: "300ms",
                zIndex: 40,
              }}
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl absolute top-4 right-4"
              >
                {/* <FaTimes /> */}
              </button>
              <div className="flex flex-col items-center space-y-4 mt-12">
                {Menu.map((menu) => (
                  <a
                    key={menu.id}
                    href={menu.link}
                    className="text-xl py-2 px-4 text-white/70 hover:text-white duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {menu.name}
                  </a>
                ))}
                <DownloadCVButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[75px]" />
    </section>
  );
};

export default Navbar;
