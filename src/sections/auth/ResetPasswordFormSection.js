// Import Library
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
// Import component, function, asset
import { FormProviderBox, TextField } from 'src/components/hook-form';
import Button from 'src/components/Button';
export function ResetPasswordFormSection() {
  // click button then disable
  const [disabled, setDisabled] = useState(false);
  const [messLog, setMessLog] = useState(null);
  const router = useRouter();
  const {token} = router.query
  // Create schema validate form
  const schema = yup.object().shape({
    password: yup.string().trim().required('Vui lòng nhập mật khẩu').min(8, 'Nhập mật khẩu từ 8'),
    confirmPassword: yup
      .string()
      .trim()
      .required('Vui lòng nhập lại mật khẩu')
      .oneOf([yup.ref('password'), null], 'Mật khẩu nhập lại không khớp'),
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
        url: `/api/auth/reset-password?token=${token}`,
        data: {
          password: data.password,
          
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })

      // handle success reset password
      .then(() => {
        // message successfully
        setMessLog('Bạn đã đổi mật khẩu thành công !!!')
        setTimeout(() => {
          setMessLog(null)
          router.push('/auth/login')
        }, 3000);
        // setTimeout to login 
      })
      .catch(() => {
        // message failed
        setMessLog('Đã có lỗi xảy ra vui lòng thử lại !!!')
        setTimeout(() => {
          setMessLog(null)
          setDisabled(false)
        }, 3000);
      })
    }
  };

  // UI
  return (
    <div>
      {/* Form */}
      <FormProviderBox className={'px-10 mobile:mx-[16px] mt-[8px] mobile:px-0'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {/* Password */}
        <TextField
          name="password"
          styleInput="w-[410px] mobile:w-[355px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
          styleMessage="text-msgEr text-sm"
          placeholder="Nhập mật khẩu mới"
          type={"password"}
        />
        {/*Confirm Password */}
        <TextField
          className="mb-4"
          name="confirmPassword"
          styleInput="w-[410px] mobile:w-[355px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
          styleMessage="text-msgEr text-sm"
          placeholder="Nhập lại mật khẩu"
          type={"password"}
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
          Xác Nhận
        </Button>
      </FormProviderBox>
    </div>
  );
}
