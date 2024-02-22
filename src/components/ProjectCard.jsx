import React from "react";

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="pl-2 pr-2 max-w-sm rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img className="w-full h-[300px] fit-contain" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-[#525CEB] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex">
        <div className="px-6 py-4 flex">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-semibold  mr-4"
          >
            <button className="border border-blue-500 h-[40px] w-[100px] rounded-[5px] hover:bg-[#525CEB] hover:text-white">
              Code
            </button>
          </a>
        </div>
        {liveLink && (
          <div className="px-6 py-4 flex">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold"
            >
              <button className="border border-blue-500 h-[40px] w-[100px] rounded-[5px] hover:bg-[#525CEB] hover:text-white">
                Live
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
