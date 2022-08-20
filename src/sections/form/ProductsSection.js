// Import library
import React from 'react';
import Image from 'next/image'
import { useState, useEffect } from "react"
import { useRecoilState } from "recoil";
// Import component, function, asset
import { productsState, minus1, increase1 } from "src/recoils/productList/productListState"
import { Background } from "src/components/Icons"
import img from "src/../public/static/DeliveryPage/Rectangle 4172.png"
import Button from 'src/components/Button';
import { ProductsTitle } from "src/sections/form"

export const ProductsSection = () => {
    // get State from storage recoil
    const [products, setProducts] = useRecoilState(productsState)
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
        <div className="ml-10 mobile:mx-[16px]">
            {/* Background Respondsived */}
            <Background windowWidth={windowWidth}>
                <div className="absolute w-[432px] mobile:w-[295px] top-[40px] left-[57px]  mobile:top-[25px] mobile:left-[24px]">
                    {/* Render list product */}
                    {products?.map((product) => (
                        <div key={product.id} className="flex mb-7 mobile:mb-[13px]">
                            <div className={`${windowWidth <= 480 ? "w-[40px] h-[40px]" : "w-[56px] h-[56px]"}`}><Image fixed="true" width={windowWidth <= 480 ? 40 : 56} height={windowWidth <= 480 ? 40 : 56} src={img} /></div>
                            {/* Name */}
                            <h1 className="mx-4 w-[249px] mobile:w-[147px] font-bold text-base leading-6">{product.name}</h1>
                            <div className="flex flex-col products-end w-[110px]">
                                {/* Price */}
                                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold">{product.price}</h1>
                                <div className="flex justify-end">
                                    {/* Button increase */}
                                    <Button type="button" onClick={() => setProducts(minus1(products, product.id))} className="text-black font-semibold text-2xl" text>-</Button>
                                    {/* Quantity */}
                                    <h1 className="mx-[24px] text-xl leading-7 mobile:text-base mobile:leading-6 font-bold">{product.quantity}</h1>
                                    {/* Button Minus */}
                                    <Button type="button" onClick={() => setProducts(increase1(products, product.id))} className="text-black font-semibold text-2xl" text>+</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Title total */}
                    <ProductsTitle />
                </div>
            </Background>
        </div>
    )
}

