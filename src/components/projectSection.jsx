import React, { useEffect, useState } from 'react';

function ProjectSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/public/json/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  return (
   <>
      <h1 className="text-4xl font-bold text-center mb-10 text-peach font-lobster">
        {"<My Projects/>"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-[#272445] p-4 rounded-xl shadow-lg"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-lg w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold mt-2 text-peach">{proj.title}</h2>
            <p className="text-sm mt-1 text-white">{proj.description}</p>
            
          </div>
        ))}
      </div>

   </>
  );
}

export default ProjectSection;
