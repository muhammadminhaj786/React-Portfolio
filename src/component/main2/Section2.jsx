import React from "react";
import * as Unicons from '@iconscout/react-unicons';
import { UilWindow,UilArrow, UilSearch, UilAndroid, UilReact, UilJavaScript } from '@iconscout/react-unicons'
import Marquee from "react-fast-marquee";

const Section2 = () => {
  return (
    <div id="skills" className="h-[500px] bg-secondary p-[20px]">
      <div className="ctn">
        <h3 className="text-center font-bold text-[40px] text-primary mt-3">Skills</h3>
        <h1 className="text-[bold] text-[40px] text-[white] mt-1 text-center">What I Am Great At</h1>
        {/* <p className="text-center w-[40%] text-[20px] mx-auto text-[white] mt-2">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in culpa qui officia
        </p> */}
      </div>
       <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                     <div className="boxes flex mt-[5%] justify-center gap-[25px] w-[100%] h-[230px]  p-4">
        <div className="box5 w-[150px] bg-main  shadow-lg shadow-primary h-[170px] border border-primary rounded-lg hover:scale-[1.2]   "> <Unicons.UilReact color='#e0a747' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">React</p></div>
        <div className="box5  shadow-lg bg-main shadow-primary w-[150px] h-[170px] border border-primary rounded-lg hover:scale-[1.2] "> <Unicons.UilJavaScript color='#e0a747' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">Java Script</p></div>
        <div className="box5 w-[150px] bg-main  shadow-lg shadow-primary h-[170px] border border-primary rounded-lg hover:scale-[1.2]"> <Unicons.UilWindow color='#e0a747' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">UI/Ux Design</p></div>
        <div className="box5 w-[150px] bg-main  shadow-lg shadow-primary h-[170px] border border-primary rounded-lg hover:scale-[1.2] "><Unicons.UilArrow color='#e0a747' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">Web Development</p></div>
        <div className="box5 w-[150px] bg-main shadow-lg shadow-primary h-[170px] border border-primary rounded-lg hover:scale-[1.2]"><Unicons.UilSearch color='#e0a747' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">web Search</p></div>
        <div className="box5 w-[150px] bg-main shadow-lg shadow-primary h-[170px] border border-primary rounded-lg hover:scale-[1.2]"><Unicons.UilAndroid color='#e0a747' className='w-[100px] h-[80px] color-[white] mx-auto mt-[10%]' /><p className="text-[16px] text-center text-[white] mt-6">Backend</p></div>
      </div> 
                    </Marquee>
    </div>
  );
};

export default Section2;
