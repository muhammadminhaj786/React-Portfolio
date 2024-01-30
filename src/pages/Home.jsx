import React from 'react'
import Header from '../component/header/Header'
import Main from '../component/main/Main'
import Section2 from '../component/main2/Section2'
import Section3 from '../component/main3/Section3'
import Footer from '../component/footer/Footer'
import Navbar from '../component/navbar/Navbar'
import Contact from '../component/contact/Contact'


const Home = () => {
  return (
    <div className=''>
        <div>
            <Navbar/>
            <Main />
            <Section2 />
            <Section3 />
            <Contact />
            <Footer />
        </div>
    </div>
  )
}

export default Home