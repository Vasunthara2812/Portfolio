import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
         <hr style={{ border: '2px solid #B415FF', margin: '50px 0' }} />
      <About/>
        <hr style={{ border: '2px solid #B415FF', margin: '50px 0' }} />
      <Services/>
        <hr style={{ border: '2px solid #B415FF', margin: '50px 0' }} />
      <MyWork/>
        <hr style={{ border: '2px solid #B415FF', margin: '50px 0' }} />
      <Contact/>
        <hr style={{ border: '2px solid #B415FF', margin: '50px 0' }} />
    </div>
  )
}

export default App