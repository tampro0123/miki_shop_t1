import React from 'react'

const ProductTitle = () => {
    return (
        <div>
            <div className="border-t-[1px] mt-[44px] mobile:mt-[23px] border-solid border-[#272727]"></div>
            <div className="flex justify-between mt-[35px] mobile:mt-[20px]">
                <h1 className="text-base font-medium leading-6 text-black">Giá sản phẩm</h1>
                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold">1670000</h1>
            </div>
            <div className="flex justify-between mt-[20px] mobile:mt-[12px]">
                <h1 className="text-base font-medium leading-6 text-black">Phí giao hàng</h1>
                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold">1670000</h1>
            </div>
            <div className="flex justify-between mt-[20px] mobile:mt-[12px]">
                <h1 className="text-base font-medium leading-6 text-black">Giảm giá</h1>
                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold">1670000</h1>
            </div>
            <div className="border-t-[1px] mt-[33px] mobile:mt-[20px] border-solid border-[#272727]"></div>
            <div className="flex justify-between mt-[32px] mobile:mt-[9px]">
                <h1 className="text-base font-medium leading-6 text-black">Tổng</h1>
                <h1 className="text-xl leading-7 mobile:text-base mobile:leading-6 font-bold">1670000</h1>
            </div>
        </div>
    )
}

export default ProductTitle
