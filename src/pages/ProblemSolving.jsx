import React from "react";

const ProblemSolving = () => {
  const problemSolvingDetails = [
    {
      judge: "Codeforces",
      solved: 24,
      rating: 772,
      profile: "https://codeforces.com/profile/rahi_ahmed",
    },
    {
      judge: "LightOj",
      solved: 41,
      rating: "Unrated",
      profile: "https://lightoj.com/user/rahi_ahmed",
    },
    {
      judge: "LeetCode",
      solved: 28,
      rating: "1413",
      profile: "https://codeforces.com/profile/rahi_ahmed",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Problem Solving Journey
        </h2>
        <div className="flex flex-wrap justify-center">
          {problemSolvingDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg w-[350px] h-[300px] overflow-hidden flex flex-col justify-between mr-6 mb-6"
            >
              <div className="bg-gradient-to-b from-[#525CEB] py-6 px-6">
                <h3 className="text-lg font-semibold text-black">
                  {detail.judge}
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-1 items-center justify-center">
                <p className="text-gray-700 mb-2">
                  Solved: {detail.solved} Problems
                </p>
                <p className="text-gray-700 mb-2">Rating: {detail.rating}</p>
                <a href={detail.profile}>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                    See Profile
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
