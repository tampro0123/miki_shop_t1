import Image from 'next/image';
import React from 'react';
import BestSeller from 'public/static/Home/LatestAlbumSection/latest-album-img.png';
import Button from 'src/components/Button';

export default function LatestAlbum() {
  return (
    <div className="bg-[#c6997b] h-[732px] w-full relative mt-[120px] text-white overflow-hidden">
      <Image className="z-10 absolute left-[280px] " src={BestSeller} alt="nice girl" height='732' width='1440' objectFit='contain'
      />
      <div className="absolute top-[109px] left-[152px] w-[540px] h-[483px] border-solid rounded-8 divide-white border-[6px]">
        <h1 className="pl-[56px] pt-[44px] text-5xl font-medium  ">Bộ sưu tập mới nhất</h1>
        <h2 className="pl-[72px] pt-[56px] text-[44px] ">Ánh trăng người tình</h2>
        <p className="pl-[72px] pt-4 pr-[210px] font-plf leading-5 ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <Button secondary className="mt-[64px] ml-[72px] py-3 px-[32px]">
          Tìm hiểu thêm
        </Button>
      </div>
    </div>
  );
}
