// Import Library
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
// Import component, function, asset
import Button from 'src/components/Button';
import { FormProviderBox, TextField } from 'src/components/hook-form';

export function RegisterFormSection() {
  // Set data to request
  const router = useRouter();
  const [errMail, setErrMail] = useState(undefined);
  // Create schema validate form
  const schema = yup.object().shape({
    firstName: yup.string().required('Vui lòng nhập họ'),
    lastName: yup.string().required('Vui lòng nhập tên'),
    dateOfBirth: yup.string().required('Vui lòng nhập'),
    email: yup
      .string()
      .required('Vui lòng nhập email')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Email không tồn tại'
      ),
    password: yup.string().trim().required('Vui lòng nhập mật khẩu').min(8, 'Nhập mật khẩu từ 6 đến 8 kí tự'),
    confirmPassword: yup
      .string()
      .trim()
      .required('Vui lòng nhập lại mật khẩu')
      .oneOf([yup.ref('password'), null], 'Mật khẩu nhập lại không khớp'),
    check: yup.array().typeError('Bạn chưa đồng ý với điều khoản').min(1, 'Bạn chưa đồng ý với điều khoản'),
  });
  // Get method from react hook form
  const methods = useForm({
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValue: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = methods;

  // Handle Submit
  const onSubmit = (data) => {
    // Logic request
    if (data) {
      const res = axios({
        method: 'POST',
        url: '/api/auth/register',
        data: {
          username: `${data.firstName} ${data.lastName}`,
          email: data.email,
          birthday: data.dateOfBirth,
          password: data.password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(data);
      setTimeout(() => router.push('/login'), 3000);
      // Xử lí khi thành công
      res.then((data) => {
        setErrMail(undefined);
        setTimeout(() => router.push('/login'), 3000);
      });
      let mailErr;
      let messageErrMail;
      // Get error
      res.catch((value) => {
        mailErr = value?.response?.data?.errEmail;
        messageErrMail = value?.response?.data?.message;
        if (mailErr == false) {
          setErrMail(messageErrMail);
        }
        console.log(value);
      });
      reset();
    }
  };

  // UI
  return (
    <div>
      {/* Form */}
      <FormProviderBox className={'px-10 mobile:mx-[16px] mobile:px-0'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mt-[32px] justify-between">
          {/* FirstName */}
          <TextField
            name="firstName"
            styleInput="w-[129px] mobile:w-[113px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid"
            styleMessage="text-msgEr text-sm"
            placeholder="Họ"
          />
          {/* LastName */}
          <TextField
            name="lastName"
            styleInput="w-[129px] mobile:w-[113px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid"
            styleMessage="text-msgEr text-sm"
            placeholder="Tên"
          />
          {/* Date */}
          <TextField
            name="dateOfBirth"
            styleInput="w-[128px] mobile:w-[113px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid text-xs"
            styleMessage="text-msgEr text-sm"
            placeholder="DD/MM/YY"
            type="date"
          />
        </div>
        {/* Email */}
        <TextField
          name="email"
          styleInput="w-[410px] mobile:w-[355px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
          styleMessage="text-msgEr text-sm"
          placeholder="Nhập email hoặc số điện thoại"
        />
        {/* Password */}
        <TextField
          name="password"
          styleInput="w-[410px] mobile:w-[355px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
          styleMessage="text-msgEr text-sm"
          placeholder="Nhập mật khẩu ít nhất 8 kí tự"
          type="password"
        />
        {/* Confirm Password */}
        <TextField
          name="confirmPassword"
          styleInput="w-[410px] mobile:w-[355px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
          styleMessage="text-msgEr text-sm"
          placeholder="Xác thực lại mật khẩu"
          type="password"
        />
        {/* CheckBox get info */}
        <div className="mt-4 flex items-center">
          <div className="w-[37px]">
            <input
              className="cursor-pointer w-6 h-6 rounded-[4px] ml-1 mr-[9px]"
              type="checkbox"
              {...register('check')}
            />
          </div>
          <label className="mobile:font-mon mobile:text-base mobile:leading-6 mobile:font-medium" htmlFor="getEmail">Nhận thông tin khuyến mãi qua email</label>
        </div>
        {/* Checkbox agree terms */}
        <div className="mt-6 flex items-center">
          <div className="w-[37px]">
            <input
              className="cursor-pointer w-6 h-6 rounded-[4px] ml-1 mr-[9px]"
              type="checkbox"
              {...register('check')}
            />
          </div>
          <label className="mobile:font-mon mobile:text-base mobile:leading-6 mobile:font-medium">
            Tôi đã đọc và đồng ý với các{' '}
            <Button text to="/" className={'font-medium'}>
              điều khoản chính sách
            </Button>{' '}
            của Miki Jewelry
          </label>
        </div>
        <span className="text-msgEr text-sm">{errors['check']?.message}</span>
        {/* Button register */}
        <Button
          className="mt-[32px] w-full mobile:text-base mobile:leading-6 mobile:font-bold"
          primary
          classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
        >
          Đăng ký
        </Button>
        {/* Go to regiter page */}
        <div className="flex mt-4 items-center mb-[84px]">
          <h1 className="text-sm leading-[22px] mr-1">Bạn đã có tài khoản</h1>
          <Button to="/login" text className="text-base leading-6 font-bold">
            Đăng nhập
          </Button>
        </div>
      </FormProviderBox >
    </div >
  );
}