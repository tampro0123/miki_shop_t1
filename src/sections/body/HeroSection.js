// Import Library
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
// Import component, function, asset
import HeroImg from 'public/static/Home/HeroSection/hero-img.jpg'
import HeroImgMobile from 'public/static/Home/HeroSection/hero-img-mobile.png'
import Button from 'src/components/Button'
import { useRouter } from 'next/router'

export default function HeroSection() {
  const router = useRouter();
  // Set width window when resize
  const [windowWidth, setWindowWidth] = useState(undefined);
  // Get size window to respondsive
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
      return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    }
  }, []);
  return (
    <div className='relative h-[629px] mobile:h-[467px] text-white mobile:mt-0'>
      <Image src={windowWidth <= 580 ? HeroImgMobile : HeroImg} layout='responsive' placeholder='blur' alt='beautiful girl'
        className='relative -z-10'
      />
      <h2 className='absolute text-[96px] top-[137px] right-[325px] mobile:hidden'>
        Thế Giới Nữ Trang
      </h2>
      <div className='absolute bg-white h-[2px] w-[824px] top-[302px] left-1/2 transform -translate-x-1/2 mobile:hidden'></div>
      <p className='text_ACenter text-24 font-semibold top-[324px] mobile:hidden'>
        Tôn vinh vẻ đẹp phái nữ - Trao quà tặng - Trao yêu thương
      </p>
      <div className='absolute bg-white h-[2px] w-[824px] top-[373px] left-1/2 transform -translate-x-1/2 mobile:hidden'></div>
      <Button secondary onClick={() => router.push('/aboutus/brandandhistory')} className='absolute z-30 left-1/2 transform -translate-x-1/2 top-[434px] mobile:top-[354px] mobile:px-[110px] mobile:left-[16px] mobile:-translate-x-0' >Tìm hiểu thêm</Button>
    </div>
  )
}