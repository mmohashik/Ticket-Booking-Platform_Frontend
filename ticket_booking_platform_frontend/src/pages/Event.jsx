import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import MiddleTextEvents from '../components/MiddleTextEvents'

const Event = () => {
  return (
    <div>
      <Navbar/>
      <div className='p-10'>
        cards here
      </div>
      <MiddleTextEvents/>
      <Footer/>
    </div>
  )
}

export default Event
