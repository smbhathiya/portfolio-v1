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
  const [activeLink, setActiveLink] = useState(Menu[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const opacity = Math.max(0.7, 1 - scrollTop / 200);
      setBgOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (id) => {
    setActiveLink(id);
    setMenuOpen(false);
  };

  return (
    <section id="navbar">
      <div className="bg-bgDark2 width-full z-50 mx-4 mr-4 rounded-bl-3xl rounded-br-3xl fixed top-0 left-0 right-0">
        <div
          className={`bg-brandDark text-white mt-4 transition-all duration-300 backdrop-blur-md rounded-3xl`}
          style={{ backgroundColor: `rgba(6, 6, 8, ${bgOpacity})` }}
        >
          <div className="container p-12 sm:p-6 py-4 md:p-12 md:py-4">
            <div className="flex justify-between items-center">
              {/* Logo section */}
              <div data-aos="fade-down" data-aos-once="true">
                <a
                  href="/"
                  className="text-2xl sm:text-4xl flex justify-center text-mainLight items-center gap-2 tracking-wider font-sans"
                >
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-8 sm:h-10 w-auto"
                  />
                  BHATHIYA
                </a>
              </div>

              {/* Hamburger Icon */}
              <div className="sm:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle Menu"
                  className="text-2xl focus:outline-none"
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              {/* Desktop Menu */}
              <div
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="300"
                className="hidden sm:flex items-center justify-between w-full"
              >
                <ul className="flex items-center gap-4 flex-grow justify-center">
                  {Menu.map((menu) => (
                    <li key={menu.id}>
                      <a
                        href={menu.link}
                        className={`inline-block font-sans text-lg py-4 px-3 ${activeLink === menu.id ? 'text-white' : 'text-white/70'} hover:text-white duration-200`}
                        onClick={() => handleMenuClick(menu.id)}
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
                className={`sm:hidden fixed top-0 left-0 w-full h-screen bg-brandDark text-white p-4 transition-opacity duration-300 ease-in-out ${
                  menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                style={{ transitionDuration: "300ms", zIndex: 60 }}
              >
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl absolute top-4 right-4"
                  aria-label="Close Menu"
                >
                  <FaTimes />
                </button>
                <div className="flex flex-col items-center space-y-4 mt-12">
                  {Menu.map((menu) => (
                    <a
                      key={menu.id}
                      href={menu.link}
                      className={`text-xl py-2 px-4 ${activeLink === menu.id ? 'text-white' : 'text-white/70'} hover:text-white duration-200`}
                      onClick={() => handleMenuClick(menu.id)}
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
      </div>
    </section>
  );
};

export default Navbar;
