// Import Library
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
// Import component, function, asset
import { FormProviderBox, TextField } from 'src/components/hook-form';
import Button from 'src/components/Button';
import { FacebookColor, GoogleColor } from 'src/components/Icons';
export function ForgotPasswordFormSection() {
  // click button then disable
  const [disabled, setDisabled] = useState(false);
  // Data user
  const [messLog, setMessLog] = useState(null);
  // Create schema validate form
  const schema = yup.object().shape({
    email: yup
    .string()
    .required('Vui lòng nhập email')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email không tồn tại'
    ),
  });
  // Get method from react hook form
  const methods = useForm({
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;

  // Handle Submit
  const onSubmit = (data) => {
    if (data) {
      // Disable button
      setDisabled(!disabled)
      // Logic request
      const res = axios({
        method: 'POST',
        url: '/api/auth/forgot-password',
        data: {
          email: data.email,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })

      // handle success reset password
      .then(() => {
        // message 
        setMessLog('Vui lòng kiểm tra email của bạn!!!');
      })
      .catch(() => {
        setMessLog('Email này chưa được đăng kí. Hãy đang kí tài khoản !');
        setTimeout(() => {
          setMessLog(null);
        }, 3000);
      })
    }
  };

  // UI
  return (
    <div>
      {/* Form */}
      <FormProviderBox className={'px-10 mobile:mx-[16px] mt-[8px] mobile:px-0'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
        
        {/* Email*/}
        <TextField
          className="mb-4"
          name="email"
          styleInput="w-[410px] mobile:w-[355px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
          styleMessage="text-msgEr text-sm"
          placeholder="Nhập Email của bạn"
          type={"email"}
        />
        {/* Button Sign in */}
        <p className='h-4 mt-4 text-green-600 font-semibold'>
            {messLog}
        </p>
        <Button
          className="mt-[32px] w-full text-base"
          disabled={disabled} primary={!disabled}
          classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
        >
          Gửi
        </Button>
        <div className="flex mt-4 items-center">
          <h1 className="text-sm leading-[22px] mr-1">Bạn đã có tài khoản</h1>
          <Button to="/auth/login" text className="text-base leading-6 font-bold">
            Đăng nhập
          </Button>
        </div>
        <h1 className="text-sm mt-4">Hoặc đăng nhập bằng</h1>
        {/* Login with facebook or google */}
        <div className="mt-6 flex w-full justify-between">
          <Button href="https://m.facebook.com/login" outline className="mr-[7px] mobile:w-[168px] mobile:h-[56px] text-base leading-[24px] rounded-[40px]">
            <div className="flex items-center">
              <FacebookColor />
              <h1 className="ml-4">Facebook</h1>
            </div>
          </Button>
          <Button
            href="https://accounts.google.com/ServiceLogin?passive=1209600&continue=https://contacts.google.com/?hl%3Dvi&followup=https://contacts.google.com/?hl%3Dvi&hl=vi"
            outline
            className="mobile:w-[168px] mobile:h-[56px] text-base leading-[24px] rounded-[40px]"
          >
            <div className="flex items-center">
              <GoogleColor />
              <h1 className="ml-4">Google</h1>
            </div>
          </Button>
        </div>
        {/* Go to regiter page */}
        <div className="flex mt-4 items-center mb-[84px]">
          <h1 className="text-sm leading-[22px] mr-1">Bạn chưa có tài khoản</h1>
          <Button to="/auth/register" className="text-base text-price-text leading-6 font-bold">
            Đăng ký
          </Button>
        </div>
      </FormProviderBox>
    </div>
  );
}
