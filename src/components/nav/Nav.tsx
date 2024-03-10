
import React, { FC } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { links } from './NavData';
import { NavType } from '@/types/NavTypes';

const Nav:FC<NavType> = ({ containerStyles, linkStyles, activeStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index)=> {
        return (
          <ScrollLink 
            key={index} 
            offset={link.offset} 
            to={link.target} 
            smooth 
            spy
            className={linkStyles}
            activeClass={activeStyles}
          >
            {link.name}
          </ScrollLink>
        )
      })}
    </nav>
  )
}

export default Nav