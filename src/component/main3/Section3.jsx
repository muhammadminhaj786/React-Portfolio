import React from 'react'

import pro1 from '../../assets/pro1.PNG'
import { Grid } from '@mui/material';
import { motion } from "framer-motion"
import ProjectCard from '../product/ProjectCard';
import * as Unicons from '@iconscout/react-unicons';
import { UilWindow, UilCloudMoonMeatball, UilPlay, UilGithub, UilBlogger  } from '@iconscout/react-unicons'
import ScrollAnimation from '../ScrollAnimation';
import Animation from '../animation/Animation';


const Section3 = () => {
  return (
    <>
    <div className="h-[100%] border bg-secondary p-[40px]">
    <div className="ctn">
      <h3 className="text-center text-[40px] font-bold text-primary mt-1">Projects</h3>
      <h1 className="text-[bold] text-[40px] text-[white]  text-center">What I Am Great At</h1>
      <p className="text-center w-[40%] text-[20px] mx-auto text-[white] mt-[5px]">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        proident, sunt in culpa qui officia
      </p>
    </div>
    <div className='mt-4 pl-5'>
    <Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={6} lg={4}>
    <ProjectCard ele={<Unicons.UilCloudMoonMeatball color='#e91e63' size='200px' />} heading={'Weather App'} />
  </Grid>
  <Grid item xs={12} sm={6} md={6} lg={4}>
    <ProjectCard  ele={<Unicons.UilBlogger color='#e91e63' size='200px' />} heading={'Blogging App'} />
  </Grid>
  <Grid item xs={12} sm={6} md={6} lg={4}>
    <ProjectCard  ele={<Unicons.UilCloudMoonMeatball color='#e91e63' size='200px' />} heading={'App'} />
  </Grid>
</Grid>
    </div>
  </div>
  </>
  )
}

export default Section3