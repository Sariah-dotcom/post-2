import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdSwipe } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import SecondaryButton from './SecondaryButton';

export default function InfoCardSection() {
  return (
    <div className='relative overflow-x-hidden'>
        <div className='bg-[#020F37] w-full h-20 -z-1 absolute -bottom-3'></div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className='text-white'>
            <h2 className='text-lg mb-3 font-semibold'>What's My Postal Code?</h2>
            <p className='text-xs'>Find the Postal Code/ ZIP Code for your area</p>
            <div className='flex items-center justify-between absolute bottom-4 w-[80%]'>
                <SecondaryButton color='#79D1FF' text="Learn more" />
                <p className='text-xs gap-2 text-[#79D1FF] flex items-center'>Swipe <span><MdSwipe /></span></p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='text-white'>
            <h2 className='text-lg mb-3 font-semibold'>How Do I Rent a Postbox?</h2>
            <p className='text-xs'>Renting your own private postbox is easy with SVG Post</p>
            <div className='flex items-center justify-between absolute bottom-4 w-[80%]'>
                <SecondaryButton color='#79D1FF' text="Learn more" />
                <p className='text-xs gap-2 text-[#79D1FF] flex items-center'>Swipe <span><MdSwipe /></span></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>

      </Swiper>
      
    </div>
  )
}
