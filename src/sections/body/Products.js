import Image from 'next/image';
import React from 'react';
import Ring from 'public/static/Home/ProductsSection/ring.png';
import EarRing from 'public/static/Home/ProductsSection/earring.jpg';
import Bangles from 'public/static/Home/ProductsSection/bangles.png';
import NeckLace from 'public/static/Home/ProductsSection/necklace.jpg';
import Watch from 'public/static/Home/ProductsSection/watch.png';

export default function Products() {
  return (
    <div className="container flex justify-between text-white font-bold text-2xl">
      <div className="flex-col w-[80%] ">
        <div className="flex">
          <div className="relative pr-[20px] mb-[31px] drop-shadow-product">
            <p className="text_ACenter top-3/4 ">Nhẫn</p>
            <Image
              src={Ring}
              layout="fixed"
              objectFit="cover"
              width="254"
              height="254"
              alt="ring"
              placeholder="blur"
              className="-z-10 rounded-tl-16"
            />
          </div>
          <div className="relative pr-[20px] drop-shadow-product h-[254px]">
            <p className="text_ACenter top-3/4">Đồng hồ</p>
            <Image
              src={Watch}
              layout="fixed"
              objectFit="cover"
              width="254"
              height="254"
              alt="ring"
              placeholder="blur"
              className="-z-10 rounded-sm"
            />
          </div>
          <div className="flex items-center">
            <h2 className="drop-shadow-product text-5xl min-w-full text-center leading-[48px] font-bold pl-[20px] text-primary-text">Miki jewelry</h2>
          </div>
        </div>
        <div className=" flex">
          <div className="relative pr-[20px] drop-shadow-product">
            <p className="text_ACenter top-3/4">Lắc tay</p>
            <Image
              src={Bangles}
              layout="fixed"
              width="450"
              height="254"
              alt="ring"
              placeholder="blur"
              className="-z-10 rounded-bl-16"
            />
          </div>
          <div className="relative pr-[20px] drop-shadow-product">
            <p className="text_ACenter top-3/4">Dây chuyền</p>
            <Image
              src={NeckLace}
              layout="fixed"
              objectFit='cover'
              width="352"
              height="254"
              alt="ring"
              placeholder="blur"
              className="-z-10 min-h-[254px] rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="relative drop-shadow-product">
        <p className="text_ACenter top-[492px]">Bông tai</p>
        <Image
          src={EarRing}
          layout="fixed"
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
