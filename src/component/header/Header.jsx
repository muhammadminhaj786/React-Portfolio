import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#2E2E35] h-[75px] pt-9 align-center flex items-center'>
      <div className='ml-[5%] text-[2vw] text-[white] font-bold'>Mj <span className='text-4xl text-[pink]'>.</span> </div>
      <div className='ml-[55%]'><ul className='flex gap-[8%] text-[1.4vw] text-[white] font-bold'><li>Home</li>
      <li>Contact</li>
      <li>Projects</li>
      <li>Connect</li></ul></div>
    </div>
  )
}

export default Header