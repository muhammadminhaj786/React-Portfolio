import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'


const Animation = () => {

  const { text: tagText } = useTypewriter({
    words: ["Fullstack Developer", "ReactJS Developer", "MERN STACK"],
    typeSpeed: 100,
    loop: false,
  });

  const textContent = "Yeh .";

  return (
    <div className="flex">
      <div className="border border-black p-4">
        {/* Your dynamic content goes here */}
        <p>{textContent}</p>
        {/* <Cursor cursorStyle="|" /> */}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
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
  );
}

export default Animation