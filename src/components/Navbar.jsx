import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Skills",
    link: "/#skills",
  },
  {
    id: 4,
    name: "Projects",
    link: "/#projects",
  },
  {
    id: 5,
    name: "Contact",
    link: "/#contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
      <div className="container py-2">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div data-aos="fade-down" data-aos-once="true">
            <a
              href="/"
              className="text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font ml-4 p-4 font-bold"
            >
              MY PROTFOLIO
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
            className="hidden sm:flex items-center gap-4"
          >
            <ul className="flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
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
                onClick={() => setMenuOpen(false)} // Close menu after clicking a link
              >
                {menu.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
