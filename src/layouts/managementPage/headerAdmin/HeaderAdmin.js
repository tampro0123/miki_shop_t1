import React from 'react'
import { SearchIcon, CaretDown } from 'src/components/Icons/index.js'
import Link from 'next/link'
export default function HeaderAdmin() {
    return (
        <div className="h-[113px] top-[20px] fixed w-full max-w-[1235px] z-10
         bg-white flex items-center rounded-8 justify-between shadow-md mx-[20px]
         before:content-['d'] before:text-bgr before:block before:w-full before:h-20px before:bg-bgr before:absolute 
         before:top-[-20px] before:z-10
         ">
            <div className="flex items-center h-[40px] border-[1px]
            border-primary-text bg-white px-[15px] rounded-8 ml-[30px]">
                <input placeholder="Tìm kiếm" type="text" className="h-[32px] text-[14px] px-[5px] border-0 outline-0 " />
                <SearchIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
            </div>
            <div className="flex items-center">
                <div className='max-w-[50px] '>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt='' className='w-full rounded-full' />
                </div>
                <div className='flex items-center  mr-[30px]'>
                    <Link href=''>
                        <p className='ml-[20px] mr-[10px] cursor-pointer'>The Shyn</p>
                    </Link>
                    <CaretDown classNameIcon="cursor-pointer hover:scale-90 duration-300" />
                </div>
            </div>
        </div>
    )
}
