import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import {UilLinkedin, UilFacebook, UilInstagram  } from '@iconscout/react-unicons'


const Footer = () => {
  return (
    <div className='bg-secondary h-[80px] flex justify-between'>
           <div className='flex gap-3 mt-4'>
          <div className='border border-[white] h-[40px] w-[40px] rounded-[30px] p-[6px]'><Unicons.UilLinkedin color='white' size='26px' /></div>
          <div className='border border-[white] h-[40px] w-[40px] rounded-[30px] p-[6px]'><Unicons.UilFacebook color='white' size='26px' /></div>
          <div className='border border-[white] h-[40px] w-[40px] rounded-[30px] p-[6px]'><Unicons.UilInstagram color='white' size='26px' /></div>
        </div>
        <div className=' '>
            <p className='mt-6  text-[white]'>
            Copyright - Tortoiz | All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer