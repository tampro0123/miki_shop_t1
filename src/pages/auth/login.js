// Import Library
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from "react"
// Import component, function, asset
import { LogoIcon } from 'src/components/icons';
import { LoginFormSection } from 'src/sections/auth';
import imgLogin from 'src/assets/Login/Login.jpg';
import CircleBgr from 'src/components/Circles';
import { useRecoilValue } from 'recoil'
import { dataUser } from 'src/recoils/dataUser'
import { useRouter } from 'next/router'
import Page from 'src/components/Page';
import Link from 'next/link';
const login = () => {
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
  const user = useRecoilValue(dataUser)
  const router = useRouter()
  const [loading, SetLoading] = useState(true)
  useEffect(() => {
    SetLoading(true)
    if (user?.role) {
      router.replace('/')
    }
    if (!user?.role) {
      SetLoading(false)
    }
  }, [])
  if (loading) {
    return <>Loading...</>;
  } else {
    return (
      <Page title="Login" isHeader={false}>
        <div className="app pt-[120px] mobile:pt-0">
          <div className="flex justify-center">
            <div className="flex w-[1136px] mobile:w-[375px] mobile:justify-center">
              {/* Image */}
              <Image height={"100%"} width={646} src={imgLogin} alt="imgRegister" className="rounded-l-16 mobile:hidden" />
              {/* Content */}
              <div className="w-[490px] bg-bgr-auth mobile:bg-transparent rounded-r-16">
                <div className="flex items-center flex-col mt-14 mobile:mt-10">
                  {/* Respondsive Logo */}
                  <Link href='/'>
                    <a className='flex flex-col items-center'>
                      <LogoIcon width={windowWidth <= 480 ? 17 : 40} height={windowWidth <= 480 ? 17 : 40} />
                      <h1 className="font-plf font-bold text-[40px] leading-[48px] mobile:text-[24px] mobile:leading-[32px]">MIKI JEWELRY</h1>
                    </a>
                  </Link>
                </div>
                {/* Form name */}
                <h3 className="text-xl leading-7 font-bold ml-10 mt-[72px] mobile:ml-[16px] mobile:text-base mobile:leading-4 mobile:mt-[26px]">Đăng nhập</h3>
                {/* Login form */}
                <LoginFormSection />
              </div>
            </div>
          </div>
          {/* Decoration background */}
          {windowWidth <= 480 ? (<CircleBgr
            CFull2={'scale-[0.25] left-[-85px] top-[-515px] '}
          />) : (<CircleBgr
            CFull1={'scale-[0.4] left-[-504px] top-[-600px] '}
            CFull2={'scale-[0.4] right-[-459px] top-[-442px] '}
            CFull3={'scale-[0.4] left-[-200px] bottom-[-622px] '}
            CDash3={'left-[-287px] bottom-[296px]'}
          />)}
        </div>
      </Page>
    );
  }
};

export default login;
