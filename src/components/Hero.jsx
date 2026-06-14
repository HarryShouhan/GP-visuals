import React from 'react'


const Hero = () => {
  return (
    <div className="hero h-auto md:h-[38vw] w-auto relative overflow-hidden md:overflow-visible bg-[url(https://res.cloudinary.com/dpmldj9ki/image/upload/v1781335826/images/download_xvbswr.jpg)] bg-cover flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-0 p-4 md:p-0">
      <div className="hero-1 font-bold text-4xl sm:text-5xl md:text-7xl font-[font-3] absolute top-4 md:top-2 left-4 md:left-30 italic">digital</div>

      <div className="hero2 w-full md:w-auto">
        <video src="https://res.cloudinary.com/dpmldj9ki/video/upload/v1781336026/hero_m8hqs0.mp4" autoPlay loop muted className='hero-vedio shadow-1 border-amber-50 border-2 md:border-4 rounded-r-md h-40 sm:h-60 md:h-[25vw] object-cover w-full md:w-auto absolute left-0 md:left-52 top-16 md:top-18'></video>
      </div>

      <div className="hero-3 h-auto md:h-75 w-auto md:w-40 flex relative top-52 md:top-8 left-4 md:left-90 p-3">
        <div className="hero-3-top">
          <button className='btn shadow-1 bg-blue-500 pt-1 pb-1 font-[arial] w-32 md:w-35 text-white text-lg md:text-2xl rounded-full hover:bg-blue-600'>hire us</button>
          <p className='w-full md:w-[17vw] ml-0 md:ml-4 mt-2 text-sm md:text-[1.3vw] '>Passionate about creating modern designs that blend creativity with functionality.
          </p>
        </div>
       
      </div>
       <div className="hero-3-bottom align- font-bold text-3xl sm:text-5xl md:text-[6vw] font-[font-3] absolute top-80 md:top-[29vw] left-4 md:left-[61vw] italic">designer</div>
    </div>
  )
}

export default Hero