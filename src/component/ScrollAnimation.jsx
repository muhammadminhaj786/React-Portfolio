import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollAnimation = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY < 500) {
      controls.start({ opacity: 1 - scrollY / 500 });
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={controls}
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: 'blue',
        }}
      >
        Scroll down to see the animation
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
