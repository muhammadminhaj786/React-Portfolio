import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { UilAlignJustify } from '@iconscout/react-unicons'
import { motion } from "framer-motion"
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

    const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between  bg-main text-white p-9">

            <div className=' brand ml-[5%] text-[2.5vw] text-[white] font-bold'>Mj <span className='text-4xl text-primary'>.</span> </div>
      <ul className="hidden sm:flex space-x-4 ml-[50%] text-[1.4vw] text-[white] font-bold">
        <li className="hover:border-b-2 hover:border-primary  cursor-pointer" ><a href="#intro">Home</a></li>
        <li className="hover:border-b-2 hover:border-primary cursor-pointer"><a href="#skills">Skills</a></li>
        <li className="hover:border-b-2 hover:border-primary cursor-pointer"><a href="#projects">Projects</a></li>
        <li className="hover:border-b-2 hover:border-primary cursor-pointer"><a href="#contact">Contact</a></li>
        {/* <Unicons.UilReact /> */}    
      </ul>
      <div className="relative">
        {/* <button
          className="sm:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleDropdown}
        >
          Toolbar Button
        </button> */}
        <div className='sm:hidden  h-[40px] p-[6px] w-[40px] bg-primary rounded-[30px] border border-secondary'>
        <Unicons.UilAlignJustify size='25px' className='sm:hidden ' onClick={toggleDropdown} /> 
        </div>

        {isDropdownOpen && (
          <div className="sm:hidden absolute bg-gray-800 text-white mt-2 p-2 rounded right-0">
            <div className="hover:underline cursor-pointer" ><a href="#intro">Home</a></div>
            <div className="hover:underline cursor-pointer"><a href="#skills">Skills</a></div>
            <div className="hover:underline cursor-pointer"><a href="#projects">Projects</a></div>
            <div className="hover:underline cursor-pointer"><a href="#contact">Contact</a></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
