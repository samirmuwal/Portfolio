import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Blogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/json/blog.json")
      .then((res) => res.json())
      .then((info) => setData(info))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <>
      {data.map((blog, index) => (
        <div
          key={index}
          className="w-96 h-auto bg-[#272445] grid items-center justify-center text-center p-4 rounded-lg shadow-lg"
        >
          <div className="w-full h-40 mb-4 overflow-hidden rounded-md p-4">
            <img
              src={blog.image}
              alt="Blog Thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-lg font-bold text-peach">{blog.title}</h1>
          <p className="text-sm mt-2">{blog.description}</p>
          <div className="mt-4">
            <NavLink
              to={blog.navlink} target="_blank">
            <button className="bg-peach text-white px-4 py-2 rounded hover:bg-blue-700">
              Read More
            </button>
              </NavLink>
          </div>
        </div>
      ))}
    </>
  );
}

export default Blogs;
