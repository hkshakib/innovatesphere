import { motion } from "framer-motion";
import React from "react";

const Experiences = () => {
  return (
    <div className="flex flex-col flex-1 ">
      <h1 className="text-[35px] lg:text-[56px] font-mono relative bottom-24 left-72">
        Experience
      </h1>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 relative bottom-20 right-14 pb-4">
        <div className="relative col-span-1 w-full h-full flex justify-center">
          <div className="h-full w-1 bg-[#3D3B40] mt-2"></div>
          <div className="absolute w-6 h-6 rounded-full bg-[#F8EDFF] z-1 text-blue-700 text-center">
            1
          </div>
        </div>
        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 3 }}
          initial={{ x: 850 }}
          style={{ overflow: "hidden" }}
          className="col-span-4 w-full h-full "
        >
          <div className="w-full h-full bg-[#F8EDFF] rounded-md p-2 md:pl-4">
            <h1 className="text-black text-xl font-medium py-1">
              Bird Friendly Windsor Campus Organizer
            </h1>
            <h2 className="text-black text-[16px] font-normal py-1">
              Nov 2023 - Feb 2024
            </h2>
            <p className="text-gray-500 sm:text-sm text-xs">
              <ul className="list-disc ml-4">
                <li>
                  Collaborated with PIBO staff and the University of Windsor’s
                  Sustainability Office to promote bird-friendly initiatives on
                  campus
                </li>
                <li>
                  Raised awareness among faculty and students about the
                  challenges faced by migrating birds due to lighted buildings
                  at night
                </li>
                <li>
                  Advocated for the importance of maintaining trees and shrubs
                  on campus grounds to create a safer environment for birds
                </li>
                <li>
                  Contributed to the overall goal of making the university
                  campus more bird-friendly
                </li>
              </ul>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 relative bottom-20 right-14 pb-4">
        <div className="relative col-span-1 w-full h-full flex justify-center">
          <div className="h-full w-1 bg-[#3D3B40] mt-2"></div>
          <div className="absolute w-6 h-6 rounded-full bg-[#F8EDFF] z-1 text-blue-700 text-center">
            2
          </div>
        </div>
        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 3 }}
          initial={{ x: 850 }}
          style={{ overflow: "hidden" }}
          className="col-span-4 w-full h-full "
        >
          <div className="w-full h-full bg-[#F8EDFF] rounded-md p-2 md:pl-4">
            <h1 className="text-black text-xl font-medium py-1">
              Youth On The Rise Participant
            </h1>
            <h2 className="text-black text-[16px] font-normal py-1">
              Apr 2023 - Jun 2023
            </h2>
            <p className="text-gray-500 sm:text-sm text-xs">
              <ul className="list-disc ml-4">
                <li>
                  2-month training in the employability and life skills program
                </li>
                <li>
                  Topics of training include, but are not limited to, French
                  revision, job search strategies, effective communication and
                  teamwork, networking, time management, conflict management,
                  financial literacy, and digital literacy
                </li>
              </ul>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 relative bottom-20 right-14 pb-4">
        <div className="relative col-span-1 w-full h-full flex justify-center">
          <div className="h-full w-1 bg-[#3D3B40] mt-2"></div>
          <div className="absolute w-6 h-6 rounded-full bg-[#F8EDFF] z-1 text-blue-700 text-center">
            3
          </div>
        </div>
        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 3 }}
          initial={{ x: 850 }}
          style={{ overflow: "hidden" }}
          className="col-span-4 w-full h-full "
        >
          <div className="w-full h-full bg-[#F8EDFF] rounded-md p-2 md:pl-4">
            <h1 className="text-black text-xl font-medium py-1">Manager</h1>
            <h2 className="text-black text-[16px] font-normal py-1">
              May 2021 - Dec 2021
            </h2>
            <p className="text-gray-500 sm:text-sm text-xs">
              <ul className="list-disc ml-4">
                <li>
                  Managed daily operations of the store, including opening and
                  closing operations, inventory management, customer service,
                  and sales
                </li>
                <li>
                  analyzed customer needs and recommended appropriate foods and
                  services to meet their requirements
                </li>
                <li>
                  Ensured smooth operations of the restaurant by providing
                  exceptional customer service at all times
                </li>
                <li>
                  Resolved day-to-day issues that arise in a timely manner,
                  upholding the continuous flow of services
                </li>
              </ul>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 relative bottom-20 right-14 pb-4">
        <div className="relative col-span-1 w-full h-full flex justify-center">
          <div className="h-full w-1 bg-[#3D3B40] mt-2"></div>
          <div className="absolute w-6 h-6 rounded-full bg-[#F8EDFF] z-1 text-blue-700 text-center">
            4
          </div>
        </div>
        <motion.div
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 3 }}
          initial={{ x: 850 }}
          style={{ overflow: "hidden" }}
          className="col-span-4 w-full h-full "
        >
          <div className="w-full h-full bg-[#F8EDFF] rounded-md p-2 md:pl-4">
            <h1 className="text-black text-xl font-medium py-1">
              Security Guard
            </h1>
            <h2 className="text-black text-[16px] font-normal py-1">
              Oct 2020 - Jul 2021
            </h2>
            <p className="text-gray-500 sm:text-sm text-xs">
              <ul className="list-disc ml-4">
                <li>
                  CCommunicated clearly, and effectively checked 200+
                  individuals per day at the hospital entrance and ensured they
                  were free from COVID-19
                </li>
                <li>
                  I asked 200+ visitors about the purpose of visiting the
                  hospital, ensuring safety and adhering to protocols
                </li>
                <li>
                  Delivered exceptional customer service by accurately and
                  thoroughly handling a wide range of client service requests
                </li>
                <li>
                  Identified and reported ongoing client concerns, recommending
                  strategies to improve the service experience
                </li>
              </ul>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;
