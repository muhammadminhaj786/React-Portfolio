import React from "react";
import * as Unicons from '@iconscout/react-unicons';
import { UilWindow,UilArrow, UilSearch, UilAndroid } from '@iconscout/react-unicons'

const Section2 = () => {
  return (
    <div className="h-[550px] border bg-secondary p-[20px]">
      <div className="ctn">
        <h3 className="text-center text-[25px] text-primary mt-4">services</h3>
        <h1 className="text-[bold] text-[40px] text-[white] mt-1 text-center">What I Am Great At</h1>
        <p className="text-center w-[40%] text-[20px] mx-auto text-[white] mt-2">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in culpa qui officia
        </p>
      </div>
      <div className="boxes flex mt-8 justify-center gap-[25px]">
        <div className="box5 w-[20%] h-[210px] border  "> <Unicons.UilWindow className='w-[100px] h-[100px] color-[white] mx-auto mt-[10%]' /><p className="text-2xl text-center text-[white] mt-6">UI/Ux Design</p></div>
        <div className="box5 w-[20%] h-[210px] border  "><Unicons.UilArrow className='w-[100px] h-[100px] color-[white] mx-auto mt-[10%]' /><p className="text-2xl text-center text-[white] mt-6">Web Development</p></div>
        <div className="box5 w-[20%] h-[210px] border  "><Unicons.UilSearch className='w-[100px] h-[100px] color-[white] mx-auto mt-[10%]' /><p className="text-2xl text-center text-[white] mt-6">web Search</p></div>
        <div className="box5 w-[20%] h-[210px] border  "><Unicons.UilAndroid className='w-[100px] h-[100px] color-[white] mx-auto mt-[10%]' /><p className="text-2xl text-center text-[white] mt-6">Backend</p></div>
      </div>
    </div>
  );
};

export default Section2;
