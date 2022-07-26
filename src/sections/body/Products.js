import Image from 'next/image';
import React from 'react';
import Ring from 'public/static/Home/ProductsSection/ring.png';
import EarRing from 'public/static/Home/ProductsSection/earring.jpg';
import Bangles from 'public/static/Home/ProductsSection/bangles.png';
import NeckLace from 'public/static/Home/ProductsSection/necklace.jpg';
import Watch from 'public/static/Home/ProductsSection/watch.png';

export default function Products() {
  return (
    <div className="container mb-[120px] flex justify-between text-white font-bold text-2xl">
      <div className="flex flex-wrap w-[80%] ">
        <div className="relative pr-[20px] mb-[20px] ">
          <p className="text_ACenter top-[198px] ">Nhẫn</p>
          <Image
            src={Ring}
            layout="intrinsic"
            objectFit="cover"
            width="254"
            height="254"
            alt="ring"
            placeholder="blur"
            className="-z-10 rounded-tl-16"
          />
        </div>
        <div className="relative pr-[20px]">
          <p className="text_ACenter top-[198px]">Đồng hồ</p>
          <Image
            src={Watch}
            layout="intrinsic"
            objectFit="cover"
            width="254"
            height="254"
            alt="ring"
            placeholder="blur"
            className="-z-10"
          />
        </div>
        <div className="flex items-center">
          <h2 className="text-5xl text-center leading-[48px] font-bold pl-[20px] text-primary-text">Miki jewelry</h2>
        </div>
        <div className="relative pr-[20px]">
          <p className="text_ACenter top-[198px]">Lắc tay</p>
          <Image
            src={Bangles}
            layout="intrinsic"
            width="450"
            height="254"
            alt="ring"
            placeholder="blur"
            className="-z-10 rounded-bl-16"
          />
        </div>
        <div className="relative pr-[20px]">
          <p className="text_ACenter top-[198px]">Dây chuyền</p>
          <Image
            src={NeckLace}
            layout="intrinsic"
            objectFit="cover"
            width="352"
            height="254"
            alt="ring"
            placeholder="blur"
            className="-z-10"
          />
        </div>
      </div>
      <div className="relative">
        <p className="text_ACenter top-[492px]">Bông tai</p>
        <Image
          src={EarRing}
          layout="intrinsic"
          objectFit="cover"
          width="254"
          height="548"
          alt="ring"
          placeholder="blur"
          className="-z-10 rounded-r-16"
        />
      </div>
    </div>
  );
}
