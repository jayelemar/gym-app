'use client';
import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image'
import Link from 'next/link';
import CustomBtn from './CustomBtn';
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants';

const TrainerData = [
  {
    image: '/img/trainers/david.jpg',
    name: 'David Williams',
    role: 'Body Builder coach',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, enim!',
    social: [
      { icon: FaFacebook, href: '/'},
      { icon: FaTwitter, href: '/'},
      { icon: FaYoutube, href: '/'}
    ]
  },
  {
    image: '/img/trainers/rosy.jpg',
    name: 'Rosy Rivera',
    role: 'Body Builder coach',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, enim!',
    social: [
      { icon: FaFacebook, href: '/'},
      { icon: FaTwitter, href: '/'},
      { icon: FaYoutube, href: '/'}
    ]
  },
  {
    image: '/img/trainers/matt.jpg',
    name: 'Matt Stone',
    role: 'Body Builder coach',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, enim!',
    social: [
      { icon: FaFacebook, href: '/'},
      { icon: FaTwitter, href: '/'},
      { icon: FaYoutube, href: '/'}
    ]
  },
  {
    image: '/img/trainers/sofia.jpg',
    name: 'Sofia Lauren',
    role: 'Body Builder coach',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, enim!',
    social: [
      { icon: FaFacebook, href: '/'},
      { icon: FaTwitter, href: '/'},
      { icon: FaYoutube, href: '/'}
    ]
  },
]

const Team = () => {
  return (
    <section id='team' className=' xl:h-[100vh] pt-20 sm:pt-0 mb-12 xl:mb-16'>
      <div className="container mx-auto h-full flex-col flex items-center justify-center">
        <motion.h2
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.2}}
          className='text-center mb-10'
        >
          Our Trainers
        </motion.h2>
        {/* trainers grid */}
        <motion.div 
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.2}}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-10 xl:mb-20">
          {TrainerData.map((trainer, index) => {
            return(
              <div className="flex flex-col items-center justify-center" key={index}>
                {/* Image */}
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.image} fill alt=''/>
                </div>
                {/* details */}
                <h4 className='mb-2'>{trainer.name}</h4>
                <p className='uppercase text-xs tracking-[3px] mb-2'>{trainer.role}</p>
                <p className='mb-6 max-w-[320px]'>{trainer.desc}</p>
                {/* socials */}
                <div className="flex flex-row gap-12 justify-center">
                  {trainer.social.map((social, index)=> {
                    return (
                      <div className="" key={index}>
                        <Link href={social.href} className='hover:text-primary transition-all'>
                          <social.icon className='text-lg'/>
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </motion.div>
        {/* btn */}
        <motion.div
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.2}}
        >
          <CustomBtn 
            containerStyles='w-[196px] h-[62px]'
            text='See all trainers'
          />
        </motion.div>

      </div>
    </section>
  )
}

export default Team