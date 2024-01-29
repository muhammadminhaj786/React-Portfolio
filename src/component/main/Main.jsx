import React from 'react'
import './Main.css'
// import avatar from '../../assets/_MG_4156.JPG'
import avatar from '../../assets/122244089-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import Animation from '../animation/Animation'


const Main = () => {

  const navigate = useNavigate()

  return (
    <div className='flex box mt-[5%] w-[100%] h-auto bg-secondary'>
        <div className='new-box w-[70%]  flex '>
        <div className='w-[50%]  box1 '>
            {/* <p className='mt-[40px]  ml-[16%] text-[white] text-5xl font-bold '>
                Minhaj <br />
                  <span className='mt-2 ml-[10%]'>Wahid</span> <span className='text-3xl text-[pink]'>.</span>
            </p> */}
            <div className="flex">
      <div className="border-2 border-primary p-4 ml-6 rounded-[10px] bg-white">
        {/* Your dynamic content goes here */}
        {/* <p>{textContent}</p> */}
        {/* <Cursor cursorStyle="|" /> */}
        <span style={{ color: ' rgb(233 30 99 / var(--tw-border-opacity))', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Full Stack Developer', 'React js developer', 'Mern stack Developer']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
    </div>
            <p className='p2 mt-5 ml-[16%] text-[22px] text-[white]'>
              <Link to='www.youtube.com' >Github</Link> | <span>LinkedIn</span> 
            </p>
            <div className='ml-[17%] mt-10 w-[150px]'>
                <button className='w-[100%] h-[50px] bg-[#2E2E35] text-[white] border border-primary'>Contact Me</button>
            </div>
        </div>
        <div className='w-[50%] box2 h-[300px] '>
          <img  className='avatar h-[70%]' src={avatar} alt="" />
        </div>
        </div>
        <div className='w-[30%] border border-green-400 box3'>
          
          <Animation />
        </div>

    </div>
  )
}

export default Main