import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormProviderBox, TextField } from 'src/components/hook-form';
import Button from 'src/components/button';
import { FacebookColor, GoogleColor } from 'src/components/icons';

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
    password: yup.string().trim().required('Vui lòng nhập mật khẩu').min(6, 'Nhập mật khẩu có ít nhất 6 kí tự'),
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

  // UI
  return (
    <div>
      <FormProviderBox className={'px-10'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="email"
          styleInput={style.lgInput}
          styleMessage={style.message}
          placeholder="Nhập email hoặc số điện thoại"
        />

        <TextField
          className="mb-4"
          name="password"
          styleInput={style.lgInput}
          styleMessage={style.message}
          placeholder="Nhập mật khẩu từ 6 đến 8 kí tự"
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
    </div>
  );
}
