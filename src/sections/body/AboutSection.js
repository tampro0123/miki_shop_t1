import Image from 'next/image';
import React from 'react';
import AboutImg from 'public/static/Home/AboutSection/about-img.jpg';
import Button from 'src/components/Button';

export default function AboutSection() {
  return (
    <div className="container flex justify-between">
      <div className="w-[48%] font-bold">
        <h1 className="text-32 leading-10">Về chúng tôi</h1>
        <h2 className="font-plf text-5xl leading-[58px] mt-[56px]">“Ngày mai phải tốt hơn ngày hôm nay”</h2>
        <p className="font-medium text-16 leading-5 text-Neutral/2 mt-[32px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <Button primary className="mt-[94px] hover-btn-primary">
          Tìm hiểu thêm
        </Button>
      </div>
      <div className="w-[48%]">
        <Image src={AboutImg} placeholder="empty" width="548" height="537px" objectFit="cover" className="rounded-16" />
      </div>
    </div>
  );
}
