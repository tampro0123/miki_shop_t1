import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import FormatPrice from 'src/utils/formatPrice';
import Button from '../Button';

export default function ProductItem({products}) {
  return (
    <div className="grid grid-cols-4 gap-10  mt-[70px]">
            {products.map((product, i) => {
              return (
                <div key={product?.name} className="flex flex-col-reverse text-center font-bold relative z-10 ">
                  <Button primary className="w-full mt-6 hover-btn-primary peer">
                    Thêm vào giỏ hàng
                  </Button>
                  <p className="text-price-text mt-[6px]">
                    <FormatPrice price={product.storage[0].price} discount={product.discount}/>
                  </p>
                  <p className="text-[20px] mt-6 text-trumcate2">{product.name}</p>
                  <div className="hover:shadow-product hover:scale-[1.01] shadow-md rounded-16 peer-hover:shadow-product relative">
                    <Link href={`/product/${product.slug}`}>
                    <a >
                      <Image
                        src={product.images[0].src}
                        alt="Best seller product"
                        placeholder="empty"
                        width="254"
                        height="300"
                        layout="fixed"
                        className="rounded-16"
                      />
                    </a>
                    </Link>
                    {product.discount ? (
                      <p className="absolute top-0 left-0 px-3 inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 ">
                        <span className="relative text-white">Sale</span>
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              );
            })}
          </div>
  )
}
