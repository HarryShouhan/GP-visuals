import React from 'react'

const Contact = () => {
  return (
    <div>
        
        <div className="contacts flex flex-col md:flex-row mt-4 md:mt-[5vw] gap-4 md:gap-0">
        <div className="contact-left flex h-auto md:h-[15vw] w-full md:w-[20vw] pl-4 md:pl-[11vw] border-b-2 md:border-b-0 md:border-r-2 mt-4 md:mt-[5vw] ml-0 md:ml-[30vw]">
            <ol className='text-left md:text-right my-auto text-sm md:text-base'>
                <li className='mb-2 md:mb-[2vw]'>whatsapp</li>
                <li className='mb-2 md:mb-[2vw]'>Email</li>
                <li>Instagram</li>
            </ol>
        </div>


        <div className="contact-left flex h-auto md:h-[15vw] w-full md:w-[20vw] pl-4 md:pl-[1vw] mt-0 md:mt-[5vw]">
            <ol className='text-left my-auto text-sm md:text-base'>
                <li className='mb-2 md:mb-[2vw]'>+91 77103xxx03</li>
                <li className='mb-2 md:mb-[2vw]'>chouhanh###@gmail.com</li>
                <li><a href="" className="hover:underline">click</a></li>
            </ol>
        </div>
        </div>
    </div>
  )
}

export default Contact