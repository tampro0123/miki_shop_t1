import { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProviderBox, TextField, RadioField } from 'src/components/hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'src/components/Button';
import { dataUser } from 'src/recoils/dataUser';
export default function ChangePass() {
    const [loading, setLoading] = useState(true)
    const schema = yup.object().shape({
        oldPassword: yup.string().required('Vui lòng nhập mật khẩu'),
        newPassword: yup.string().required('Vui lòng nhập mật khẩu'),
        conFirmPass: yup.string().oneOf([yup.ref('newPassword'), null], 'Mật khẩu không khớp')
    });
    const methods = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onBlur',
    });
    const { handleSubmit, reset } = methods;
    const style = {
        smInput: 'w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid',
        lgInput: 'w-full text-[rgba(0,0,0,0.6)] h-12 bg-[#fff] p-3 rounded-lg border-solid border-[#ccc] border-[1px]',
        message: 'text-msgEr text-sm',
        label: ' text-[rgba(0,0,0,0.6)] block pl-[8px] mb-[8px]',
    };
    const onSubmit = (data) => {
        console.log(data)
    }
    useEffect(() => {
        setLoading(false)
    }, [])
    if (loading) <h1>Loading....</h1>
    return (
        <FormProviderBox className="px-10 max-full mt-[20px]" methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-[40px] w-full">
                <TextField
                    styleInput={style.lgInput}
                    className="flex flex-col mb-6"
                    styleLabel={style.label}
                    label={'Mật khẩu cũ: '}
                    name="oldPassword"
                    type="password"
                    styleMessage={style.message}
                    placeholder="Mật khẩu cũ..."
                />
                <TextField
                    styleInput={style.lgInput}
                    className="flex flex-col mb-6"
                    styleLabel={style.label}
                    styleMessage={style.message}
                    label={'Mật khẩu mới : '}
                    name="newPassword"
                    type="password"
                    placeholder="Mật khẩu mới..."

                />
            </div>
            <TextField
                styleInput={style.lgInput}
                className="flex flex-col mb-6"
                styleLabel={style.label}
                styleMessage={style.message}
                label={'Xác nhận mật khẩu : '}
                name="conFirmPass"
                type="password"
                placeholder="Nhập lại mật khẩu..."

            />

            <Button
                primary
                className="mt-[32px] max-w-[300px] mx-[auto] bg-gradient-to-t duration-500 from-[#ffe1d1] to-[#ffd1b9] text-2nd-text"
                classHover="hover:shadow-shadow-btn"
            >
                Đổi mật khẩu
            </Button>
        </FormProviderBox>
    )
}

