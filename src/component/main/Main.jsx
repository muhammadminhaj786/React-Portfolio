import React from 'react'
import './Main.css'
// import avatar from '../../assets/_MG_4156.JPG'
import avatar from '../../assets/122244089-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom'


const Main = () => {

  const navigate = useNavigate()

  return (
    <div className='flex box mt-[5%] h-[450px] bg-secondary'>
        <div className='w-[30%] box1'>
            <p className='mt-[40px]  ml-[16%] text-[white] text-5xl font-bold '>
                Minhaj <br />
                  <span className='mt-2 ml-[10%]'>Wahid</span> <span className='text-3xl text-[pink]'>.</span>
            </p>
            <p className='p2 mt-4 ml-[16%] text-[22px] text-[white]'>
              <Link to='www.youtube.com' >Github</Link> | <span>LinkedIn</span> 
            </p>
            <div className='ml-[17%] mt-10 w-[150px]'>
                <button style={{border:'1px solid pink'}} className='w-[100%] h-[50px] bg-[#2E2E35] text-[white]'>Contact Me</button>
            </div>
        </div>
        <div className='w-[40%] box2 h-[400px] '>
          <img className='avatar' src={avatar} alt="" />
        </div>
        <div className='w-[30%] box3'>
          <h1 className='w-[80%] text-[20px] mt-[40px] mx-auto text-primary'>Introduction</h1>
          <p className='text-[20px] w-[80%] mx-auto text-[white]'>
            Mern Stack Developer.
            web dev
          </p>
          <h1 className='w-[80%] text-[20px] mx-auto text-primary'>
            Learn More
          </h1>
        </div>
    </div>
  )
}

export default Main