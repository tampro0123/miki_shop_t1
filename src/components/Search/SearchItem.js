import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FormatPrice from 'src/utils/formatPrice';

export default function SearchItem({ product }) {
  return (
    <Link href={`/product/${product.slug}`}>
        <a>
        <div className="flex hover:bg-slate-200 h-[80px] mb-3 px-2 cursor-pointer flex-grow-0">
          <Image
            src={product.images[0].src}
            width={80}
            height={80}
            objectFit="cover"
            className="rounded-sm flex-auto"
          />
          <div className="ml-2 p-1 flex-1">
            <p className="text-trumcate2">{product.name}</p>
            <p className="text-price-text font-bold text-xl">
              {' '}
              <FormatPrice price={product?.storage[0]?.price} />{' '}
            </p>
          </div>
    </div>
        </a>
      </Link>
  );
}
