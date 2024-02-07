import React from 'react'
import './Main.css'
// import avatar from '../../assets/_MG_4156.JPG'
import avatar from '../../assets/pixelcut-export.png'
import { Link, useNavigate } from 'react-router-dom'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import Animation from '../animation/Animation'



const Main = () => {

  const navigate = useNavigate()

  return (
    <div id='intro' className='flex box mt-[2%] w-[100%]  bg-main'>
        <div className='new-box w-[70%]  flex p-[40px] '>
        <div className='w-[50%]  box1 '>
            {/* <p className='mt-[40px]  ml-[16%] text-[white] text-5xl font-bold '>
                Minhaj <br />
                  <span className='mt-2 ml-[10%]'>Wahid</span> <span className='text-3xl text-[pink]'>.</span>
            </p> */}
            <div className="flex">
      <div className="border-2  border-gold p-4 ml-6 typewriter rounded-[10px] bg-secondary">
        {/* Your dynamic content goes here */}
        {/* <p>{textContent}</p> */}
        {/* <Cursor cursorStyle="|" /> */}
        <span style={{ color: 'white', fontWeight: 'bold' }}>
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
            <p className=' border border-white new-txt p2 mt-3 mx-auto text-[1.7vw] text-[white]'>My name is Minhaj .</p>
            <p className=' p2 mt-3 ml-[16%] text-[22px] text-[white]'>
            <a href="https://github.com/muhammadminhaj786">GitHub</a> | <a href="https://www.linkedin.com/in/muhammad-minhaj-wahid-7b47781ba/">LinkedIn</a>
            </p>
            <div className='ml-[17%] resume-btn mt-8 w-[140px] h-[60px] bg-secondary rounded-[10px] border border-primary pt-4 '>
                <a className='text-white ml-9 font-bold '  href='minhaj wahid (mern stack ).pdf' download='minhaj(mern stack).pdf'>Resume</a>
            </div>
        </div>
        <div className='w-[50%] box2  '>
          <img  className='avatar  h-[100%]' src={avatar} alt="" />
        </div>
        </div>
        <div className='w-[30%] box3'>
          
          <Animation />
        </div>

    </div>
  )
}

export default Main