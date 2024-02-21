import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const curYear = new Date().getFullYear();
  return (
    <div className="flex flex-1 bg-[#BFCFE7] py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h2 className="text-black text-lg font-semibold mb-4">Contact</h2>
            <p className="text-black mb-2 flex items-center">
              <MdEmail className="mr-2" /> ahmed3g1@uwindsor.ca
            </p>
            <p className="text-black flex items-center">
              <MdPhone className="mr-2" /> +(514) 795-2562
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h2 className="text-black text-lg font-semibold mb-4">Social</h2>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#f"
                  className="text-black hover:text-white transition duration-300 ease-in-out"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="#f"
                  className="text-black hover:text-white transition duration-300 ease-in-out"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#f"
                  className="text-black hover:text-white transition duration-300 ease-in-out"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="#f"
                  className="text-black hover:text-white transition duration-300 ease-in-out"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-black">
            &copy; {curYear} Rahi Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
