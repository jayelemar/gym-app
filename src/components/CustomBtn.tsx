'use client';
import React, { FC } from 'react'

type CustomBtnProps = {
  text: string,
  containerStyles: string,
}

const CustomBtn:FC<CustomBtnProps> = ({ text, containerStyles }) => {
  return (
    <button className={
      `${containerStyles}
        group relative cursor-pointer overflow-hidden bg-primary uppercase
      `}>
        {/* animated span */}
      <span className='ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-black transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32' />
      <span/>
      <span className='ease relative text-white transition duration-300 group-hover:text-white'
      >
        {text}
      </span>
    </button>
  )
}

export default CustomBtn