import Image from 'next/image'
import React from 'react'
import HeroImg from 'public/static/Home/HeroSection/hero-img.jpg'
import Button from 'src/components/Button'
import { useRouter } from 'next/router'

export default function HeroSection() {
  const router = useRouter()
  const handleClickBtn = () => {
    router.push('/aboutus/brandandhistory')
  }
  return (
    <div className=' relative h-[629px] text-white'>
      <Image src={HeroImg} layout='responsive' placeholder='blur' alt='beautiful girl'
        className='relative -z-10'
      />
      <h2 className='absolute text-[96px] top-[137px] right-[325px]'>
        Thế Giới Nữ Trang
      </h2>
      <div className='absolute bg-white h-[2px] w-[824px] top-[302px] left-1/2 transform -translate-x-1/2'></div>
      <p className='text_ACenter text-24 font-semibold top-[324px]'>
        Tôn vinh vẻ đẹp phái nữ - Trao quà tặng - Trao yêu thương
      </p>
      <div className='absolute bg-white h-[2px] w-[824px] top-[373px] left-1/2 transform -translate-x-1/2'></div>
      <Button secondary className='absolute z-30 left-1/2 transform -translate-x-1/2 top-[434px]' >Tìm hiểu thêm</Button>
    </div>
  )
}