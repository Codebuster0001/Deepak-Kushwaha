import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useMediaQuery } from "react-responsive";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
  { name: "Contact Us", path: "#contact" },
];

const NavAnimations = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};


export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check if the screen size is at least 768px (medium devices and above);
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  const handleScroll = () => {
    // Apply scroll logic only for large screens
    if (window.scrollY > 50 && isLargeScreen) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    if (isLargeScreen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolling(false); // Reset scrolling state for small screens
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLargeScreen]); // Dependency on isLargeScreen to recalculate when screen size changes

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        {isScrolling ? (
          <NavbarScroll />
        ) : (
          <NavbarFixed
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            links={links}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarFixed({ isMenuOpen, toggleMenu, links }) {
  return (
    <nav className="fixed z-20 flex justify-between w-full px-8 py-6 top-0 bg-black text-white">
      <div className="flex items-center lg:px-5 gap-2 text-white">
        <span className="text-xl text-white font-bold">Deepak Kushwaha</span>
      </div>
        <ul className="hidden md:flex items-center text-white">
  {links.map((link, index) => (
    <li key={index} className="px-2 text-md">
      <a 
        href={link.path} 
        className="hover:text-black hover:bg-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out"
      >
        {link.name}
      </a>
    </li>
  ))}
  </ul>


      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-white focus:outline-none"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white shadow-lg p-3 z-40">
          <ul className="flex flex-col items-center w-full p-2 text-white">
            {links.map((link, index) => (
              <li key={index} className="text-center w-full px-4 py-2 text-md">
                <a className="block w-full hover:text-black hover:bg-white px-5 py-2 rounded-full transition-all duration-300 ease-in-out" href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}


function NavbarScroll() {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={NavAnimations}
      className="fixed z-20 flex justify-between px-4 py-2 bg-black text-white rounded-full left-1/2 top-5 transform -translate-x-1/2"
    >
     <ul className="flex items-center">
  {links.map((link, index) => (
    <li key={index} className="px-[-2px] py-3 text-md">
      <a 
        href={link.path} 
        className="hover:text-black hover:bg-white md:hover:rounded-full px-5 py-3 transition-all duration-300 ease-in-out"
      >
        {link.name}
      </a>
    </li>
  ))}
</ul>


    </motion.nav>
  );
}

