import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundUp } from "react-icons/io";

export default function AboutSection() {
  return (
    <div className='p-5 flex flex-col gap-5'>
      <h3 className='secondary-heading text-xs'>About us</h3>
      <h2 className='text-[#001A6E] font-semibold text-3xl mb-5'>Your Post Office, and So Much More</h2>
      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque aut, dolor illum amet perspiciatis. Molestiae facilis quas, incidunt iste quae perferendis maxime excepturi, necessitatibus libero magni recusandae, cum assumenda.</p>
      
      <div className='mt-5'>
        <Link to='/' className='text-xs text-[#001a6e] flex items-center'>Learn more about us <IoIosArrowRoundUp className='rotate-50' /></Link>
      </div>

      <div className='mt-10 text-xs uppercase flex flex-col gap-2'>
        <h3 className='secondary-heading'>Core Values</h3>
        <p className='text-[#383838]'>Excellence, Commitment, Teamwork</p>
        <img className='rounded-lg' src="/ministerial-building.webp" alt="" />
      </div>

       <div className='h-[260px] w-full bg-[#001A6E] rounded-[1rem] relative overflow-hidden shrink-0'>
          <img 
              className='h-full w-full object-cover rounded-[1rem]' 
              src="/ministerial-building.png" 
              alt="Ministerial Building" 
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0032D4]/70 to-[#001A6E]/20 rounded-[1rem]"></div>
      </div>
    </div>
  )
}
