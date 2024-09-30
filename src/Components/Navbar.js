import React from 'react'

export default function Navbar() {
  return (
    <div className='w-screen py-6 px-5 lg:px-64 bg-black flex justify-between items-center text-white'>
      {/* Adjust the logo size by applying specific width and height */}
      <img src='logo.jpeg' className='h-10 md:h-12 lg:h-14' alt='Logo' />
      
      <ul className='hidden md:flex items-center font-bold space-x-5'>
        <li>About</li>
        <li>Contact</li>
        <li>Service</li>
        <li>Help</li>
      </ul>

      {/* Hamburger */}
      <button className='space-y-1 group md:hidden'>
        <div className='w-6 h-1 bg-white'></div>
        <div className='w-6 h-1 bg-white'></div>
        <div className='w-6 h-1 bg-white'></div>

        <ul className='bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end'>
          <button className='px-10 py-8 relative ml-auto'>
            <div className='w-6 h-1 rotate-45 absolute bg-white'></div>
            <div className='w-6 h-1 -rotate-45 absolute bg-white'></div>
          </button>
          <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>About</li>
          <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>Contact</li>
          <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>Service</li>
          <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>Help</li>
        </ul>
      </button>
    </div>
  )
}
