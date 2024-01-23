import React from 'react'

import pro1 from '../../assets/pro1.PNG'
import ProjectCard from '../ProjectCard';
import { Grid } from '@mui/material';

const Section3 = () => {
  return (
    <div className="h-[650px] border bg-secondary p-[40px]">
    <div className="ctn">
      <h3 className="text-center text-[25px] text-primary mt-4">Projects</h3>
      <h1 className="text-[bold] text-[40px] text-[white] mt-1 text-center">What I Am Great At</h1>
      <p className="text-center w-[40%] text-[20px] mx-auto text-[white] mt-2">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        proident, sunt in culpa qui officia
      </p>
    </div>
    <div>
    <Grid container spacing={2}>
  <Grid item xs={12} md={6} lg={4}>
    <ProjectCard />
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <ProjectCard />
  </Grid>
  <Grid item xs={12} md={6} lg={4}>
    <ProjectCard />
  </Grid>
</Grid>
    </div>
  </div>
  )
}

export default Section3