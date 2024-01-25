import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { UilAlignJustify } from '@iconscout/react-unicons'
import { motion } from "framer-motion"
import Animation from './Animation';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  return (
    <nav className="flex items-center justify-between  bg-secondary text-white p-9">
       <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <motion.path
      d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
      variants={icon}
      initial="hidden"
      animate="visible"
    />
  </svg>

            <div className='ml-[5%] text-[2.5vw] text-[white] font-bold'>Mj <span className='text-4xl text-primary'>.</span> </div>
      <ul className="hidden sm:flex space-x-4 ml-[50%] text-[1.4vw] text-[white] font-bold">
        <li className="hover:border-b-2 hover:border-primary  cursor-pointer">Home</li>
        <li className="hover:border-b-2 hover:border-primary cursor-pointer">About</li>
        <li className="hover:border-b-2 hover:border-primary cursor-pointer">Services</li>
        <li className="hover:border-b-2 hover:border-primary cursor-pointer">Contact</li>
        {/* <Unicons.UilReact /> */}    
      </ul>
      <div className="relative">
        {/* <button
          className="sm:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleDropdown}
        >
          Toolbar Button
        </button> */}
        <Unicons.UilAlignJustify className='sm:hidden ' onClick={toggleDropdown} /> 

        {isDropdownOpen && (
          <div className="sm:hidden absolute bg-gray-800 text-white mt-2 p-2 rounded right-0">
            <div className="hover:underline cursor-pointer">Home</div>
            <div className="hover:underline cursor-pointer">About</div>
            <div className="hover:underline cursor-pointer">Services</div>
            <div className="hover:underline cursor-pointer">Contact</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
