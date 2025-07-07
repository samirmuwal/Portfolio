import React, { useEffect, useState } from 'react';
import * as TbIcons from "react-icons/tb";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa"; 
const getIconComponent = (iconName) => {
  const prefix = iconName.slice(0, 2); 
  const iconLibraries = {
    Tb: TbIcons,
    Gi: GiIcons,
    Fa: FaIcons,
  };

  return iconLibraries[prefix]?.[iconName] || null;
};

function Hobbies() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/public/json/hobbies.json")
      .then((res) => res.json())
      .then((info) => setData(info))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-auto'>
      {data.map((item, index) => {
        const Icon = getIconComponent(item.icon);
        return (
          <div
            key={index}
            className='bg-[#272445] p-4 gap-3 flex flex-col justify-center items-center border-[#1F1D36] rounded-3xl font-lobster font-bold'
          >
            {Icon && <Icon size={40} />}
            <span>{item.title}</span>
            <p className='text-center text-peach'>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Hobbies;
