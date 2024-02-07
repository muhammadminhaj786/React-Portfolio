import React from 'react'
import './Main.css'
// import avatar from '../../assets/_MG_4156.JPG'
import avatar from '../../assets/pixelcut-export.png'
import { Link, useNavigate } from 'react-router-dom'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import Animation from '../animation/Animation'
import { motion } from "framer-motion";



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
              <div style={{marginLeft:'35%'}} className='name-box rounded-[10px] border-2 border-secondary  w-[180px] p-2 h-[70px] bg-secondary'>
            <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp flex">
            <span className='text-[35px] hand'>👋</span>
            <div style={{ marginLeft: 20 }} className='hand-div'>
              <p className="text-white">Hello, I am</p>
              <p className="text-white">Minahj</p>
            </div>
          </div>
        </div>
      </motion.div>
            </div>
            <div className="flex">
              
      <div className="border-2 mt-8 border-secondary p-4 ml-6 typewriter rounded-[10px] bg-secondary">
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
            
            <p className=' p2 mt-3 ml-[16%] text-[22px] text-[white]'>
            <a className='hover:text-primary' href="https://github.com/muhammadminhaj786">GitHub</a> | <a className='hover:text-primary' href="https://www.linkedin.com/in/muhammad-minhaj-wahid-7b47781ba/">LinkedIn</a>
            </p>
            <div className='ml-[17%] resume-btn mt-8 w-[140px] h-[60px] bg-secondary rounded-[10px] border border-primary pt-4 hover:bg-primary '>
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