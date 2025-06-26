import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdSwipe } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import SecondaryButton from './SecondaryButton';

export default function InfoCardSection() {
  return (
    <div className='relative overflow-x-hidden lg:h-[60vh] py-2 text-center lg:text-left flex flex-col gap-5'>
      <div className='lg:w-[80%] px-5'>
        <h2 className='secondary-heading text-xs'>Be in the Know</h2>
      <h2 className='text-[#001A6E] font-semibold text-3xl mb-5 lg:text-5xl mb-20'>Your Questions, <br /> Answered</h2>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide className='text-white lg:flex lg:flex-col lg:items-center'>
              <h2 className='text-lg mb-3 font-semibold lg:text-3xl'>What's My Postal Code?</h2>
              <p className='text-xs'>Find the Postal Code/ ZIP Code for your area.</p>
              <div className='flex items-center justify-between absolute bottom-4 w-[80%]'>
                  <SecondaryButton color='#79D1FF' text="Learn more" />
                  <p className='text-xs gap-2 text-[#79D1FF] flex items-center'>Swipe <span><MdSwipe /></span></p>
              </div>
          </SwiperSlide>
          <SwiperSlide className='text-white'>
              <h2 className='text-lg mb-3 font-semibold'>How Do I Rent a Postbox?</h2>
              <p className='text-xs'>Visit your nearest post office with a valid form of ID and a completed PO Box application form.</p>
              <div className='flex items-center justify-between absolute bottom-4 w-[80%]'>
                  <SecondaryButton color='#79D1FF' text="Learn more" />
                  <p className='text-xs gap-2 text-[#79D1FF] flex items-center'>Swipe <span><MdSwipe /></span></p>
              </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>

      </Swiper>
      </div>
      <div className='bg-[#020F37] w-full h-1/2 pb-3 -z-1 absolute -bottom-5'></div>
      
    </div>
  )
}
