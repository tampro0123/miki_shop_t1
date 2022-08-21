// Import Library
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from "react"
// Import component, function, asset
import { CaretDown, LogoIcon, SearchIcon, CartIcon, UserIcon } from 'src/components/Icons/icons.js';
import HeaderMobile from 'src/layouts/header/HeaderMobile';
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router';
import dataUser from 'src/recoils/dataUser.js'
export default function Header() {
  const router = useRouter()
  const [idUser, setIdUser] = useState('')
  const [valueUser, setValueUser] = useRecoilState(dataUser)
  // Set width window when resize
  const [windowWidth, setWindowWidth] = useState(undefined);
  // Get size window to respondsive
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

      return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    }
  }, []);
  useEffect(() => {
    setIdUser(valueUser.id)
  }, [valueUser])
  function handleClick() {
    if (valueUser.id) {
      const data = axios({
        method: 'POST',
        url: '/api/auth/logout',
        data: {
          id: valueUser.id,
        }
      })
        .then(value => {
          console.log(value)
          setValueUser({})
          return setTimeout(() => router.replace('/login'), 2000)
        })
        .catch(err => console.error(err))

    }
  }
  return (
    <header className="flex justify-center">
      {windowWidth <= 480 ? <HeaderMobile /> : <div className="flex justify-between overflow-hidden w-[1136px] mobile:w-[375px] py-[24px]">
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
              MIKI JEWELRY
            </h1>
          </Link>
        </div>
        <div className="flex gap-[25px] items-end">
          <div className="flex items-center h-[40px] border-[1px] border-primary-text bg-white px-[15px] rounded-8">
            <input placeholder="Tìm kiếm" type="text" className="h-[32px] text-[14px] px-[5px] border-0 outline-0" />
            <SearchIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
          </div>
          <Link href="/">
            <a className="py-[4px]">
              <CartIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
            </a>
          </Link>
          <Link href={idUser ? '/' : '/login'}>
            <a className="py-[4px] relative group">
              <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
              {idUser ?
                <div className="absolute z-20 
             max-w-[900px] w-[200px]
              bg-bgr left-[-20px] top-full hidden transition-500 group-hover:block">
                  <ul className=" w-full p-[21px] text-[16px] flex flex-col gap-y-[20px]">
                    <li className="text-16 hover:text-3rd-text duration-500">Thông tin</li>
                    <li className="text-16 hover:text-3rd-text duration-500">Giỏ hàng của bạn</li>
                    <li className="text-16 hover:text-3rd-text duration-500"
                      onClick={() => handleClick()}
                    >Đăng xuất</li>
                  </ul>
                </div>
                :
                ''
              }
            </a>
          </Link>
        </div>
      </div>}

    </header>
  );
}
