'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants';
import CustomBtn from '../CustomBtn';
import { classes } from './ClassesData';


const Classes = () => {
  return (
    <section id='class' className='h-[135vh] lg:h-[140vh] xl:h-[155vh] mb-64 md:mb-72 xl:mb-0 lg:mb-0'>
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.2}}
        className="grid grid-cols-1 lg:grid-cols-2 "
      >
        {classes.map((item, index)=> {
          return (
            <div
              key={index}
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
            >

              {/* overlay */}
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"/>
              <Image src={item.img} fill className='object-cover' alt='' />
              <div className="z-30 max-w-[380px] text-center flex  flex-col items-center justify-center gap-4">
                <motion.h3
                  variants={fadeIn('up', 0.6)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false, amount: 0.2}}
                  className='text-primary'
                >
                  {item.name}
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.8)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false, amount: 0.2}}
                  className='text-white p-4'
                >
                  {item.description}
                </motion.p>
                <motion.div
                  variants={fadeIn('up', 1.0)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false, amount: 0.2}}
                  className=""
                >
                  <CustomBtn
                    containerStyles='w-[164px] h-[46px] '
                    text='Read more'
                  /> 
                </motion.div>
              </div>
          </div>
          )
        })}
      </motion.div>
    </section>
  )
}
export default Classes