import React from 'react';
import ContactLogo from '../components/Contectlogo';
import Blogs from '../components/blogs';
import ProjectSection from '../components/projectSection';

function Projects() {
  return (
    <div className="w-full md:w-[80%] bg-[#1F1D36] text-white px-6 py-10 float-end overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
      </div>
        < ProjectSection/>
      <h1 className="text-4xl font-bold text-center mb-10 text-peach font-lobster">
        {"<My Blogs/>"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <Blogs />
      </div>

      <div className="mt-20">
        <ContactLogo />
      </div>
    </div>
  );
}

export default Projects;
