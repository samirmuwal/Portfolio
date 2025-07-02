import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-4 text-white z-50 fixed top-0 left-0"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 over bg-[#1F1D36] text-white flex flex-col shadow-lg z-40 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:flex
        `}
      >
        <div className="mb-6 p-4 border-b border-gray-700 w-64">
          <img src="/assets/sidenavDark.png" alt="Logo" className="h-45 w-45" />
        </div>

        <ul className="flex flex-col px-4 text-peach font-bold font-dmsans text-2xl">
          <Link to="/" className="hover:text-peach transition">
            <li className="flex items-center gap-3 hover:text-white hover:border-2 p-4 cursor-pointer transition-colors">
              <PresentationChartBarIcon className="h-5 w-5" />
              Home
            </li>
          </Link>
          <Link to="/about" className="hover:text-peach transition">
            <li className="flex items-center gap-3 hover:text-white hover:border-2 p-4 cursor-pointer transition-colors">
              <ShoppingBagIcon className="h-5 w-5" />
              About
            </li>
          </Link>
          <Link to="/projects" className="hover:text-peach transition">
            <li className="flex items-center justify-between hover:text-white hover:border-2 p-4 cursor-pointer transition-colors">
              <span className="flex items-center gap-3">
                <InboxIcon className="h-5 w-5" />
                Projects
              </span>
            </li>
          </Link>
          <Link to="/Resume" className="hover:text-peach transition">
            <li className="flex items-center gap-3 hover:text-white hover:border-2 p-4 cursor-pointer transition-colors">
              <UserCircleIcon className="h-5 w-5" />
              Resume
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
