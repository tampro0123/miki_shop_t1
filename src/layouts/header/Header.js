// Import Library
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from "react"
// Import component, function, asset
import { CaretDown, LogoIcon, SearchIcon, CartIcon, UserIcon } from 'src/components/Icons/icons.js';
import HeaderMobile from 'src/layouts/header/HeaderMobile';
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router';
import { dataUser } from 'src/recoils/dataUser.js'
import axios from 'axios';
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
    console.log(valueUser.id)
  }, [valueUser])
  function handleClick() {
    if (valueUser.id) {
      const data = axios({
        method: 'POST',
        url: '/api/auth/logout',
        data: {
          id: valueUser.id,
        },
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + valueUser.accessToken
        }
      })
        .then(value => {
          console.log(value)
          setValueUser({})
          return setTimeout(() => router.replace('/login'))
        })
        .catch(err => console.error(err))

    }
  }
  return (
    <header className="flex justify-center">
      {windowWidth <= 480 ? <HeaderMobile /> : <div className="flex justify-between w-[1136px] mobile:w-[375px] mobile py-[24px]">
        <div className="flex items-end">
          <ul className="flex justify-between gap-[42px]">
            <li className="py-[4px]">
              <Link href="/">
                <a className="text-16 hover:text-3rd-text duration-500 font-bold">Trang chủ</a>
              </Link>
            </li>
            <li className="flex items-center py-[4px] group static">
              <Link href="/">
                <a className="mr-2 text-16 hover:text-3rd-text duration-500 before:block before:absolute before:w-[90px] before:top-[110px] before:h-3">Sản phẩm</a>
              </Link>
              <CaretDown classNameIcon="cursor-pointer hover:scale-90 duration-300 peer" />
              <div className='hidden z-30 absolute group-hover:flex flex-col top-[114px] bg-white p-2 shadow-lg rounded-b-8 pr-3'>
                <Link href='/product?category=nhan&sort=+'>
                  <a className="hover:bg-Neutral/3 px-2 py-1">
                    Nhẫn
                  </a>
                </Link>
                <Link href='/product?category=lac-tay&sort=+'>
                  <a className="hover:bg-Neutral/3 px-2 py-1">
                    Lắc tay
                  </a>
                </Link>
                <Link href='/product?category=day-chuyen&sort=+'>
                  <a className="hover:bg-Neutral/3 px-2 py-1">
                    Dây chuyền
                  </a>
                </Link>
                <Link href='/product?category=bong-tai&sort=+'>
                  <a className="hover:bg-Neutral/3 px-2 py-1">
                    Bông tai
                  </a>
                </Link>
              </div>
            </li>
            <li className="py-[4px]">
              <Link href="/aboutus/brandandhistory">
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
