'use client';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import CustomBtn from '../CustomBtn';
import SwiperNavButtons from '../SwiperNavButtons';
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants';

const HeroSlider = () => {
  return (
    <Swiper className='h-full'>
      <SwiperSlide>
        <div className='h-full flex justify-end pt-40'>
          <div className=" flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount: 0.2}}
              className='text-center xl:text-left mb-2'
            >
              <span>Where hard</span> work meets success
            </motion.h1>
            <motion.p 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount: 0.2}}
              className='text-white italic text-center xl:text-left mb-4'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nihil deserunt. Reiciendis 
            </motion.p>
            <motion.div
              variants={fadeIn('up', .8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount: 0.2}}
            >
              <CustomBtn text='Get Started' containerStyles='w-[196px] h-[62px]' />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-full flex justify-end pt-40'>
          <div className=" flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <motion.h1 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount: 0.2}}
              className='text-center xl:text-left mb-2'
            >
              <span>Where hard</span> work meets success
            </motion.h1>
            <motion.p 
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount: 0.2}}
              className='text-white italic text-center xl:text-left mb-4'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nihil deserunt. Reiciendis 
            </motion.p>
            <motion.div
              variants={fadeIn('up', .8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount: 0.2}}
            >
              <CustomBtn text='Get Started' containerStyles='w-[196px] h-[62px]' />
            </motion.div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperNavButtons 
        containerStyles='absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-40 flex justify-center lg:justify-start gap-1'  
        btnStyles='border border-primary bg-transparent rounded-none w-14 h-14 flex justify-center items-center hover:bg-primary transition-all duration-300' 
        iconStyles='text-2xl'
      />
    </Swiper>
  )
}

export default HeroSlider