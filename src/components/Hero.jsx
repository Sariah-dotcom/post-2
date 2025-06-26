import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import PrimaryButton from './PrimaryButton';

export default function Hero() {
  const heroContent = useRef();
  const heroBtns = useRef();
  const underline = useRef();

  useGSAP(() => {
        const path = underline.current.querySelector('path');
        const length = path.getTotalLength();

        gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0
        });

        gsap.to(path, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1,
        ease: "power3",
        delay: 2
        });
  }, []);
  return (
    <section className='p-5 h-[80vh] lg:h-[90vh] pt-20 lg:pt-30 relative lg:flex lg:flex-col lg:items-center lg:justify-bewteen'>
       <div className='text-center flex flex-col gap-8 lg:gap-5'>
            <h2 className="secondary-heading text-xs">Mail made simple</h2>
            <h1 className='font-semibold text-4xl lg:text-7xl text-[#001A6E]'>Send it, Post it, <br /> We
                <span className='relative inline-block mr-2 ml-2 md:mr-4 md:ml-4'> Deliver 
                    <svg
                        className="absolute -z-1 -bottom-3 lg:-bottom-5 left-0 h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 310 40"
                        ref={underline}
                        >
                        <path
                            d="M4.99805 20.9998C65.6267 17.4649 126.268 13.845 187.208 12.8887C226.483 12.2723 265.751 13.2796 304.998 13.9998"
                            fill="none"
                            stroke="#A0C2F4"
                            strokeWidth="10"
                            strokeLinecap="round"
                        />
                    </svg>
                </span>
                it
            </h1>
            <p className='text-xs lg:mt-10 lg:text-[#959595]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus temporibus aliquam at officiis.</p>
       </div>

      <div className="overflow-hidden relative mt-20 lg:-bottom-10">
        <div className="marquee-wrapper flex items-end gap-5 ">
          
          <div className='h-[260px] w-[180px] lg:h-[320px] lg:w-[260px] bg-[#001A6E] rounded-[1rem] relative overflow-hidden shrink-0'>
            <img 
              className='h-full w-full object-cover rounded-[1rem]' 
              src="/ministerial-building.png" 
              alt="Ministerial Building" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0032D4]/80 to-transparent rounded-[1rem]"></div>
          </div>

          <div className='bg-[#001A6E] rounded-[1rem] h-[210px] w-[180px] lg:h-[270px] lg:w-[260px] flex items-center justify-center text-center text-white shrink-0'>
            <h2 className=''>
              <span className='text-2xl font-semibold'>20 +</span> <br />
              <span className='text-xs'>Years of trusted service</span>
            </h2>
          </div>

          <div className='rounded-[1rem] relative overflow-hidden shrink-0 rounded-[1rem] w-[180px] h-[155px] lg:h-[200px] lg:w-[260px] shrink-0 text-[#0032D4] text-center flex justify-center items-center font-semibold text-sm'>
            <img 
              className='h-full w-full object-cover rounded-[1rem]' 
              src="/cash-desk.jpg" 
              alt="Ministerial Building" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0032D4]/80 to-transparent rounded-[1rem]"></div>
          </div>

          <div className='border-2 border-[#0032D4] rounded-[1rem] h-[210px] w-[180px] lg:h-[270px] lg:w-[260px] shrink-0 text-[#0032D4] text-center flex justify-center items-center font-semibold text-sm'>
            <h2>Serving communities, <br /> connecting people</h2>
          </div>

         
          <div className='bg-[#0032D4] rounded-[1rem] h-[260px] w-[180px] lg:h-[320px] lg:w-[260px] shrink-0'></div>
        </div>
      </div>


    </section>
  )
}
