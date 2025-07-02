import React from "react";
import GeneralInfo from "../components/GeneralInfo";
import Myskills from "../components/Myskills";
import Hobbies from "../components/Hobbies";
import Contectlogo from "../components/Contectlogo";

function About() {
  return (
    <div className="w-full md:w-[80%] flex-col float-none md:float-end overflow-y-auto">
      <GeneralInfo />
      
      <div className="flex justify-center items-center bg-[#1F1D36]">
        <h1 className="text-4xl font-bold text-peach font-lobster">{"<My skills/>"}</h1>
      </div>
      
      <Myskills />

      <div className="flex justify-center items-center bg-[#1F1D36]">
        <h1 className="text-4xl font-bold text-peach font-lobster">{"<My Hobbies/>"}</h1>
      </div>
      
      <Hobbies />
      
      <Contectlogo />
    </div>
  );
}

export default About;
