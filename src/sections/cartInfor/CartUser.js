import React from 'react'
import CartItems from 'src/components/CartItem/CartItems'
import TotalCart from 'src/sections/cartInfor/TotalCart'
export default function CartUser() {

    return (
        <div className="grid grid-cols-2  gap-[138px]">
            <CartItems />
            <TotalCart />
        </div>
    )
}
