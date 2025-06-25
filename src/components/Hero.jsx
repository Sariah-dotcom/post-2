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
    <section className='p-5 h-[80vh] pt-20 relative'>
       <div className='text-center flex flex-col gap-8'>
            <h2 className="secondary-heading text-xs">Mail made simple</h2>
            <h1 className='font-semibold text-4xl text-[#001A6E]'>Send it, Post it, <br /> We
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
            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus temporibus aliquam at officiis.</p>
       </div>

      <div className="overflow-hidden relative h-[280px] mt-20">
        <div className="marquee-wrapper flex items-end gap-5 marquee-animation">
          <div className='h-[260px] w-[180px] bg-[#001A6E] rounded-[1rem] relative overflow-hidden shrink-0'>
            <img 
              className='h-full w-full object-cover rounded-[1rem]' 
              src="/ministerial-building.png" 
              alt="Ministerial Building" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0032D4]/80 to-transparent rounded-[1rem]"></div>
          </div>

          <div className='bg-[#001A6E] rounded-[1rem] h-[210px] w-[180px] flex items-center justify-center text-center text-white shrink-0'>
            <h2 className='font-semibold'>
              20 + <br />
              <span className='text-xs'>Years of trusted service</span>
            </h2>
          </div>

          <div className='border border-[#0032D4] rounded-[1rem] w-[180px] h-[155px] shrink-0'> hfhkh</div>

          <div className='bg-[#0032D4] rounded-[1rem] h-[210px] w-[180px] shrink-0'></div>
        </div>
      </div>


    </section>
  )
}
