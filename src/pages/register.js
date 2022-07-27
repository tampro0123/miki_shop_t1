import React from 'react';
import { Logo } from 'src/components/icons';
import imgRegister from 'src/assets/Register/Register.jpg';
import { RegisterFormSection } from 'src/sections/auth';
import Image from 'next/image';
import Header from 'src/layouts/Header';

const register = () => {
  return (
    <>
      {' '}
      <div className="flex justify-center">
        <div className="flex w-[1136px] h-[852px] overflow-hidden">
          {/* Img */}
          <Image height={852} width={646} src={imgRegister} alt="imgRegister" />
          {/* Content */}
          <div className="w-[490px] bg-bgr-auth">
            <div className="flex items-center flex-col mt-14">
              <Logo />
              <h1 className="font-plf font-bold text-[40px] leading-[48px]">MIKI JEWELRY</h1>
            </div>
            <h3 className="text-xl leading-7 font-bold ml-10 mt-[72px]">Đăng ký tài khoản</h3>
            <RegisterFormSection />
          </div>
        </div>
      </div>
      <Header />
    </>
  );
};

export default register;
