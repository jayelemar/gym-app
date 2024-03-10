
import React, { FC, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { links } from './NavData';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { useMobileNavStore } from '@/store/MobileNavStore';

type MobileNavProps = {
  containerStyles: string,
  linkStyles: string,
  activeStyles: string,
}

const MobileNav:FC<MobileNavProps> = ({ containerStyles, linkStyles, activeStyles }) => {
  const {isOpen, setIsOpen} = useMobileNavStore()
  const handleNavClick = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <Sheet open={isOpen} onOpenChange={handleNavClick}>
      <SheetTrigger asChild className='xl:hidden'>
      </SheetTrigger>
      <SheetContent className='bg-foreground border-l-0 flex justify-center items-center'>
        <div className={containerStyles}>
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
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </ScrollLink>
          )
        })}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav