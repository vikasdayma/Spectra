import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MobileNav } from './MobileNav';
export default function Navbar() {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSubMenuOpen1, setSubMenuOpen1] = useState(false); 
  const [isSubMenuOpen2, setSubMenuOpen2] = useState(false); 
 
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)
 
  const toggleSubMenu1 = () => setSubMenuOpen1(!isSubMenuOpen1);
  const toggleSubMenu2 = () => setSubMenuOpen2(!isSubMenuOpen2);


  return (
    <div className='w-scree1n py-6 px-5 lg:px-64 bg-black flex justify-between items-center text-white'>
     

     <img src='logo.jpeg' className='h-10 md:h-12 lg:h-14' alt='Logo' />
      

     <div className='hidden md:flex items-center font-bold space-x-5'>
     <a href="#about">About</a>
     <a className='relative '  onClick={toggleDropdown}>Tenure
     

     {
     isDropdownOpen && 


     <div className= 'absolute mt-2 bg-gray-900 text-white w-32 rounded-sm h-16 '  >
     <div className='ml-2 w-full'>
     <button onMouseEnter={toggleSubMenu1} onMouseLeave={()=>setSubMenuOpen1(false) } className="bg flex justify-evenly items-center w-full">
    Event
     <FaAngleRight className='text-xl ml5'/>
     </button>
 
     {
      isSubMenuOpen1 && 
      <ul onMouseEnter={() => setSubMenuOpen1(true) } onMouseLeave={()=>setSubMenuOpen1(false)}  className="absolute ml-32 bottom-4   bg-gray-900 text-white w-32">      
     <a href='#event' className='bg inline-block w-full '>2023-2024</a>
     <a  href ='#event' className='bg inline-block  w-full'>2024-2025</a>
     </ul>
      
      }
     </div>
  



     <div className='ml-2 w-full'>
     <button onMouseEnter={toggleSubMenu2} onMouseLeave={ ()=> setSubMenuOpen2(false)} className="bg flex justify-evenly items-center w-full">
      Tea
     <FaAngleRight className='text-xl '/>
     </button>
     
     {
     isSubMenuOpen2 && 
     
     <ul onMouseEnter={() => setSubMenuOpen2(true) } onMouseLeave={()=>setSubMenuOpen2(false)}  className="absolute ml-32 bottom-1   bg-gray-900 text-white w-32">      
     <a href='#our-team' className='bg inline-block w-full'>2023-2024</a> 
     <br />
     <a href='#our-team'  className='bg inline-block w-full'>2024-2025</a>
     </ul>

     }
     </div> 



     </div>
     
   
   }

     </a> 
     <a href='#contact' >Contact</a> 
     <a href='#service'>Service</a>
     <a>Help</a>
     </div>


      {/* Hamburger */}
   <MobileNav/>
    </div>
  )
}
