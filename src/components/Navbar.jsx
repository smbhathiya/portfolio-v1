import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#home" },
  { id: 2, name: "About", link: "/#about" },
  { id: 3, name: "Skills", link: "/#skills" },
  { id: 4, name: "Projects", link: "/#projects" },
  { id: 5, name: "Contact", link: "/#contact" },
];

const DownloadCVButton = () => (
  <button className="bg-main text-white p-2 px-4 font-sans rounded hover:bg-mainDark">
    <a href="Bhathiya Lakshan.pdf" download="Bhathiya_Lakshan_CV.pdf">
      Download CV
    </a>
  </button>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const opacity = Math.max(0.7, 1 - scrollTop / 200);
      setBgOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="bg-brandDark text-white fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md"
        style={{ backgroundColor: `rgba(11, 14, 23, ${bgOpacity})` }}
      >
        <div className="container p-3 py-4 relative">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="/"
                className="text-2xl sm:text-4xl flex justify-center text-mainLight items-center gap-2 tracking-wider font-sans ml-4"
              >
                BHATHIYA
              </a>
            </div>

            {/* Hamburger Icon */}
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl focus:outline-none mr-4"
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
              {/* Menu items centered */}
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
              {/* Download CV Button aligned to the right */}
              <div className="ml-auto">
                <DownloadCVButton />
              </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="sm:hidden flex flex-col items-center mt-4 space-y-2">
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
            )}
          </div>
        </div>
      </div>

      <div className="pt-16">{/* Your page content goes here */}</div>
    </>
  );
};

export default Navbar;
