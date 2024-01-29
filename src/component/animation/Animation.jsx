import React from 'react'
import { motion } from "framer-motion";
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import './Animation.scss'


const Animation = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };
  
  const headerSkillVariants = {
    visible: {
      rotate: [-120, 0],
      y: -10,
      x: 10,
      transition: {
        rotate: { delay: 0.5, duration: 0.3, ease: "easeOut" },
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeOut",
        },
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 5,
          ease: "easeOut",
        },
      },
    },
    hover: {
      boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    },
  };
  
  return (
    <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
        // className="flex flex-1 flex-col justify-evenly items-start h-[100%] w-[150px] ml-[1rem] border border-white "
      >
        {[javascript, react,node].map((circle, index) => (
          <motion.div
            variants={headerSkillVariants}
            whileInView="visible"
            whileHover="hover"
            drag
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            dragElastic={0.1}
            className="circle-cmp app__flex p-[16px]"
            // className="border border-primary shadow-lg shadow-primary  w-[100px] h-[100px] p-[16px] rounded-[50%] bg-black"
            key={`circle-${index}`}
          >
            <img className='w-[60px] items-center h-[60px] object-contain pointer-events-none' src={circle} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
  )
}

export default Animation