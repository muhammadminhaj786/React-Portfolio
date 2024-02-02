import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import { UilWindow, UilCloudMoonMeatball, UilPlay, UilGithub, UilBlogger  } from '@iconscout/react-unicons'

const ProjectCard = ({ele, heading}) => {
  // const ele = <Unicons.UilCloudMoonMeatball color='#e91e63' size='200px' />
  return (
    <div className="box5 w-[320px] bg-secondary h-[360px] rounded border-2 border-primary ">
        <div className='h-[60px]'>
            <p className='font-bold mt-2 text-center text-primary text-[25px]'>
                {heading}
                {/* <iframe src="https://giphy.com/embed/3s39mJ7zXU94mfAq4W" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sharktank-episode-2-season-10-shark-tank-3s39mJ7zXU94mfAq4W">via GIPHY</a></p> */}
            </p>
        </div>
        <div className=' w-[90%] mx-auto  pl-[40px]'>
          {ele}
        </div>

        <div className='flex justify-between mt-[5%] w-[90%] mx-auto'>
            <div className='h-[50px] bg-primary rounded-[30px] w-[50px] border border-[white] p-[9px]'> <Unicons.UilPlay size='33px' color='white' /></div>
            <div className='h-[50px] bg-primary rounded-[30px] w-[50px] border border-[white] p-[9px]'> <Unicons.UilGithub  size='33px' color='white' /></div>
        </div>
    </div>
  )
}

export default ProjectCard