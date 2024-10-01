import React, { useEffect, useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import './MobileNav.css'

export const MobileNav = ({display}) => {
  const [animation,setAnimation]=useState('');
  const [mobileDropDown,setMobileDropDown]= useState(false)
  const [mobileSubDropDownOne,setMobileSubDropDownOne]= useState(false)
  const [mobileSubDropDownTwo,setMobileSubDropDownTwo]= useState(false)
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
     
    const handleTenure=()=>{
     setMobileDropDown(!mobileDropDown) ;
    }
    const handleTenureOne=()=>{
        setMobileSubDropDownOne(!mobileSubDropDownOne) ;
       }
       const handleTenureTwo=()=>{
        setMobileSubDropDownTwo(!mobileSubDropDownTwo) ;
       }
     
  return (
    <>
         {!show?<button className={`main-button md:hidden text-2xl flex justify-end text-white`}  onClick={handleClick}><MdOutlineMenu /></button >
         : 
         <section className='md:hidden flex'>
          
         <div className={` md:hidden flex justify-endw textre -top-2 text-2xl leading-[3rem] bg-black text-white h-screen w-[60vw] sm:w-[30vw] lg:w-[27vw] absolute right-0 nav-container ${animation}  z-30 absolute `}>
         <button className='main-button mt-8 flex-end text-white' onClick={handleClick}><MdCancel /></button>  
          <br />
          <br />


         <div className='flex justify-end mr-4 mt-10 w-full'>
         <div className='mob-list1 animated-text flex flex-col  items-dend mt-20'>
                      


         <NavTags link='#about' text='About' />

           {/* Tenure */}


            <button className='flex justify-evenly  items-center text-lg' >Tenure
   {  !mobileDropDown ?    <FaCaretDown className='ml-3'  onClick={handleTenure}/> : <FaCaretUp className='ml-3' onClick={()=>{ 
    setMobileDropDown(false)
    setMobileSubDropDownOne(false)
    setMobileSubDropDownTwo(false)
   }}/>}
          </button>

    
         {
            mobileDropDown && <button className='bg-gray-6001 text-lg text-white'>
            <ul>
           <li className='flex justify-evenly  items-center text-lg'>Event
           {  !mobileSubDropDownOne ?    <FaCaretDown className='ml-3'  onClick={handleTenureOne}/> : <FaCaretUp className='ml-3' onClick={handleTenureOne}/>}
            </li> 



           {/* Event */}
            {
            mobileSubDropDownOne && <button className='bg-gray-6001 text-lg text-white'>
            <div>
           <a href='#event' className='flex justify-evenly  items-center text-lg mr-4'onClick={handleTenure}> 2023-24
         
            </a> 
           <a href='#event' className='flex justify-evenly  items-center mr-4 text-lg' onClick={handleTenure}>2024-25
         
           </a>    
      
            </div> 
            </button>
         }



          {/* Team */}

           <li className='flex justify-evenly  items-center text-lg'>Team
           {  !mobileSubDropDownTwo ?    <FaCaretDown className='ml-3'  onClick={handleTenureTwo}/> : <FaCaretUp className='ml-3' onClick={handleTenureTwo}/>}
           </li>   
           {
            mobileSubDropDownTwo && <button className='bg-gray-6001 text-lg text-white'>

          <div>

           <a href='#our-team' className='flex justify-evenly  items-center text-lg mr-4' onClick={handleTenure}> 2023-24
           </a> 
           <a href='#our-team' className='flex justify-evenly  items-center mr-4 text-lg'onClick={handleTenure} >2024-25
           </a> 

         </div> 

            </button>
         }


    
            </ul> 
            </button>
         }

         {/* Contact Service */}

         <NavTags link='#contact' text='Contact'/>
         <NavTags link='#service' text='Service' />
         <NavTags link='' text='Help' />
         </div>
         </div>

         </div>

        </section>
    }
        
        
    </>
  )
}

const NavTags=({link,text})=>{
  return(
    // <div className='text-white w-64 '>
    <a href={link} className='text-lg inline-block '>
      {text}
    </a>
    // </div>
  )
}