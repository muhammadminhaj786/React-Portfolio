import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import { UilWindow } from '@iconscout/react-unicons'

const Section3 = () => {
  return (
    <div className="h-[620px] border bg-secondary p-[40px]">
    <div className="ctn">
      <h3 className="text-center text-[25px] text-primary mt-4">services</h3>
      <h1 className="text-[bold] text-[40px] text-[white] mt-1 text-center">What I Am Great At</h1>
      <p className="text-center w-[40%] text-[20px] mx-auto text-[white] mt-2">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non
        proident, sunt in culpa qui officia
      </p>
    </div>
    <div className="boxes flex mt-6 justify-center gap-[25px]">
      <div className="box5 w-[20%] h-[300px] border  ">a</div>
      <div className="box5 w-[20%] h-[300px] border  ">a</div>
      <div className="box5 w-[20%] h-[300px] border  ">a</div>
      <div className="box5 w-[20%] h-[300px] border  ">a</div>
    </div>
  </div>
  )
}

export default Section3