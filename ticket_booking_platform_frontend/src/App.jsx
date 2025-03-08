import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Event from './pages/Event'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Shop from './pages/Shop'
import AdminDashboard from './pages/Admin-Dashboard-Pages/AdminDashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
