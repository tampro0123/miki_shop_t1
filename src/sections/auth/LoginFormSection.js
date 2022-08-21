// Import Library
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
// Import component, function, asset
import { FormProviderBox, TextField } from 'src/components/hook-form';
import Button from 'src/components/Button';
import { FacebookColor, GoogleColor } from 'src/components/icons';

export function LoginFormSection() {
  const router = useRouter();
  // Set data to request
  const [errUserName, setErrUserName] = useState(undefined);
  const [errPassword, setErrPassword] = useState(undefined);
  // Create schema validate form
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Vui lòng nhập email')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Email không tồn tại'
      ),
    password: yup.string().trim().required('Vui lòng nhập mật khẩu').min(8, 'Nhập mật khẩu có ít nhất 8 kí tự'),
  });
  // Get method from react hook form
  const methods = useForm({
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const { handleSubmit, reset } = methods;

  // Handle Submit
  const onSubmit = (data) => {
    if (data) {
      // Logic request
      const res = axios({
        method: 'POST',
        url: '/api/auth/login',
        data: {
          email: data.email,
          password: data.password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Xử lý logic khi đăng nhập thành công hoặc thất bại nha
      res.then((value) => {
        setErrUserName(undefined);
        setErrPassword(undefined);
        return setTimeout(() => router.push('/'), 2000);
      });
      // Get error
      res.catch((value) => {
        let checkUserName = value?.response?.data?.userNameSucc;
        let checkPassword = value?.response?.data?.passwordSucc;
        if (checkUserName == false) {
          setErrUserName(value?.response?.data?.message);
        } else {
          setErrUserName(undefined);
        }
        if (checkPassword == false) {
          setErrPassword(value?.response?.data?.message);
        } else {
          setErrPassword(undefined);
        }
      });
      reset();
    }
  };

  // UI
  return (
    <div>
      {/* Form */}
      <FormProviderBox className={'px-10 mobile:mx-[16px] mt-[8px] mobile:px-0'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <TextField
          name="email"
          styleInput="w-[410px] mobile:w-[355px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
          styleMessage="text-msgEr text-sm"
          placeholder="Nhập email hoặc số điện thoại"
          userNameErr={errUserName}
        />
        {/* Password */}
        <TextField
          className="mb-4"
          name="password"
          styleInput="w-[410px] mobile:w-[355px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
          styleMessage="text-msgEr text-sm"
          placeholder="Nhập mật khẩu ít nhất 8 kí tự"
          type="password"
          passwordErr={errPassword}
        />
        {/* Button forgot password */}
        <Button to="/forgot-password" text className="text-sm leading-[22px] font-medium text-black">
          Quên mật khẩu?
        </Button>
        {/* Button Sign in */}
        <Button
          className="mt-[32px] w-full text-base"
          primary
          classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
        >
          Đăng nhập
        </Button>
        <h1 className="text-sm mt-[32px]">Hoặc đăng nhập bằng</h1>
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
          <Button to="/register" text className="text-base leading-6 font-bold">
            Đăng ký
          </Button>
        </div>
      </FormProviderBox>
    </div>
  );
}
