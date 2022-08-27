import React from 'react'
import ProductItems from 'src/components/CartItem/CartItems'
import TotalCart from 'src/sections/cartInfor/TotalCart'
export default function CartUser() {

    return (
        <div className="grid grid-cols-2  gap-[138px]">
            <ProductItems />
            <TotalCart />
        </div>
    )
}
