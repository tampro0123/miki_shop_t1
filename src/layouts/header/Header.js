import React from 'react'
import Link from 'next/link'
import { CaretDown , LogoIcon , SearchIcon , Favorite , CartIcon , UserIcon } from '../../components/Icons/icons.js'
export default function Header() {
  return (
    <header className='flex justify-between'>
        <div>
            <ul className = 'flex justify-between'>
                <li>
                    <Link href =''>
                        <a href =''>Trang chủ</a>
                    </Link>
                </li>
                <li className = 'flex items-center'>
                    <Link href =''>
                        <a href =''>Sản phẩm</a>
                    </Link>
                        <CaretDown />
                </li>
                <li>
                    <Link href =''>
                        <a href =''>Về chúng tôi</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className ='flex flex-col items-center'>
            <LogoIcon />
            <h1 className=''>Miki jewelry</h1>
        </div>
        <div className ="flex">
            <div className ="flex">
                <input type="text"/>
                <SearchIcon />
            </div>
            <Favorite />
            <CartIcon />
            <UserIcon />
        </div>
    </header>
  )
}
