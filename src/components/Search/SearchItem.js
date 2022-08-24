import Image from 'next/image';
import React from 'react';
import img from 'src/assets/product/banner.jpg';

export default function SearchItem() {
  return (
    <div className="flex hover:bg-slate-200 h-[80px] mb-3 px-2 cursor-pointer flex-grow-0">
      <Image src={img} width={80} height={80} objectFit="cover" className="rounded-sm flex-auto" />
      <div className="ml-2 p-1 flex-1">
        <p className="text-trumcate2">Nhẫn Kim cương Vàng trắng 14K PNJaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <p className="text-price-text font-bold text-xl">1.250.000 đ</p>
      </div>
    </div>
  );
}
