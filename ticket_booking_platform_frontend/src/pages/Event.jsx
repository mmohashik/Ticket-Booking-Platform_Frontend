import React from 'react'
import Navbar from '../components/NavBar'

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
