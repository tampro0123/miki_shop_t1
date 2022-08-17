import React from 'react'
import {LogoIcon } from 'src/components/Icons/index.js'
import Link from 'next/link'
export default function LeftSide() {
  return (
    <div className ='max-w-[420px] w-full py-[10px] h-full bg-white fixed left-0 top-0'>
        {/* fixed left-0 top-0 */}
        <div className="flex flex-col items-center border-b-[1px] border-solid border-primary-text pb-[10px]
        mx-[10px] ">
            <Link href="/">
            <a>
                <LogoIcon classNameIcon="cursor-pointer text-[2px] text-white" />
            </a>
            </Link>
            <Link href="/">
            <h1 className="cursor-pointer font-plf text-[30px] font-bold mt-[12px] text-primary-text leading-10 text-center">
                MIKI JEWELLRY
            </h1>
            </Link>
        </div>
        <div className ='mt-[60px] mx-[40px] '>
            <div className ='mb-[40px] bg-[#B78D71] rounded-8 '>
                <Link href="">
                    <a className ='text-[20px] text-white block p-[15px] ml-[40px]'>Dashboard</a>
                </Link>

            </div>
            <div className ='mb-[40px] bg-[#B78D71] rounded-8'>
                <Link href="/managementProducts">
                    <a className ='text-[20px] text-white block p-[15px] ml-[40px]'>Quản lý sản phẩm</a>
                </Link>

            </div>
            <div className ='mb-[40px] bg-[#B78D71] rounded-8'>
                <Link href="">
                    <a className ='text-[20px] text-white block p-[15px] ml-[40px]'>Quản lý user</a>
                </Link>

            </div>
            <div className ='mb-[40px] bg-[#B78D71] rounded-8'>
                <Link href="">
                    <a className ='text-[20px] text-white block p-[15px] ml-[40px]'>Đặt hàng</a>
                </Link>

            </div>
            <div className ='mb-[40px] bg-[#B78D71] rounded-8'>
                <Link href="">
                    <a className ='text-[20px] text-white block p-[15px] ml-[40px]'>Cài đặt</a>
                </Link>
            </div>
            <div className ='mt-[100px] bg-[#B78D71] rounded-8'>
                <Link href="">
                    <a className ='text-[20px] text-white block p-[15px] ml-[40px]'>Đăng xuất</a>
                </Link>
            </div>
        </div>
    </div>
  )
}
