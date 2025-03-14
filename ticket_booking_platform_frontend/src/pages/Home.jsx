import React from 'react'
import NavBar from '../components/NavBar'
import EventSearch from '../components/EventSearch'
import MiddleText from '../components/MiddleText'
import Footer from '../components/Footer'
import EventCard from '../components/dashboard_Components/EventCard'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <EventSearch/>
        <MiddleText/>
        <div className='p-10'>
          Event cards here
        </div>
        <Footer/>
    </div>
  )
}

export default Home
