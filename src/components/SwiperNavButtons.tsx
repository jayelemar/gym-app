'use client';

import { FC } from "react";
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import { Button } from "./ui/button";


type SwiperNavButtonsProps = {
  containerStyles: string,
  btnStyles:string,
  iconStyles: string,
}

const SwiperNavButtons:FC<SwiperNavButtonsProps> = (
  { containerStyles, btnStyles, iconStyles }
) => {
  const swiper = useSwiper()
  return (
    <div className={
      `${containerStyles}
      
      `
    }>
      <Button className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold/>
      </Button>
      <Button 
        className={`${btnStyles}`} 
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold/>
      </Button>
    </div>
  )
}

export default SwiperNavButtons