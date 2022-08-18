import React from 'react';
import { LogoMobileIcon, LogoIcon } from 'src/components/Icons';
import imgRegister from 'src/assets/Register/Register.jpg';
import { RegisterFormSection } from 'src/sections/auth';
import Image from 'next/image';
import Footer from 'src/layouts/Footer';
import CircleBgr from 'src/components/circles';
import { useEffect, useState } from 'react';

const Register = () => {
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
              <h3 className="text-base ml-4 leading-4 font-bold mt-[26px]">Đăng ký tài khoản</h3>
              <RegisterFormSection />
            </div>
          </div>
          <Footer />
          <CircleBgr CFull2={'scale-[0.25] left-[-104px] top-[-510px]'} />
        </div>
      ) : (
        <div className="app pt-[120px]">
          <div className="flex justify-center">
            <div className="flex w-[1136px] h-[852px] overflow-hidden">
              {/* Img */}
              <Image height={852} width={646} src={imgRegister} alt="imgRegister" className="rounded-l-16" />
              {/* Content */}
              <div className="w-[490px] bg-bgr-auth rounded-r-16">
                <div className="flex items-center flex-col mt-14">
                  <LogoIcon />
                  <h1 className="font-plf font-bold text-[40px] leading-[48px]">MIKI JEWELRY</h1>
                </div>
                <h3 className="text-xl leading-7 font-bold ml-10 mt-[72px]">Đăng ký tài khoản</h3>
                <RegisterFormSection />
              </div>
            </div>
          </div>
          <Footer />
          <CircleBgr
            CFull1={'scale-[0.4] left-[-504px] top-[-600px] '}
            CFull2={'scale-[0.4] right-[-459px] top-[-442px] '}
            CFull3={'scale-[0.4] left-[-200px] bottom-[-622px] '}
            CDash3={'left-[-287px] bottom-[296px]'}
          />
          {/* <CircleBgr
            CFull1={'scale-[0.4] left-[-0] top-[-600px] '}
            CFull2={'scale-[0.4] right-[-459px] top-[-442px] '}
            CFull3={'scale-[0.4] left-[-200px] bottom-[-622px] '}
            CDash3={'left-[-287px] bottom-[296px]'}
          /> */}
        </div>
      )}
    </div>
  );
};

export default Register;
