// Import library
import React from 'react';
import Image from 'next/image'
import { useState, useEffect } from "react"
// Import component, function, asset
import { Background, BackgroundMobile } from "src/components/Icons"
import img from "src/../public/static/DeliveryPage/Rectangle 4172.png"
import Button from 'src/components/Button';
import ProductTitle from "src/sections/form/ProductTitle"

export const ProductListSection = () => {
    const listProduct = [
        {
            _id: 0,
            name: "Lira Earrings",
            price: 599000,
            quantity: 1,
        },
        {
            _id: 1,
            name: "Lira Earrings",
            price: 599000,
            quantity: 1,
        },
        {
            _id: 2,
            name: "Lira Earrings",
            price: 599000,
            quantity: 1,
        },
    ]

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
        <div className="ml-10 mobile:mx-[16px]">
            {windowWidth <= 480 ? <BackgroundMobile>
                <div className="absolute w-[432px] mobile:w-[295px] top-[40px] left-[57px]  mobile:top-[25px] mobile:left-[24px]">
                    {listProduct?.map((item) => (
                        <div className="flex mb-7 mobile:mb-[13px]">
                            <div className="w-[40px] h-[40px]"><Image key={item.id} fixed width={40} height={40} src={img} /></div>
                            <h1 className="mx-4 w-[249px] mobile:w-[147px] font-bold text-base leading-6">{item.name}</h1>
                            <div className="flex flex-col items-end w-[110px]">
                                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold">{item.price}</h1>
                                <div className="flex justify-end">
                                    <Button className="text-black font-semibold text-2xl" text>-</Button>
                                    <h1 className="mx-[24px] text-xl leading-7 mobile:text-base mobile:leading-6 font-bold">{item.quantity}</h1>
                                    <Button className="text-black font-semibold text-2xl" text>+</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <ProductTitle />
                </div>
            </BackgroundMobile> : <Background>
                <div className="absolute w-[432px] mobile:w-[295px] top-[40px] left-[57px]  mobile:top-[25px] mobile:left-[24px]">
                    {listProduct?.map((item) => (
                        <div className="flex mb-7 mobile:mb-[13px]">
                            {/* <Image key={item.id} width={40} height={40} src={img} /> */}
                            <div className="w-[56px] h-[56px]"><Image key={item.id} fixed width={56} height={56} src={img} /></div>
                            <h1 className="mx-4 w-[249px] mobile:w-[147px] font-bold text-base leading-6">{item.name}</h1>
                            <div className="flex flex-col items-end w-[110px]">
                                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold">{item.price}</h1>
                                <div className="flex justify-end">
                                    <Button className="text-black font-semibold text-2xl" text>-</Button>
                                    <h1 className="mx-[24px] text-xl leading-7 mobile:text-base mobile:leading-6 font-bold">{item.quantity}</h1>
                                    <Button className="text-black font-semibold text-2xl" text>+</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <ProductTitle />
                </div>
            </Background>}

        </div>
    )
}

