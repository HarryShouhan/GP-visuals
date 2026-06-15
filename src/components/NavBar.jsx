import { useGSAP } from '@gsap/react'
import React , { useRef } from 'react'
import gsap from 'gsap';


const NavBar = () => {


    const navAnimation = useRef(null)

    // ____________________animationa______________________________

    useGSAP(function(){
      gsap.from(navAnimation.current,{
        opacity:0,
        duration:5,
        ease:"power2",
        y:-10
      })

    })

// ---------------- navbar---------------

  return (
      <nav id='hero' className='flex flex-col md:flex-row items-center justify-between pl-2 md:pl-[3vw] pr-4 md:pr-[25vw] mt-2 md:mt-[1vw] gap-4 md:gap-0 h-auto md:h-[7vw]'>

        <div className="logo">
          <h1 className='uppercase align-middle font-[font-1] font-bold text-2xl md:text-4xl'>gp <span className='text-xs md:text-[1vw] relative right-2 md:right-4'>visuals</span></h1>
        </div>

      <div ref={navAnimation} className="nav-2 shadow-1 border-[#232323] border-dotted border-2 h-auto md:h-[5vw] w-full md:w-[50vw] rounded-full flex justify-center align-middle p-2 md:p-[3vh] bg-linear-to-r from-gray-100 via-white to-gray-100 bg-size-[200%_200%] animate-gradien">
      

          <ul className='flex flex-col font-[font2] md:flex-row gap-4 md:gap-40 text-sm md:text-base'>
            <li className='hover:underline cursor-pointer'>Home</li>
            <li className='hover:underline cursor-pointer'><a href="#creations">Creations</a></li>
            <li className='hover:underline cursor-pointer'><a href="#contact">Contact</a></li>
          </ul>
        </div>
    
    </nav>
  )
}

export default NavBar