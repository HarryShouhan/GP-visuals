
import { useGSAP } from '@gsap/react'
import React , { useRef } from 'react'
import gsap from 'gsap';

    
    
    export  const cursorRef = useRef(null)
    
      
    export  function mouseOut (){
        if(cursorRef.current){
          gsap.to(cursorRef.current,{
            scale:1,
             onComplete: ()=>{
              cursorRef.current.innerText =""
            },
            
    
       })
      }
      }
    
    export  function mouseIn (){
        if(cursorRef.current){
          gsap.to(cursorRef.current,{
        
          scale:2,
            onComplete: ()=>{
              cursorRef.current.innerText ="view"
            },
            ease:"leniar"
       })
      }
      }
    
    
    export const cursor = (dets) =>{
      if(cursorRef.current){
        gsap.to(cursorRef.current,{
          x:dets.x,
          y:dets.y,
          duration:1,
          
        })
      }
    }
    
    window.addEventListener("mousemove",cursor)
    