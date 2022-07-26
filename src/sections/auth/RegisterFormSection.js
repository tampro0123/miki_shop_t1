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

export function RegisterFormSection() {
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
    smInputGap: 'w-[129px] mr-3 h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid',
    smInput: 'w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid',
    lgInput: 'w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]',
    checkbox: 'cursor-pointer w-6 h-6 rounded-[4px] ml-1 mr-[9px]',
    message: 'text-msgEr text-sm',
  };

  return (
    <div>
      <FormProviderBox className={'px-10'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-[32px] flex">
          <TextField name="firstName" styleInput={style.smInputGap} styleMessage={style.message} placeholder="Họ" />
          <TextField name="lastName" styleInput={style.smInputGap} styleMessage={style.message} placeholder="Tên" />
          <TextField
            name="dateOfBirth"
            styleInput={style.smInput}
            styleMessage={style.message}
            placeholder="DD/MM/YY"
          />
        </div>
        <TextField
          name="email"
          styleInput={style.lgInput}
          styleMessage={style.message}
          placeholder="Nhập email hoặc số điện thoại"
        />
        <TextField
          name="password"
          styleInput={style.lgInput}
          styleMessage={style.message}
          placeholder="Nhập mật khẩu từ 6 đến 8 kí tự"
        />
        <TextField
          name="confirmPassword"
          styleInput={style.lgInput}
          styleMessage={style.message}
          placeholder="Xác thực lại mật khẩu"
        />
        <CheckBoxField
          className="mt-4"
          name="getInfoEmail"
          styleInput={style.checkbox}
          styleLabelItem={'text-base leading-6'}
          styleMessage={style.message}
          options={['Nhận thông tin khuyến mãi qua email']}
        />
        <CheckBoxRulesField
          className="mt-7"
          name="checkRules"
          styleInput={style.checkbox}
          styleLabelItem={'text-base leading-6 text-black'}
          styleMessage={style.message}
        />
        <Button
          className="mt-[32px] w-full "
          primary
          classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
        >
          Đăng ký
        </Button>
        <div className="flex mt-4 items-center mb-[84px]">
          <h1 className="text-sm leading-[22px] mr-1">Bạn đã có tài khoản</h1>
          <Button text className="text-base leading-6 font-bold">
            Đăng nhập
          </Button>
        </div>
      </FormProviderBox>
    </div>
  );
}
