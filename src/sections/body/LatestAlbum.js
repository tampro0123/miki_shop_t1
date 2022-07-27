import Image from 'next/image';
import React from 'react';
import BestSeller from 'public/static/Home/LatestAlbumSection/latest-album-img.png';
import Button from 'src/components/Button';

export default function LatestAlbum() {
  return (
    <div className="bg-[#c6997b] h-[732px] w-full relative mt-[120px] text-white overflow-hidden">
      <Image src={BestSeller} alt="nice girl" layout='fixed' width='1420' height='782px' objectFit='contain'
      className="absolute bottom-0 translate-x-[278px] "
      />
      <div className="absolute top-[109px] left-[152px] max-w-[700px] w-full h-[503px] border-solid rounded-8 divide-white
       before:content-[''] before:absolute before:right-0 before:top-0 before:border-t-[3px] before:border-t-solid 
       before:border-t-white before:w-full before:h-full">
        <h1 className="pl-[56px] pt-[44px]  text-5xl font-medium ">Bộ sưu tập mới nhất</h1>
        <h2 className="pl-[98px] pt-[56px] mb-[16px] text-[48px]">Ánh trăng người tình</h2>
        <p className="pl-[98px] pt-4 font-plf pr-[144px] leading-5">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sin t. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <Button secondary className="mt-[64px] ml-[98px] py-3 px-[32px]">
          Tìm hiểu thêm
        </Button>
      </div>
    </div>
  );
}
