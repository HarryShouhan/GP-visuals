import { useGSAP } from '@gsap/react'
import React , { useRef } from 'react'
import gsap from 'gsap';

function Hero() {

// -----------------------------------text-animation-------------------------

  const DigitaltxtAnimation = useRef(null)
  const designTextAnimation = useRef(null)
  const vedio = useRef(null)
  const btn = useRef(null)
  const textSm = useRef(null)

  useGSAP(function(){
    gsap.from(DigitaltxtAnimation.current,{
      x:-200,
      duration:2,
      ease: "lenia",
      opacity:0,
      delay:1
    })

      gsap.from(designTextAnimation.current,{
      x:200,
      duration:2,
      ease: "leniar",
      opacity:0,
      delay:1
    })

     gsap.from(vedio.current,{
      duration:4,
      ease: "leniar",
      opacity:0,
     
      
    })

      gsap.from(btn.current,{
      duration:1,
      ease: "bounce",
      scale:1.3,
      opacity:0,
      delay:2,
      
    })

     gsap.from(textSm.current,{
      duration:2,
      ease: "leniar",
      x:-30,
      opacity:0,
      delay:3,
      
    })


  })
// --------------------------cursor animation---------------------------------  

const cursorRef = useRef(null)

  
  function mouseOut (){
    if(cursorRef.current){
      gsap.to(cursorRef.current,{
        scale:1,
         onComplete: ()=>{
          cursorRef.current.innerText =""
        },
        

   })
  }
  }

  function mouseIn (){
    if(cursorRef.current){
      gsap.to(cursorRef.current,{
    
      scale:1.5,
        onComplete: ()=>{
          cursorRef.current.innerText ="view"
        },
        ease:"leniar",
        duration:1
   })
  }
  }


const cursor = (dets) =>{
  if(cursorRef.current){
    gsap.to(cursorRef.current,{
      x:dets.x,
      y:dets.y,
      duration:1,
      
    })
  }
}

window.addEventListener("mousemove",cursor)






  const phoneNumber = "+91 8699052954"; // country code + number
  const message = "Hi, I am interested in your service";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };



  return (
    

    <div className="hero h-auto md:h-[38vw] w-auto relative overflow-hidden md:overflow-visible bg-[url(https://res.cloudinary.com/dpmldj9ki/image/upload/v1781335826/images/download_xvbswr.jpg)] bg-cover flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-0 p-4 md:p-0">
      {/* cursor */}
      <div ref={cursorRef}  className="cursor shadow-1 pointer-events-none text-amber-50  absolute -left-3 -top-25 rounded-full z-[999] bg-amber-700 text-center align-middle justify-between p-2 text-[0.5vw]"></div>


      <div ref={DigitaltxtAnimation} className="hero-1  text-4xl sm:text-5xl md:text-7xl custom-font1  absolute top-4 md:top-2 left-4 md:left-30 ">digital</div>

      <div ref={vedio} onMouseEnter={mouseIn} onMouseLeave={mouseOut} className="hero2 w-full md:w-auto">
        <video  src="https://res.cloudinary.com/dpmldj9ki/video/upload/v1781336026/hero_m8hqs0.mp4" autoPlay loop muted className='hero-vedio shadow-1 border-amber-50 border-2 md:border-4 rounded-r-md h-40 sm:h-60 md:h-[25vw] object-cover w-full md:w-auto absolute left-0 md:left-52 top-16 md:top-18'></video>
      </div>

      <div className="hero-3 h-auto md:h-75 w-auto md:w-40 flex relative top-52 md:top-8 left-4 md:left-90 p-3">
        <div className="hero-3-top ">
          <button ref={btn} className='btn shadow-1 bg-blue-500 pt-1 pb-1 custom-font1 w-32 md:w-35 text-white text-lg md:text-2xl rounded-full hover:bg-blue-600 hover:scale-95' onClick={openWhatsApp}>Hire Us</button>
          <p ref={textSm} className='w-full md:w-[17vw] ml-0 md:ml-4 custom-font1 mt-2 text-sm md:text-[1.3vw] '>Passionate about creating modern designs that blend creativity with functionality.
          </p>
        </div>

      </div>
      <div ref={designTextAnimation} className="hero-3-bottom  text-3xl sm:text-5xl md:text-[6vw] custom-font1 absolute top-80 md:top-[29vw] left-4 md:left-[61vw] ">designer</div>
    </div>
  );
}

export default Hero