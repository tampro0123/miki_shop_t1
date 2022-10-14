// Import Library
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import Image from 'next/image';
// Import component, function, asset
import {
  CaretDown,
  LogoIcon,
  CartIcon,
  UserIcon,
  Logout,
  History,
  Dashboard,
  Bell,
} from 'src/components/Icons/icons.js';
import HeaderMobile from 'src/layouts/header/HeaderMobile';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { cartState } from 'src/recoils/cartState';
import { dataUser } from 'src/recoils/dataUser.js';
import Search from 'src/components/Search/Search';
import axiosAuth from 'src/utils/axios';
import useLocalStorage from 'src/hooks/useLocalStorage';
export default function Header() {
  const router = useRouter();
  const user = useLocalStorage('recoil-persist', 'userState');
  const [valueUser, setValueUser] = useRecoilState(dataUser);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [quantityProduct, setQuantityProduct] = useState({});
  // Set width window when resize
  const [valueCart, setValueCart] = useRecoilState(cartState);
  useEffect(() => {
    setQuantityProduct(valueCart);
  }, [valueCart]);
  const [windowWidth, setWindowWidth] = useState(undefined);
  // Get size window to respondsive
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setValueUser(user);
    setLoading(false);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
      return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    }
  }, []);
  const navRef = useRef(null);
  const onBlur = (e) => {
    if (active && !navRef.current.contains(e.target)) {
      setActive((prev) => !prev);
    }
  };
  useEffect(() => {
    document.addEventListener('click', onBlur);
    return () => {
      document.removeEventListener('click', onBlur);
    };
  }, [onBlur, active]);
  function handleClick() {
    if (valueUser.id) {
      const data = axiosAuth({
        method: 'POST',
        url: '/api/auth/logout',
        data: {
          id: valueUser.id,
        },
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer ' + valueUser.accessToken,
          withCredentials: true,
        },
      })
        .then((value) => {
          setValueUser({});
          setValueCart([]);
          return router.replace('/auth/login');
        })
        .catch((err) => console.error(err));
    }
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (loading) <h1>Loading....</h1>;
  return (
    <header className="flex justify-center">
      {windowWidth <= 480 ? (
        <HeaderMobile />
      ) : (
        <div className="flex justify-between w-[1136px] mobile:w-[375px] py-[24px]">
          <div className="flex items-end">
            <ul className="flex justify-between gap-[42px]">
              <li className="py-[4px]">
                <Link href="/">
                  <a className="text-16 hover:text-3rd-text duration-500 font-bold">Trang chủ</a>
                </Link>
              </li>
              <li className="py-[4px]">
                <Tippy
                  interactive
                  placement={'bottom'}
                  render={(attrs) => (
                    <div className="flex flex-col bg-white rounded-[4px] overflow-hidden p-2 shadow-sm" tabIndex="-1" {...attrs}>
                      <Link href="/product?category=nhan&sort=+&order=+">
                        <a className="hover:bg-Neutral/3 px-2 py-1">Nhẫn</a>
                      </Link>
                      <Link href="/product?category=lac-tay&sort=+&order=+">
                        <a className="hover:bg-Neutral/3 px-2 py-1">Lắc tay</a>
                      </Link>
                      <Link href="/product?category=day-chuyen&sort=+&order=+">
                        <a className="hover:bg-Neutral/3 px-2 py-1">Dây chuyền</a>
                      </Link>
                      <Link href="/product?category=bong-tai&sort=+&order=+">
                        <a className="hover:bg-Neutral/3 px-2 py-1">Bông tai</a>
                      </Link>
                    </div>
                  )}
                >
                  <div className="flex items-center">
                    <Link href="/product/allProduct">
                      <a className="mr-2 text-16 hover:text-3rd-text duration-500">
                        Sản phẩm
                      </a>
                    </Link>
                    <CaretDown classNameIcon="cursor-pointer" />
                  </div>
                </Tippy>
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
              <Search />
            </div>
            <Link href="/cart">
              <a className="py-[4px] relative">
                <CartIcon classNameIcon=" cursor-pointer hover:scale-90 duration-300 " />
                {quantityProduct.length > 0 ? (
                  <div className="bottom-[-16%] left-[61%] absolute w-full bg-[red] max-w-[25px] flex justify-center items-center rounded-[50%]">
                    <p className="text-white">{quantityProduct.length}</p>
                  </div>
                ) : (
                  ''
                )}
              </a>
            </Link>

            {/* <Link href={valueUser?.id ? '' : 'auth/login'}> */}
            <div
              className="py-[4px] relative flex items-center group"
              onClick={() => {
                !valueUser &&
                  router.push({
                    ...router,
                    pathname: '/auth/login',
                  });
                setActive((prev) => !prev);
              }}
              ref={navRef}
            >
              {valueUser?.avatar ? (
                <Image width="30px" height="30px" className="rounded-[50%] " objectFit="cover" src={valueUser.avatar} />
              ) : (
                <UserIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
              )}
              {valueUser?.id ? (
                <div
                  className={
                    active
                      ? 'absolute z-20  max-w-[900px] w-[250px] bg-bgr right-[-30px] top-[50px] block shadow-xl rounded-8 transition-500'
                      : 'hidden'
                  }
                >
                  <ul className=" w-full p-[21px] text-[16px] flex flex-col gap-y-[20px]">
                    <li className="text-16 font-bold hover:text-3rd-text duration-500 ">
                      <Link href="/profile">
                        <a className="flex gap-[5px] items-center">
                          <UserIcon classNameIcon="w-[25px] " />
                          <span>Thông tin cá nhân</span>
                        </a>
                      </Link>
                    </li>
                    <li className="text-16 font-bold hover:text-3rd-text duration-500 flex gap-[5px] items-center">
                      <Bell iconClass="w-[25px]" />
                      Thông báo
                    </li>
                    <li className="text-16 font-bold hover:text-3rd-text duration-500 flex gap-[5px] items-center">
                      <History iconClass="w-[25px]" />
                      Lịch sử mua hàng
                    </li>
                    {valueUser.role == 'admin' ? (
                      <li
                        className="text-16 font-bold hover:text-3rd-text duration-500 flex gap-[5px] items-center"
                        onClick={() => router.push('/admin')}
                      >
                        <Dashboard iconClass="w-[25px]" />
                        Quản lí
                      </li>
                    ) : (
                      ''
                    )}
                    <li
                      className="text-16 font-bold hover:text-3rd-text duration-500 flex gap-[5px] items-center"
                      onClick={() => handleClick()}
                    >
                      <Logout iconClass="w-[25px]" />
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              ) : (
                ''
              )}
            </div>
            {/* </Link> */}
          </div>
        </div>
      )}
    </header>
  );
}
