import React from 'react'
import imgCartEmpty from 'src/assets/CartEmpty/ImgEmptyCart.png';
import Image from 'next/image';
import Button from 'src/components/button'
export default function CartEmpty() {
    return (
        <div className='pb-[20px]'>
            <div className='flex justify-center mt-[50px]'>
                <Image
                    src={imgCartEmpty}
                    className='block'
                />
            </div>
            <p className='text-center text-[#AC3131] text-[23px] font-bold'>Giỏ hàng của bạn đang trống!!!</p>
            <div className='flex justify-center mt-[30px]'>
                <Button primary className="hover-btn-primary shadow-md" to='/product/allProduct'>Tiếp tục mua hàng</Button>
            </div>
        </div>
    )
}
