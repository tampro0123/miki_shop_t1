import React from 'react';
import Link from 'next/link';
import { CaretDown, LogoIcon, SearchIcon, Favorite, CartIcon, UserIcon } from 'src/components/Icons/icons.js';
export default function Header() {
  return (
    <header className="flex justify-between py-[24px] px-[152px]">
      <div className="flex items-end">
        <ul className="flex justify-between gap-[42px]">
          <li className="py-[4px]">
            <Link href="/">
              <a className="text-16 hover:text-3rd-text duration-500 font-bold">Trang chủ</a>
            </Link>
          </li>
          <li className="flex items-center py-[4px]">
            <Link href="/">
              <a className="mr-2 text-16 hover:text-3rd-text duration-500">Sản phẩm</a>
            </Link>

            <CaretDown classNameIcon="cursor-pointer hover:scale-90 duration-300" />
          </li>
          <li className="py-[4px]">
            <Link href="/">
              <a className="text-16 hover:text-3rd-text duration-500">Về chúng tôi</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <Link href="/" passHref>
          <a>
            <LogoIcon classNameIcon="cursor-pointer" />{' '}
          </a>
        </Link>
        <Link href="/" passHref>
          <h1 className="cursor-pointer font-plf text-[40px] font-bold mt-[12px] text-primary-text leading-10 text-center">
            MIKI JEWELLRY
          </h1>
        </Link>
      </div>
      <div className="flex gap-[25px] items-end">
        <div className="flex items-center h-[40px] border-[1px] border-primary-text bg-white px-[15px] rounded-8">
          <input placeholder="Tìm kiếm" type="text" className="h-[32px] text-[14px] px-[5px] border-0 outline-0 " />
          <SearchIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
        </div>
        <Link href="/" passHref>
          <a>
            <Favorite classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
          </a>
        </Link>
        <Link href="/" passHref>
          <a>
            <CartIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
          </a>
        </Link>
        <Link href="/" passHref>
          <a>
            <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
          </a>
        </Link>
      </div>
    </header>
  );
}
