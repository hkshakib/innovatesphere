import { motion } from "framer-motion";
import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaHandsClapping } from "react-icons/fa6";
import Avatar from "../static/profile.jpeg";

const Home = () => {
  return (
    <div className="flex flex-1 flex-col lg:flex-row h-[700px]">
      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        initial={{ x: -700 }}
        style={{ overflow: "hidden" }}
        className="flex flex-col basis-[50%]  items-center"
      >
        <div className="flex basis-[50%] lg:justify-end items-center flex-col w-[100%]">
          <div className="flex flex-col">
            <div className="flex">
              <p className="w-auto text-[#4A6CF7] font-semibold mr-2">
                Hey There
              </p>
              <FaHandsClapping className="text-[#FFA500] text-[16px] lg:text-[25px]" />
              <p className="w-auto text-[#4A6CF7] font-semibold ml-2"> I am </p>
            </div>

            <div className="flex basis-[60%]">
              <h6 className="font-bold text-[#090E34] md:text-[30px] lg:text-[40px] xl:text-[45px] whitespace-nowrap pr-4">
                Rahi Ahmed
              </h6>
            </div>

            <div className="flex flex-wrap gap-2 basis-[10%]">
              <h3 className="opacity-1 text-gray-400">Professional </h3>
              <h6 className="font-bold text-[#141c3a]">Software Developer</h6>
            </div>
          </div>
        </div>
        <div className="flex flex-1 lg:basis-[50%] items-center justify-center gap-8 w-[100%]">
          <a href="#footer" className="md:flex">
            <button className="flex justify-center items-center h-[40px] w-[100px] md:h-[50px] md:w-[150px] lg:leading-7 lg:h-[50px] lg:w-[180px] lg:text-[18px] border-2 border-indigo-700 rounded-[10px] lg:rounded-[50px] text-[16px] text-black bg-[#BFCFE7] hover:bg-[#6E07F3] hover:transition-all duration-700 hover:text-white hover:shadow-lg">
              Reach Out
            </button>
          </a>

          <div className="flex justify-center items-center text-[35px] gap-10 md:gap-4 font-semibold">
            <a
              href="https://github.com/Rahi-Ahmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub className="HomeIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahi-ahmed-541809198/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin className="HomeIcon" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        initial={{ x: 850 }}
        style={{ overflow: "hidden" }}
        className="flex basis-[50%] justify-center items-center"
      >
        <img
          className="flex p-2 lg:p-0 rounded-[50px] lg:rounded-full lg:h-[500px] lg:w-[500px] object-cover"
          src={Avatar}
          alt="Avatar"
        />
      </motion.div>
    </div>
  );
};

export default Home;
