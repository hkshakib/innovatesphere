import React from "react";
import Card from "../components/Card";
import CLogo from "../static/C.png";
import CppLogo from "../static/C++.png";
import JavaLogo from "../static/Java.png";
import WebLogo from "../static/web.png";
import DsLogo from "../static/Ds.png";
import AlgoLogo from "../static/Algo.png";
import HtmlCssLogo from "../static/html.jpg";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex pb-10">
        <span className="flex font-mono text-[35px] font-bold">My Skills</span>
      </div>
      <div className="flex flex-wrap gap-24 justify-center items-center">
        <Card Name="C" Photo={CLogo} />
        <Card Name="C++" Photo={CppLogo} />
        <Card Name="JAVA" Photo={JavaLogo} />
        <Card Name="Web Development" Photo={WebLogo} />
        <Card Name="HTML & CSS" Photo={HtmlCssLogo} />
        <Card Name="Data Structure" Photo={DsLogo} />
        <Card Name="Algorithms" Photo={AlgoLogo} />
      </div>
    </div>
  );
};

export default Skills;
