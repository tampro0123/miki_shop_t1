import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormProviderBox, TextField } from 'src/components/hook-form';
import Button from 'src/components/Button';
import { FacebookColor, GoogleColor } from 'src/components/icons';
import { useEffect, useState } from 'react';

export function LoginFormSection() {
  // create schema validate form
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
  // get method from react hook form
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit, reset } = methods;

  // Handle Submit
  const onSubmit = (data) => {
    if (data) {
      console.log(data);
      reset();
    }
  };

  // Style Input
  const style = {
    smInput: 'w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid',
    lgInput: 'w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]',
    message: 'text-msgEr text-sm',
  };

  const [windowWidth, setWindowWidth] = useState(undefined);
  // Get size window to respondsive
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

      return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    }
  }, []);

  // UI
  return (
    <div>
      {windowWidth <= 375 ? (
        <FormProviderBox className={'mx-4'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="email"
            styleInput="w-[343px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
            styleMessage="text-msgEr text-sm"
            placeholder="Nhập email hoặc số điện thoại"
          />

          <TextField
            className="mb-4"
            name="password"
            styleInput="w-[343px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
            styleMessage="text-msgEr text-sm"
            placeholder="Nhập mật khẩu ít nhất 8 kí tự"
            type="password"
          />

          <Button to="/forgot-password" text className="text-xs leading-[20px] font-medium text-[#000]">
            Quên mật khẩu?
          </Button>

          <Button
            className="mt-[32px] w-full text-base"
            primary
            classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
          >
            Đăng nhập
          </Button>

          <h1 className="text-sm mt-[32px]">Hoặc đăng nhập bằng</h1>

          <div className="mt-6 flex w-full">
            <Button href="https://m.facebook.com/login" outline className="mr-[9px] w-[168px] h-14">
              <div className="flex items-center">
                <FacebookColor />
                <h1 className="ml-4 text-base leading-6">Facebook</h1>
              </div>
            </Button>

            <Button
              href="https://accounts.google.com/ServiceLogin?passive=1209600&continue=https://contacts.google.com/?hl%3Dvi&followup=https://contacts.google.com/?hl%3Dvi&hl=vi"
              outline
              className="w-[168px] h-14"
            >
              <div className="flex items-center">
                <GoogleColor />
                <h1 className="ml-4 text-base leading-6">Google</h1>
              </div>
            </Button>
          </div>

          <div className="flex mt-4 items-center">
            <h1 className="text-sm leading-[22px] mr-1">Bạn chưa có tài khoản</h1>
            <Button to="/register" text className="text-base leading-6 font-bold">
              Đăng ký
            </Button>
          </div>
        </FormProviderBox>
      ) : (
        <FormProviderBox className={'px-10'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="email"
            styleInput="w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
            styleMessage="text-msgEr text-sm"
            placeholder="Nhập email hoặc số điện thoại"
          />

          <TextField
            className="mb-4"
            name="password"
            styleInput="w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
            styleMessage="text-msgEr text-sm"
            placeholder="Nhập mật khẩu ít nhất 8 kí tự"
            type="password"
          />

          <Button to="/forgot-password" text className="text-sm leading-[22px] font-medium text-black">
            Quên mật khẩu?
          </Button>

          <Button
            className="mt-[32px] w-full text-base"
            primary
            classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
          >
            Đăng nhập
          </Button>

          <h1 className="text-sm mt-[32px]">Hoặc đăng nhập bằng</h1>

          <div className="mt-6 flex w-full">
            <Button href="https://m.facebook.com/login" outline className="mr-4">
              <div className="flex items-center">
                <FacebookColor />
                <h1 className="ml-4">Facebook</h1>
              </div>
            </Button>

            <Button
              href="https://accounts.google.com/ServiceLogin?passive=1209600&continue=https://contacts.google.com/?hl%3Dvi&followup=https://contacts.google.com/?hl%3Dvi&hl=vi"
              outline
            >
              <div className="flex items-center">
                <GoogleColor />
                <h1 className="ml-4">Google</h1>
              </div>
            </Button>
          </div>

          <div className="flex mt-4 items-center mb-[84px]">
            <h1 className="text-sm leading-[22px] mr-1">Bạn chưa có tài khoản</h1>
            <Button to="/register" text className="text-base leading-6 font-bold">
              Đăng ký
            </Button>
          </div>
        </FormProviderBox>
      )}
    </div>
  );
}
