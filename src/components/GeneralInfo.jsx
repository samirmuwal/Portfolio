import React, { useEffect, useState } from "react";

function GeneralInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/json/personalinfo.json")
      .then((res) => res.json())
      .then((info) => setData(info))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#1F1D36] text-white w-full p-6 gap-10">
      
      {/* Image Section */}
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        <svg
          viewBox="0 0 200 200"
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M10,10 
              Q5,100 10,190 
              Q100,195 190,190 
              Q195,100 190,10 
              Q100,5 10,10 Z"
            fill="none"
            stroke="#FFA3A3"
            strokeWidth="29"
            strokeLinejoin="inherit"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <img
          src="/assets/my_img.jpg"
          alt="Styled"
          className="w-full h-full object-cover rounded-xl p-2 relative z-10"
        />
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center w-full lg:w-1/2">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#272445] gap-4 text-2xl font-bold font-lilita flex flex-col items-center border-[#1F1D36] rounded-3xl p-4 shadow-lg"
          >
            <span className="capitalize">{item.title}</span>
            <span className="text-peach text-sm font-bold">
              {item.content || "—"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralInfo;
