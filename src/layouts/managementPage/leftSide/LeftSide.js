import React, { useState } from 'react'
import { LogoIcon } from 'src/components/Icons/index.js'
import Link from 'next/link'
export default function LeftSide() {
    const [check, setCheck] = useState(false)
    return (
        <div className='max-w-[380px] shadow-md w-full py-[10px] h-full bg-white fixed left-0 top-0'>
            {/* fixed left-0 top-0 */}
            <div className="flex flex-col items-center border-b-[1px] border-solid border-primary-text pb-[10px]
        mx-[10px] ">
                <Link href="/">
                    <a>
                        <LogoIcon classNameIcon="cursor-pointer text-[2px] text-white" />
                    </a>
                </Link>
                <Link href="">
                    <h1 className="cursor-pointer font-plf text-[30px] font-bold mt-[12px] text-primary-text leading-10 text-center">
                        MIKI JEWELLRY
                    </h1>
                </Link>
            </div>
            <div className='mt-[60px] mx-[40px] '>
                <div className='mb-[25px] hover:translate-x-[10px] duration-500'>
                    <Link href="/admin">
                        <a className='text-[18px] text-[#625f6e] block p-[15px] ml-[20px]'>Dashboard</a>
                    </Link>

                </div>
                <div className='mb-[25px] hover:translate-x-[10px] duration-500'>
                    <Link href="/admin/managementProducts">
                        <a className='text-[18px] text-[#625f6e] block p-[15px] ml-[20px]'>Quản lý sản phẩm</a>
                    </Link>

                </div>
                <div className='mb-[25px] hover:translate-x-[10px] duration-500'>
                    <Link href="/admin/managementUsers">
                        <a className='text-[18px] text-[#625f6e] block p-[15px] ml-[20px]'>Quản lý user</a>
                    </Link>

                </div>
                <div className='mb-[25px] hover:translate-x-[10px] duration-500'>
                    <Link href="">
                        <a className='text-[18px] text-[#625f6e] block p-[15px] ml-[20px]'>Đặt hàng</a>
                    </Link>

                </div>
                <div className='mb-[25px] hover:translate-x-[10px] duration-500'>
                    <Link href="">
                        <a className='text-[18px] text-[#625f6e] block p-[15px] ml-[20px]'>Cài đặt</a>
                    </Link>
                </div>
                <div className='mt-[100px] group hover:translate-x-[10px] duration-500' onClick={() => setCheck(!check)}>
                    <Link href="">
                        <a className='text-[18px] text-[#625f6e] block p-[15px] ml-[20px]'>Đăng xuất</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
