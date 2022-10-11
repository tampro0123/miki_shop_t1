// Import library
import React, { useEffect, useState } from 'react';
// Import component, function, asset
import { cartState } from "src/recoils/cartState"
import { useRecoilState } from "recoil";
import { Background } from "src/components/Icons"
import { ProductsTitle } from "src/sections/form"
import ProductSection from '../productDetail/ProductSection';

export const ProductsSection = () => {
    // get State from storage recoil
    const [product, setProduct] = useRecoilState(cartState)
    const [products, setProducts] = useState([])
    useEffect(() => { setProducts(product) }, [product])
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
                <div className="absolute w-[448px] mobile:w-[295px] top-[40px] left-[57px]  mobile:top-[25px] mobile:left-[24px]">
                    {/* Render list product */}
                    <div className="h-[300px] overflow-y-scroll pr-[16px]">
                        {products?.map((product) => (
                            <ProductSection key={product.id} product={product} />
                        ))}
                    </div>
                    {/* Title total */}
                    <ProductsTitle />
                </div>
            </Background>
        </div>
    )
}

