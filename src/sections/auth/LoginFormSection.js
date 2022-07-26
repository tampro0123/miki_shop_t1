import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { schema } from 'src/components/HookForm/schemaYup';
import {
  CheckBoxField,
  FormProviderBox,
  RadioField,
  SelectField,
  TextField,
  CheckBoxRulesField,
} from 'src/components/HookForm';
import Button from 'src/components/button';
import { FacebookColor, GoogleColor } from 'src/components/Icons';

export function LoginFormSection() {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValue: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { handleSubmit, reset, setFocus } = methods;

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setFocus('firstName');
  };

  const style = {
    smInput: 'w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid',
    lgInput: 'w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]',
    message: 'text-msgEr text-sm',
  };

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
        />
        <Button text className="text-sm leading-[22px] font-medium text-black">
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
          <Button outline className="mr-4">
            <div className="flex items-center">
              <FacebookColor />
              <h1 className="ml-4">Facebook</h1>
            </div>
          </Button>
          <Button outline>
            <div className="flex items-center">
              <GoogleColor />
              <h1 className="ml-4">Google</h1>
            </div>
          </Button>
        </div>
        <div className="flex mt-4 items-center mb-[84px]">
          <h1 className="text-sm leading-[22px] mr-1">Bạn chưa có tài khoản</h1>
          <Button text className="text-base leading-6 font-bold">
            Đăng ký
          </Button>
        </div>
      </FormProviderBox>
    </div>
  );
}
