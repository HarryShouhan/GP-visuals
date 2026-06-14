import React from 'react'
const NavBar = () => {
  return (
      <nav className='flex flex-col md:flex-row items-center justify-between pl-2 md:pl-[3vw] pr-4 md:pr-[25vw] mt-2 md:mt-[1vw] gap-4 md:gap-0 h-auto md:h-[7vw]'>

        <div className="logo">
          <h1 className='uppercase align-middle font-[font-1] font-bold text-2xl md:text-4xl'>gp <span className='text-xs md:text-[1vw] relative right-2 md:right-4'>visuals</span></h1>
        </div>

      <div className="nav-2 shadow-1 border-[#232323] border-dotted border-2 h-auto md:h-[5vw] w-full md:w-[50vw] rounded-full flex justify-center align-middle p-2 md:p-[3vh] bg-linear-to-r from-gray-100 via-white to-gray-100 bg-size-[200%_200%] animate-gradien">
      

          <ul className='flex flex-col md:flex-row gap-4 md:gap-40 text-sm md:text-base'>
            <li className='hover:underline cursor-pointer'>home</li>
            <li className='hover:underline cursor-pointer'>about</li>
            <li className='hover:underline cursor-pointer'>contact</li>
          </ul>
        </div>
    
    </nav>
  )
}

export default NavBar