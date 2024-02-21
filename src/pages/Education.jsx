import React from "react";

const Education = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#BFCFE7] shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              Undergraduate Cert. in Computer Science and IT{" "}
            </h3>
            <p className="text-gray-700 mb-2">
              McGill University, Montreal, QC
            </p>
            <p className="text-black mb-2">Computer Science and IT</p>
            <p className="text-black mb-2">Started: Jan 2022</p>
            <p className="text-black">Ended: Dec 2022</p>
          </div>
          <div className="bg-[#BFCFE7] shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Bachelor of Science</h3>
            <p className="text-black mb-2">
              University of Windsor, Windsor, ON
            </p>
            <p className="text-black mb-2">
              Honours CS with Software Engineering
            </p>
            <p className="text-black mb-2">Started: Sept 2023</p>
            <p className="text-black">Running</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
