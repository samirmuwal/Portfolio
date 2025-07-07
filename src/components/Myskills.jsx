import React, { useEffect, useState } from "react";

function Myskills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/public/json/icons.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []); // ✅ Added empty dependency array

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 w-auto">
      {data.map((skill, index) => (
        <div
          key={index}
          className="border-[#1F1D36] shadow-lg rounded-3xl p-6 bg-[#272445] flex justify-center"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-20 h-auto rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
}

export default Myskills;
