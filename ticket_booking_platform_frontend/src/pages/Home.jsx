import React from 'react'
import NavBar from '../components/NavBar'
import EventSearch from '../components/EventSearch'
import MiddleText from '../components/MiddleText'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <EventSearch/>
        <MiddleText/>
        <Footer/>
    </div>
  )
}

export default Home
