// Import Library
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// Import component, function, asset
import Button from 'src/components/Button';
import productImg from 'public/static/Home/Img 01.jpg';

export default function BestSeller() {
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
    <div className={`${windowWidth <= 480 ? "" : "container"}`}>
      <div className="flex justify-between mobile:mt-[72px]" >
        <h1 className="text-32 font-bold relative z-10 mobile:font-mon mobile:text-semibold mobile:text-[24px] mobile:leading-8">Sản phẩm nổi bật</h1>
        <Button primary className="py-2 px-[46px] hover-btn-primary relative z-10 mobile:hidden">
          Xem Tất cả
        </Button>
      </div>
      <div className="flex justify-between mt-[70px] mobile:mt-[24px] flex-wrap">
        <div className="w-[22%] mobile:mb-[14px] mobile:w-[44%] text-center font-bold relative z-10 flex flex-col-reverse">
          <Button primary className="w-full mt-6 hover-btn-primary peer mobile:px-[17.5px] mobile:text-[12px] mobile:leading-[20px]">
            Thêm vào giỏ hàng
          </Button>
          <p className="text-price-text mt-[6px]">355.000đ</p>
          <p className="text-[20px] mt-6 mobile:text-[16px] mobile:font-bold mobile:leading-6">Lira Earrings</p>
          <div className='hover:shadow-product hover:scale-[1.01] rounded-16 peer-hover:shadow-product'>
            <Image
              src={productImg}
              alt="Best seller product"
              placeholder="empty"
              width="254"
              height="300"
              layout="responsive"
              className='rounded-16'
            />
          </div>
        </div>
        <div className="w-[22%] mobile:mb-[14px] mobile:w-[44%] text-center font-bold relative z-10 flex flex-col-reverse">
          <Button primary className="w-full mt-6 hover-btn-primary peer mobile:px-[17.5px] mobile:text-[12px] mobile:leading-[20px]">
            Thêm vào giỏ hàng
          </Button>
          <p className="text-price-text mt-[6px]">355.000đ</p>
          <p className="text-[20px] mt-6 mobile:text-[16px] mobile:font-bold mobile:leading-6">Lira Earrings</p>
          <div className='hover:shadow-product hover:scale-[1.01] rounded-16 peer-hover:shadow-product'>
            <Image
              src={productImg}
              alt="Best seller product"
              placeholder="empty"
              width="254"
              height="300"
              layout="responsive"
              className='rounded-16'
            />
          </div>
        </div>
        <div className="w-[22%] mobile:mb-[14px] mobile:w-[44%] text-center font-bold relative z-10 flex flex-col-reverse">
          <Button primary className="w-full mt-6 hover-btn-primary peer mobile:px-[17.5px] mobile:text-[12px] mobile:leading-[20px]">
            Thêm vào giỏ hàng
          </Button>
          <p className="text-price-text mt-[6px]">355.000đ</p>
          <p className="text-[20px] mt-6 mobile:text-[16px] mobile:font-bold mobile:leading-6">Lira Earrings</p>
          <div className='hover:shadow-product hover:scale-[1.01] rounded-16 peer-hover:shadow-product'>
            <Image
              src={productImg}
              alt="Best seller product"
              placeholder="empty"
              width="254"
              height="300"
              layout="responsive"
              className='rounded-16'
            />
          </div>
        </div>
        <div className="w-[22%] mobile:mb-[14px] mobile:w-[44%] text-center font-bold relative z-10 flex flex-col-reverse">
          <Button primary className="w-full mt-6 hover-btn-primary peer mobile:px-[17.5px] mobile:text-[12px] mobile:leading-[20px]">
            Thêm vào giỏ hàng
          </Button>
          <p className="text-price-text mt-[6px]">355.000đ</p>
          <p className="text-[20px] mt-6 mobile:text-[16px] mobile:font-bold mobile:leading-6">Lira Earrings</p>
          <div className='hover:shadow-product hover:scale-[1.01] rounded-16 peer-hover:shadow-product'>
            <Image
              src={productImg}
              alt="Best seller product"
              placeholder="empty"
              width="254"
              height="300"
              layout="responsive"
              className='rounded-16'
            />
          </div>
        </div>
      </div>
      <Button primary className="py-2 ml-[210px] mt-[48px] text-[12px] leadding-[20px] px-[46px] hover-btn-primary relative z-10 hidden mobile:block">
        Xem Tất cả
      </Button>
    </div>
  );
}
