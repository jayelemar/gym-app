'use client';

import CountUp from "react-countup";
import {FaBriefcase, FaClock, FaTrophy} from 'react-icons/fa'
import { ImUser } from 'react-icons/im'

import {motion, useInView} from 'framer-motion'
import { useRef } from "react";
import { statsContainerVariant, statsItem } from "@/lib/variants";

const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: 'training courses',
  },
  {
    number: 879,
    icon: FaClock,
    text: 'working hours',
  },
  {
    number: 150,
    icon: FaTrophy,
    text: 'international awards',
  },
  {
    number: 9,
    icon: ImUser,
    text: 'happy customers',
  },
]


const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <section>
      <div className="container nx-auto">
        <motion.div 
          variants={statsContainerVariant}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-16"
        >
          {stats.map((stat, index)=> {
            return (
              <motion.div 
                variants={statsItem}
                key={index} 
                className="flex flex-col justify-center items-center mb-12"
              >
                {/* circle outer */}
                <div className="border border-primary/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                  {/* circle inner @ count number */}
                  <div 
                    ref={ref}
                    className="border border-primary/30 w-full h-full flex items-center justify-center text-center text-5xl rounded-full"
                  >
                    { isInView && <CountUp start={0} end={stat.number} duration={6} /> }
                  </div>
                  {/* text */}
                  <div className="flex flex-col justify-center items-center text-center">
                    <stat.icon className='text-3xl mt-6 mb-2' />
                    <h4>{stat.text}</h4>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements