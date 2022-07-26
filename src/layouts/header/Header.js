import React from 'react'
import Link from 'next/link'
import { CaretDown , LogoIcon , SearchIcon , Favorite , CartIcon , UserIcon } from '../../components/Icons/icons.js'
export default function Header() {
  return (
    <header className='flex justify-between py-[24px] px-[152px] bg-bgr'>
        <div>
            <ul className = 'flex justify-between gap-[48px]'>
                <li>
                    <Link href =''>
                        <a href ='' className ='text-16'>Trang chủ</a>
                    </Link>
                </li>
                <li className = 'flex items-center'>
                    <Link href =''>
                        <a href ='' className ='mr-2 text-16'>Sản phẩm</a>
                    </Link>
                    <Link href =''>
                        <CaretDown /> 
                    </Link>
                </li>
                <li>
                    <Link href =''>
                        <a href ='' className ='text-16'>Về chúng tôi</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className ='flex flex-col items-center grow'>
            <Link href =''>        
                <LogoIcon />
            </Link>
            <h1 className='font-plf text-[40px] font-bold mt-[12px] text-primary-text leading-10 text-center'>MIKI JEWELRY</h1>
        </div>
        <div className ="flex gap-[30px]">
            <div className ="flex items-center h-[40px] border-[1px] border-primary-text bg-white px-[15px] rounded-8">
                <input placeholder="Tìm kiếm" type="text" className="h-[32px] text-[14px] px-[5px] border-0 outline-0 "/> 
                <SearchIcon />
            </div>
            <Link href =''>
                <Favorite />
            </Link>
            <Link href =''>
                <CartIcon />   
            </Link>
            <Link href =''>
                <UserIcon />
            </Link>
        </div>
    </header>
  )
}
