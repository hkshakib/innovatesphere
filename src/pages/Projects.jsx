import React from "react";
import ProjectCard from "../components/ProjectCard";
import Restaurent from "../static/restaurent.png";
import Fitness from "../static/fitness.png";
import Java from "../static/JavaUnit.jpg";

const projectsDetails = [
  {
    title: "Solstice",
    description:
      "Solstice (Web Development Project) is the website of a restaurant. The project is to design, develop, publish, and maintain a bilingual website, in French and English",
    image: Restaurent,
    tags: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Rahi-Ahmed/Solstice",
    liveLink: "https://rahi-ahmed.github.io/Solstice/",
  },
  {
    title: "Green-Endurance-Coaching",
    description:
      "A website for a fitness club Simal Green runs Green Endurance Coaching, a sports club in Montreal, Quebec, that specializes in coaching men and women aspiring to compete in triathlons and other endurance sports.",
    image: Fitness,
    tags: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/Rahi-Ahmed/Green-Endurance-Coaching",
  },
  {
    title: "Unit-Tests",
    description:
      "Categorical Testing of Hotel Management System with JUnit This is a testing project that builds a test program for testing a hotel management project with JUnit and Mockito.",
    image: Java,
    tags: ["Java", "JUnit"],
    githubLink: "https://github.com/Rahi-Ahmed/Unit-Tests/tree/main",
  },
];

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectsDetails.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
