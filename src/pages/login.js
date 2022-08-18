import React from 'react';
import { LogoIcon, LogoMobileIcon } from 'src/components/icons';
import imgLogin from 'src/assets/Login/Login.jpg';
import { LoginFormSection } from 'src/sections/auth';
import Image from 'next/image';
import Footer from 'src/layouts/footer';
import CircleBgr from 'src/components/circles';
import { useEffect, useState } from 'react';

const login = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);
  // Get size window to respondsive
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

      return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    }
  }, []);
  return (
    <div>
      {windowWidth <= 375 ? (
        <div className="app">
          <div className="flex justify-center">
            {/* Content */}
            <div className="w-[375px] rounded-r-16">
              <div className="flex items-center flex-col mt-10">
                <LogoMobileIcon />
                <h1 className="font-plf font-bold text-[24px] leading-[32px]">MIKI JEWELRY</h1>
              </div>
              <h3 className="text-base ml-4 leading-4 font-bold mt-[26px]">Đăng nhập</h3>
              <LoginFormSection />
            </div>
          </div>
          <Footer />
          <CircleBgr CFull2={'scale-[0.25] left-[-104px] top-[-510px] '} />
        </div>
      ) : (
        <div className="app pt-[120px]">
          <div className="flex justify-center">
            <div className="flex w-[1136px] h-[852px] overflow-hidden">
              {/* Img */}
              <Image height={852} width={646} src={imgLogin} alt="imgLogin" className="rounded-l-16" />
              {/* Content */}
              <div className="w-[490px] bg-bgr-auth rounded-r-16">
                <div className="flex items-center flex-col mt-14">
                  <LogoIcon />
                  <h1 className="font-plf font-bold text-[40px] leading-[48px]">MIKI JEWELRY</h1>
                </div>
                <h3 className="text-xl leading-7 font-bold ml-10 mt-[72px]">Đăng nhập</h3>
                <LoginFormSection />
              </div>
            </div>
          </div>
          <Footer />
          <CircleBgr
            CFull1={'scale-50 top-[-169px] left-[-518px] '}
            CFull2={'scale-50 top-[-564px] left-[405px] '}
            CFull3={'scale-50 bottom-[-651px] left-[691px] '}
            CDash3={'bottom-[-238px] left-[-252px] '}
          />
        </div>
      )}
    </div>
  );
};

export default login;
