import { FaUsers } from 'react-icons/fa'
import { IoIosPricetags } from 'react-icons/io'
import { FaDumbbell } from 'react-icons/fa6'
import {FaBriefcase, FaClock, FaTrophy} from 'react-icons/fa'
import { ImUser } from 'react-icons/im'

export const featured = [
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

export const stats = [
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