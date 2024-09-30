import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Event from './Components/Event';

import { Route,Routes } from 'react-router';
import EventDetails from './Components/EventDetails';

export default function App() {
  return (
    <div className='bg-black h-screen'>
    {/* <Navbar/>
    <Hero/>
    <Features/>
    <About/>
    <Team/>
    <Contact/>
    <Footer/>
    <Event/> */}
    <Routes>
    <Route path='/' element={<Hero/>}></Route>  
    <Route path='/eventdetails' element={<EventDetails/>}></Route>  
    </Routes>  
    </div>
  );
}
