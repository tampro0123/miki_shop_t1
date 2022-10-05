import React from 'react';
import emptyOrder from 'src/assets/OrderEmpty/EmptyOrder.png'
import Image from 'next/image'
export default function OrderEmpty({ title }) {
    return (
        <div className="flex items-center flex-col">
            <Image
                src={emptyOrder}
                className="mb-[10px] max-w-[10px] w-full"
            />
            <p className="font-bold text-[20px] mb-[20px]">{title}</p>
        </div>
    )
}
