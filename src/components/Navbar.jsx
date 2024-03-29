import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, scroller } from "react-scroll";

import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { SlCloudDownload } from "react-icons/sl";

function Navbar() {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  let CV = "yp";

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 0) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
      const isScrolled = window.scrollY > 0;
      setIsNavbarSticky(isScrolled);
    };

    const handleCloseOutSide = (e) => {
      if (!navRef?.current || navRef.current?.contains(e.target)) {
        return;
      }
      e.stopPropagation();
      setMenuOpen(false);
    };

    document.addEventListener("click", handleCloseOutSide, { capture: true });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleCloseOutSide, {
        capture: true,
      });
    };
  }, [isNavbarSticky, menuOpen]);

  const closeMenuAndScroll = (sectionId) => {
    console.log("Clicked");
    setMenuOpen(false);
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`flex justify-start lg:justify-center items-center h-16 z-10  lg:w-[100%] font-inter pt-4 pr-2 pb-2 ${
        isNavbarSticky ? "sticky top-0 bg-[#BFCFE7] border-b" : ""
      }`}
    >
      <div className="flex font-bold text-xl lg:pl-8 ml-4 font-mono">
        <a href="/">
          <span className="text-[#525CEB]">RAHI</span>
          <span>AHMED</span>
        </a>
      </div>

      <div className="hidden lg:flex md:flex-1 justify-center items-center lg:gap-12">
        <ul className="flex xl:gap-12 gap-4 text-[14px] xl:text-[16px]">
          <li
            className={
              activeSection === "skills"
                ? "text-[#525CEB]  animate-hFlip"
                : "hover:text-[#525CEB] cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => closeMenuAndScroll("skills")}
            >
              Skills
            </Link>
          </li>

          <li
            className={
              activeSection === "experience"
                ? "text-[#525CEB]  animate-hFlip"
                : "hover:text-[#525CEB]  cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => closeMenuAndScroll("experience")}
            >
              Experience
            </Link>
          </li>
          <li
            className={
              activeSection === "projects"
                ? "text-[#525CEB]  animate-hFlip"
                : "hover:text-[#525CEB]  cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => closeMenuAndScroll("projects")}
            >
              Projects
            </Link>
          </li>
          <li
            className={
              activeSection === "problem-solving"
                ? "text-[#525CEB]  animate-hFlip"
                : "hover:text-[#525CEB]  cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="problem-solving"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => closeMenuAndScroll("problem-solving")}
            >
              Problem Solving
            </Link>
          </li>

          <li
            className={
              activeSection === "education"
                ? "text-[#525CEB]  animate-hFlip"
                : "hover:text-[#525CEB]  cursor-pointer"
            }
          >
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => closeMenuAndScroll("education")}
            >
              Education
            </Link>
          </li>
        </ul>
      </div>

      <div className="lg:hidden flex flex-1 mr-2 lg:mr-0 lg:basis-[70%] justify-end gap-8">
        <button
          className="flex text-black cursor-pointer hover:text-gray-600 "
          onClick={toggleMenu}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {menuOpen ? (
            <motion.div>
              <RxCross1 className="text-[25px] text-blue-700" />
            </motion.div>
          ) : (
            <motion.div>
              <AiOutlineMenu className="text-[25px] text-blue-700" />
            </motion.div>
          )}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          className="lg:hidden absolute top-16 left-0 right-0 bg-white z-10 w-[100%] transition-opacity duration-300 ease-in-out border-b shadow-lg p-1 border-t-[1px]"
          ref={navRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        >
          <ul className="flex flex-col gap-4 text-[16px] text-black transition-all duration-500 ease-in p-4">
            <li
              className={
                activeSection === "skills"
                  ? "text-[#525CEB]  border-b-[1px]"
                  : "hover:text-[#525CEB]  cursor-pointer border-b-[1px]"
              }
            >
              <a href="#skills" onClick={() => setMenuOpen(!menuOpen)}>
                Skills
              </a>
            </li>

            <li
              className={
                activeSection === "experience"
                  ? "text-[#525CEB]  border-b-[1px]"
                  : "hover:text-[#525CEB]  cursor-pointer border-b-[1px]"
              }
            >
              <a href="#experience" onClick={() => setMenuOpen(!menuOpen)}>
                Experience
              </a>
            </li>
            <li
              className={
                activeSection === "projects"
                  ? "text-[#525CEB]  border-b-[1px]"
                  : "hover:text-[#525CEB]  cursor-pointer border-b-[1px]"
              }
            >
              <a href="#projects" onClick={() => setMenuOpen(!menuOpen)}>
                Projects
              </a>
            </li>
            <li
              className={
                activeSection === "problem-solving"
                  ? "text-[#525CEB]  border-b-[1px]"
                  : "hover:text-[#525CEB]  cursor-pointer border-b-[1px]"
              }
            >
              <a href="#problem-solving" onClick={() => setMenuOpen(!menuOpen)}>
                Problem Solving
              </a>
            </li>
            <li
              className={
                activeSection === "education"
                  ? "text-[#525CEB]  border-b-[1px]"
                  : "hover:text-[#525CEB] cursor-pointer border-b-[1px]"
              }
            >
              <a href="#education" onClick={() => setMenuOpen(!menuOpen)}>
                Education
              </a>
            </li>
          </ul>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[10px] hidden"
          >
            <button className="flex justify-center items-center border h-[40px] w-[200px]  my-1 rounded-lg bg-blue-500 text-white hover:bg-blue-400 hover:shadow-lg text-[13px]">
              <span className="flex gap-4 justify-center items-center">
                <SlCloudDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </span>
            </button>
          </a>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
