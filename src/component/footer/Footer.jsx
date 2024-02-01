import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import {UilLinkedin, UilFacebook, UilInstagram  } from '@iconscout/react-unicons'
import './Footer.css'

const Footer = () => {
  return (
    <div className='bg-black h-[90px] p-4 '>
        <div className='w-[80%]    mx-auto flex justify-between'>
           <div className='flex gap-3 mt-4 '>
          <div className=' bg-primary social h-[40px] w-[40px] rounded-[30px] p-[7px]'><Unicons.UilLinkedin className='icon' color='white' size='23px' /></div>
          <div className=' bg-primary social h-[40px] w-[40px] rounded-[30px] p-[7px]'><Unicons.UilFacebook  className='icon' color='white' size='23px' /></div>
          <div className=' bg-primary social h-[40px] w-[40px] rounded-[30px] p-[7px]'><Unicons.UilInstagram className='icon' color='white' size='23px' /></div>
        </div>
        <div className=' mr-4'>
            <p className='foot-ctn mt-6  text-[white]'>
            Copyright - Tortoiz | All Rights Reserved
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer