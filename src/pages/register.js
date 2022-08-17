import React from 'react';
import { LogoIcon } from 'src/components/Icons';
import imgRegister from 'src/assets/Register/Register.jpg';
import { RegisterFormSection } from 'src/sections/auth';
import Image from 'next/image';
import Footer from 'src/layouts/Footer';
import CircleBgr from 'src/components/circles';

const Register = () => {
  return (
    <div className='app pt-[120px]'>
      {' '}
      <div className="flex justify-center">
        <div className="flex w-[1136px] h-[852px] overflow-hidden">
          {/* Img */}
          <Image height={852} width={646} src={imgRegister} alt="imgRegister" className='rounded-l-16'/>
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
    </div>
    
  );
};

export default Register;
