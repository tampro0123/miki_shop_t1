import React from 'react';
import { LogoIcon } from 'src/components/icons';
import imgLogin from 'src/assets/Login/Login.jpg';
import { LoginFormSection } from 'src/sections/auth';
import Image from 'next/image';
import Footer from 'src/layouts/footer';
import CircleBgr from 'src/components/circles';

const login = () => {
  return (
    <div className="app pt-[120px]">
      <div className="flex justify-center">
        <div className="flex w-[1136px] h-[852px] overflow-hidden">
          {/* Img */}
          <Image height={852} width={646} src={imgLogin} alt="imgLogin" className='rounded-l-16'/>
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
      <Footer/>
      <CircleBgr
      CFull1={'scale-50 top-[-169px] left-[-518px] '}
      CFull2={'scale-50 top-[-564px] left-[405px] '}
      CFull3={'scale-50 bottom-[-651px] left-[691px] '}
      CDash3={'bottom-[-238px] left-[-252px] '}
      />
    </div>
  );
};

export default login;
