// Import Library
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
// Import component, function, asset
import AboutImg from 'public/static/Home/AboutSection/about-img.jpg';
import AboutImgMobile from 'public/static/Home/AboutSection/about-img-mobile.jpg';
import Button from 'src/components/Button';

export default function AboutSection() {
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
  const router = useRouter()
  const handleClickBtn = () => {
    router.push('/aboutus/brandandhistory')
  }
  return (
    <div className={`flex justify-between ${windowWidth <= 480 ? "" : "container"} mobile:block`}>
      <div className="w-[48%] mobile:w-[375px] font-bold">
        <h1 className="text-32 leading-10 mobile:mt-[72px] mobile:mb-[24px] mobile:mx-[16px] mobile:text-[24px] mobile:font-semibold mobile:leading-8">Về chúng tôi</h1>
        <h2 className="font-plf text-5xl leading-[58px] mt-[56px] mobile:hidden">“Ngày mai phải tốt hơn ngày hôm nay”</h2>
        <p className="font-medium text-16 leading-5 text-Neutral/2 mt-[32px] mobile:hidden">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <Button onClick={handleClickBtn} primary className="mt-[94px] hover-btn-primary relative z-10 mobile:hidden">
          Tìm hiểu thêm
        </Button>
      </div>
      <div className="w-[48%] mobile:w-[375px]">
        <Image src={windowWidth <= 480 ? AboutImgMobile : AboutImg} placeholder="empty" width={windowWidth <= 480 ? 375 : 548} height={windowWidth <= 480 ? 375 : 537} objectFit="cover" className="rounded-16 mobile:rounded-none relative z-10" />
      </div>
      <div className="hidden mobile:block">
        <h2 className="mx-[16px] mt-[42px] mb-[12px] font-bold text-[40px] leading-[50px]">“Ngày mai phải tốt hơn ngày hôm nay”</h2>
        <p className="font-medium text-[16px] leading-6 text-Neutral/2 mx-[16px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <Button onClick={handleClickBtn} primary className="mt-[48px] hover-btn-primary mx-[16px] px-[109px] relative z-10">
          Tìm hiểu thêm
        </Button>
      </div>
    </div>

  );
}

