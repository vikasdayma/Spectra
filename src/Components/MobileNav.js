import React, { useEffect, useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import './MobileNav.css'
export const MobileNav = ({display}) => {
  const [animation,setAnimation]=useState('');
   
    const[show,setShow]=useState(false);
    
    const handleClick=()=>{
        setShow(!show)
       
       if(show==true){
         setAnimation('left-side')
        
    }
    else{
      setAnimation('')
    }
      
    }
  
     
  return (
    <>
         {!show?<button className={`main-button md:hidden  flex justify-end text-white`}  onClick={handleClick}><MdOutlineMenu /></button >
         : 
         <section className='md:hidden flex'>
          
            <div className={` md:hidden flex justify-end  -top-2 text-xl leading-[3rem] bg-black text-white h-screen w-[60vw] sm:w-[30vw] lg:w-[27vw] absolute right-0 nav-container ${animation}  z-30 absolute `}>
            <button className='main-button mt-8 flex-end text-white' onClick={handleClick}><MdCancel /></button>  
          <br />
          <br />
               <div className='mob-list1 animated-text flex flex-col  pr-10 items-end mt-20'>
                      
                 <NavTags link='#about' text='About' ></NavTags>
                 <NavTags link='' text='Tenure' ></NavTags>
                 <NavTags link='#contact' text='Contact' ></NavTags>
                 <NavTags link='#service' text='Service' ></NavTags>
                 <NavTags link='' text='Help' ></NavTags>
              
               </div>
            </div>
        </section>
    }
        
        
    </>
  )
}

const NavTags=({link,text})=>{
  return(
    <div className='text-white w-64'>
    <a href={link} className='text-lg  ml-48'>
      {text}
    </a>
    </div>
  )
}