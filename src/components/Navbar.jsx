import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavItems = ({ closeMenu }) => {
  const navArr = ["Home", "Contact Us", "Projects", "About", "Reviews","Experience"];

  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navArr.map((item, index) => (
        <li
          key={index}
          className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
        >
          <a
            className="text-lg md:text-base hover:text-white transition-colors"
            href={`#${item}`}
            onClick={closeMenu} // Close menu on click (for mobile)
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [barState, setBarState] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-black/95">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 px-5 sm:px-10">
          {/* Logo */}
          <a
            href="/"
            className="text-neutral-400 font-bold text-2xl hover:text-yellow-50 transition"
          >
            Navbar
          </a>

          {/* Mobile Menu Button */}
          <button
            className="text-neutral-400 sm:hidden flex hover:text-yellow-50 p-2 rounded-md transition-colors"
            aria-label="Toggle Menu"
            onClick={() => setBarState(!barState)}
          >
            <FontAwesomeIcon icon={barState ? faTimes : faBars} size="lg" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>

        {/* Mobile Navigation - Toggleable */}
        {barState && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-black/80 p-5 shadow-lg">
            <NavItems closeMenu={() => setBarState(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
