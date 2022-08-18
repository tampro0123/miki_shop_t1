import React from 'react';
import { LogoIcon, LogoMobileIcon } from 'src/components/icons';
import imgLogin from 'src/assets/Login/Login.jpg';
import { LoginFormSection } from 'src/sections/auth';
import Image from 'next/image';
import Footer from 'src/layouts/footer';
import CircleBgr from 'src/components/circles';

const login = () => {

  return (
    <div>
      <div className="app pt-[120px] mobile:pt-0">
        <div className="flex justify-center">
          <div className="flex w-[1136px] mobile:w-[375px] mobile:justify-center">
            {/* Img */}
            <Image width={646} src={imgLogin} alt="imgRegister" className="rounded-l-16 mobile:hidden" />
            {/* Content */}
            <div className="w-[490px] bg-bgr-auth mobile:bg-transparent rounded-r-16">
              <div className="flex items-center flex-col mt-14 mobile:mt-10">
                <LogoIcon />
                <h1 className="font-plf font-bold text-[40px] leading-[48px] mobile:text-[24px] mobile:leading-[32px]">MIKI JEWELRY</h1>
              </div>
              <h3 className="text-xl leading-7 font-bold ml-10 mt-[72px] mobile:ml-[16px] mobile:text-base mobile:leading-4 mobile:mt-[26px]">Đăng nhập</h3>
              <LoginFormSection />
            </div>
          </div>
        </div >
        <Footer />
        <CircleBgr
          CFull1={'scale-[0.4] left-[-504px] top-[-600px] '}
          CFull2={'scale-[0.4] right-[-459px] top-[-442px] '}
          CFull3={'scale-[0.4] left-[-200px] bottom-[-622px] '}
          CDash3={'left-[-287px] bottom-[296px]'}
        />
      </div >
    </div >
  );
};

export default login;
