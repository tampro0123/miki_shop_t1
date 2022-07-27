import React from 'react';
import Button from 'src/components/Button';
import productImg from 'public/static/Home/Img 01.jpg';
import Image from 'next/image';

export default function BestSeller() {
  return (
    <div className="container">
      <div className="flex justify-between ">
        <h1 className="text-32 font-bold relative z-10">Sản phẩm nổi bật</h1>
        <Button primary className="py-2 px-[46px] hover-btn-primary relative z-10">
          Xem Tất cả
        </Button>
      </div>
      <div className="flex justify-between mt-[70px] ">
        <div className="w-[22%] text-center font-bold relative z-10 ">
            <div className='hover:shadow-product hover:scale-[1.01] rounded-16'>
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
          <p className="text-[20px] mt-6">Lira Earrings</p>
          <p className="text-price-text mt-[6px]">355.000đ</p>
          <Button primary className="w-full mt-4 hover-btn-primary">
            Thêm vào giỏ hàng
          </Button>
        </div>
        <div className="w-[22%] text-center font-bold relative z-10 ">
            <div className='hover:shadow-product hover:scale-[1.01] rounded-16'>
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
          <p className="text-[20px] mt-6">Lira Earrings</p>
          <p className="text-price-text mt-[6px]">355.000đ</p>
          <Button primary className="w-full mt-4 hover-btn-primary">
            Thêm vào giỏ hàng
          </Button>
        </div>
        <div className="w-[22%] text-center font-bold relative z-10 ">
            <div className='hover:shadow-product hover:scale-[1.01] rounded-16'>
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
          <p className="text-[20px] mt-6">Lira Earrings</p>
          <p className="text-price-text mt-[6px]">355.000đ</p>
          <Button primary className="w-full mt-4 hover-btn-primary">
            Thêm vào giỏ hàng
          </Button>
        </div>
        <div className="w-[22%] text-center font-bold relative z-10 ">
            <div className='hover:shadow-product hover:scale-[1.01] rounded-16'>
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
          <p className="text-[20px] mt-6">Lira Earrings</p>
          <p className="text-price-text mt-[6px]">355.000đ</p>
          <Button primary className="w-full mt-4 hover-btn-primary">
            Thêm vào giỏ hàng
          </Button>
        </div>
        
      </div>
    </div>
  );
}
