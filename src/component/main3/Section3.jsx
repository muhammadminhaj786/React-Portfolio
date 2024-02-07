import React from 'react'

import pro1 from '../../assets/pro1.PNG'
import { Grid } from '@mui/material';
import { motion } from "framer-motion"
import ProjectCard from '../product/ProjectCard';
import * as Unicons from '@iconscout/react-unicons';
import { UilWindow, UilCloudMoonMeatball, UilPlay, UilGithub, UilBlogger, UilDiaryAlt   } from '@iconscout/react-unicons'
import ScrollAnimation from '../ScrollAnimation';
import Animation from '../animation/Animation';
import './Section3.css'


const Section3 = () => {
  return (
    <>
    <div id='projects' className="h-[100%] main-sec  bg-main p-[40px]">
    <div className="ctn">
      <h3 className="text-center text-[40px] font-bold text-primary mt-1">Projects</h3>
      <h1 className="text-[bold] text-[40px] text-[white]  text-center">What I Am Great At</h1>
      <p className="text-center  project-ctn w-[40%] text-[20px] mx-auto text-[white] mt-[5px]">
      I am a MERN stack developer with expertise in MongoDB, Express.js, React.js, and Node.js.
      </p>
    </div>
    <div className='mt-8 pl-5'>
    <Grid container spacing={2} >
  <Grid item xs={12} sm={6} md={6} lg={4}>
    <ProjectCard ele={<Unicons.UilCloudMoonMeatball color='#e0a747' size='200px' />} heading={'Weather App'} playLink={'https://weather-app-react-nine-omega.vercel.app/'} githubLink={'https://github.com/muhammadminhaj786/weatherApp-react'} />
  </Grid>
  <Grid item xs={12} sm={6} md={6} lg={4}>
    <ProjectCard  ele={<Unicons.UilBlogger color='#e0a747' size='200px' />} heading={'Blogging App'} playLink={'https://muhammadminhaj786.github.io/mini-hacakthon/'} githubLink={'https://github.com/muhammadminhaj786/mini-hacakthon'} />
  </Grid>
  <Grid item xs={12} sm={6} md={6} lg={4}>
    <ProjectCard  ele={<Unicons.UilDiaryAlt color='#e0a747' size='200px' />} heading={'Attendence App'} githubLink={'https://github.com/muhammadminhaj786/final-hackathon'} />
  </Grid>
</Grid>
    </div>
  </div>
  </>
  )
}

export default Section3