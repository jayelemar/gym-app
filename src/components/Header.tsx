'use client';
import React, { useEffect, useState } from 'react'
import Nav from './nav/Nav'
import MobileNav from './nav/MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import logoImage from '../../public/img/logo.png'
import { AlignJustify } from 'lucide-react';
import { useMobileNavStore } from '@/store/MobileNavStore';

const Header = () => {
  const [IsHeaderActive, setIsHeaderActive] = useState(false)
  useEffect(() => {
    const handleScroll = ()=> {
          //detect scroll
    setIsHeaderActive(window.scrollY > 50)
    }
    // add scroll event
    window.addEventListener('scroll', handleScroll);
    // clear scroll event
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  console.log(IsHeaderActive);

  // Mobile Nav Event
  const { setIsOpen } = useMobileNavStore()
  const handleClick = (e:React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen(true)
  };
  
  return (
    <header className={`${IsHeaderActive ? 'h-[100px]' : 'h-[124px]'} sticky max-w-[1920px] top-0 left-0 right-0 w-full bg-foreground h-[100px] transition-all z-50`}>
      <div className="container mx-auto h-full flex justify-between items-center text-center">
        <Link href='/'>
          <Image src={logoImage} alt='logo' width={117} height={55}/>
        </Link>
        <Nav 
          containerStyles='py-12 gap-6 hidden xl:flex' 
          linkStyles='cursor-pointer text-background hover:text-primary transition-all text-base uppercase font-medium'
          activeStyles='text-primary'
        />
 
        
        <MobileNav 
          containerStyles='flex flex-col justify-center items-center gap-y-8 py-8 text-background uppercase text-base'
          linkStyles='cursor-pointer hover:text-primary'
          activeStyles='text-primary'
        />

        <div className="flex justify-center items-center gap-6 text-background">
          <Link href='/' className='hover:text-primary transition-all text-base uppercase font-medium'>Login</Link>
          <Link href='/' className='hover:text-primary transition-all text-base uppercase font-medium'>Register</Link>

        <AlignJustify  
          className='text-background cursor-pointer xl:hidden' 
          size={35}
          onClick={handleClick}
        />
                </div> 
      </div>
    </header>

  )
}

export default Header