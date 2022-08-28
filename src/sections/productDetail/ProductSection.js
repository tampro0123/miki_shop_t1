import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from "react"
import { useRecoilValue } from 'recoil';
import FormatPrice from "src/utils/formatPrice"



const ProductSection = ({ product }) => {
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
    // UI
    return (
        <div className="flex mb-7 mobile:mb-[13px]">
            {/* <div className={`${windowWidth <= 480 ? "w-[40px] h-[40px]" : "w-[56px] h-[56px]"}`}><Image fixed="true" width={windowWidth <= 480 ? 40 : 56} height={windowWidth <= 480 ? 40 : 56} src={product.image} /></div> */}
            {/* Name */}
            <h1 className="mx-4 w-[249px] mobile:w-[147px] font-semibold text-base leading-6">{product.name}</h1>
            <div className="flex flex-col products-end w-[110px]">
                {/* Price */}
                <h1 className="text-base leading-7 mobile:text-base text-right mobile:leading-6 font-bold"><FormatPrice price={product.price} quantity={1} /></h1>
                <div className="flex justify-end">
                    {/* Quantity */}
                    <h1 className="text-base leading-7 mobile:text-base mobile:leading-6 font-bold">Số lượng: {product.quantity}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductSection
