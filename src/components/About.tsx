'use client';

import { FaUsers } from 'react-icons/fa'
import { IoIosPricetags } from 'react-icons/io'
import { FaDumbbell } from 'react-icons/fa6'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants';
import Achievements from './Achievements';

const featured = [
  {
    icon: <FaUsers />,
    title: 'award-winning trainers',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident distinctio necessitatibus.' 
  },
  {
    icon: <IoIosPricetags />,
    title: 'excellent prices',
    subtitle: '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident distinctio necessitatibus.' 
  },
  {
    icon: <FaDumbbell />,
    title: 'modern equipments',
    subtitle: '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident distinctio necessitatibus.'
  },

]

const About = () => {
  return (
    <section 
      id='about'
      className='pt-8 pb-14 lg:pt-16 lg:pb-28'
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <motion.h2 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className='text-center'
          >
            About Us
          </motion.h2>
          <motion.p
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className='max-w-[600px] mx-auto text-center'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolor cumque facere esse modi a.
          </motion.p>
        </div>

        {/* featured items */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.2}}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((feature, index) => {
            return (
              <div
                key={index}
                className='flex flex-col justify-center items-center gap-4  border p-10'
              >
                <div className='text-4xl bg-foreground text-white w-[80px] h-[80px] rounded-full flex justify-center items-center'>{feature.icon}</div>
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h4 className='text-primary'>{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              </div>
            )
          })}
        </motion.div>
        {/* achievements */}
        <Achievements />
      </div>
    </section>
  )
}

export default About