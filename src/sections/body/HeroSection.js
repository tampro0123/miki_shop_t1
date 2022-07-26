import Image from 'next/image'
import React from 'react'
import HeroImg from 'public/static/Home/HeroSection/hero-img.png'
import Button from 'src/components/Button'

export default function HeroSection() {
  return (
    <div className='z-10 relative h-[629px] text-white'>
        <Image src={HeroImg}  layout='fill' placeholder='blur' alt='beautiful girl'
        className='-z-10'
        />
        <h2 className='absolute text-[96px] top-[137px] right-[325px]'>
          Thế Giới Nữ Trang 
        </h2>
        <div className='absolute bg-white h-[2px] w-[824px] top-[302px] right-[308px]'></div>
        <p className='text_ACenter text-24 font-semibold top-[324px]'>
          Tôn vinh vẻ đẹp phái nữ - Trao quà tặng - Trao yêu thương 
        </p>
        <div className='absolute bg-white h-[2px] w-[824px] top-[373px] right-[308px]'></div>
        <Button secondary className='absolute right-[632px] top-[434px]' >Tìm hiểu thêm</Button>
    </div>
  )
}