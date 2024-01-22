import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import { UilWindow } from '@iconscout/react-unicons'
import pro1 from '../../assets/pro1.PNG'

const Section3 = () => {
  return (
    <div className="h-[650px] border bg-secondary p-[40px]">
    <div className="ctn">
      <h3 className="text-center text-[25px] text-primary mt-4">Projects</h3>
      <h1 className="text-[bold] text-[40px] text-[white] mt-1 text-center">What I Am Great At</h1>
      <p className="text-center w-[40%] text-[20px] mx-auto text-[white] mt-2">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        proident, sunt in culpa qui officia
      </p>
    </div>
    <div className="boxes flex mt-7 justify-center gap-[25px]">
      {/* <div className="box5 w-[22%] h-[280px] border  "><img className='h-[100%] w-[100%]' src={pro1} alt="" />https://weather-app-react-nine-omega.vercel.app/</div> */}
      <div className="box5 w-[310px] h-[355px] rounded border  ">a</div>
      {/* <div className="box5 w-[22%] h-[280px] border  ">a</div> */}
      {/* <div className="box5 w-[22%] h-[280px] border  ">a</div> */}
    </div>
  </div>
  )
}

export default Section3