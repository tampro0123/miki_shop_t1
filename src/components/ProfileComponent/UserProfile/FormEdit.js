import { useState, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProviderBox, TextField, RadioField } from 'src/components/hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'src/components/Button';
import { useRecoilState } from 'recoil';
import { dataUser } from 'src/recoils/dataUser';
import axiosAuth from 'src/utils/axios';
import Loading from 'src/components/Loading';
export default function FormEdit({ avatar }) {
    const [inforUser, setInforUser] = useRecoilState(dataUser)
    console.log(inforUser)
    const [loading, setLoading] = useState(true)
    const genderRadio = ['Khác', 'Nam', 'Nữ']
    const schema = yup.object().shape({
        username: yup.string().required('Nhập tên người dùng'),
        phoneNumber: yup.string()
            .required('Vui lòng nhập số điện thoại')
            .matches(
                /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                'Nhập đúng số điện thoại'
            ),
        // 
        gender: yup.string().nullable().required("Vui lòng chọn giới tính")
    });
    const methods = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onBlur',
        defaultValues: {
            username: inforUser.userName,
            emailUser: inforUser.email,
            birthday: inforUser?.birthday,
            phoneNumber: inforUser?.phoneNumber,
            gender: inforUser?.gender
        }
    });
    const { handleSubmit, reset } = methods;
    const style = {
        smInput: 'w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid',
        lgInput: 'w-full text-[rgba(0,0,0,0.6)] h-12 bg-[#fff] p-3 rounded-lg border-solid border-[#ccc] border-[1px]',
        message: 'text-msgEr text-sm',
        label: 'mt-6 text-[rgba(0,0,0,0.6)] block pl-[8px] mb-[8px]',
    };
    const onSubmit = async (data) => {
        const res = await axiosAuth({
            method: 'PATCH',
            url: `http://localhost:3000/api/user/${inforUser.id}`,
            data: {
                ...data,
                avatar,
            }
        })
        console.log(res, data)
        try {

            setInforUser(prev => {
                return {
                    ...prev,
                    ...data,
                    avatar
                }

            })
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        setLoading(false)
    }, [])
    if (loading) {
        return <div className='w-full h-full'><Loading /></div>
    }
    return (
        <FormProviderBox className="px-10 max-full mt-[20px]" methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-[40px] w-full">
                <TextField
                    styleInput={style.lgInput}
                    className="flex flex-col"
                    styleLabel={style.label}
                    label={'Tên người dùng: '}
                    name="username"
                    type="text"
                    styleMessage={style.message}
                    placeholder="Tên người dùng..."
                />
                <TextField
                    styleInput={style.lgInput}
                    className="flex flex-col"
                    styleLabel={style.label}
                    styleMessage={style.message}
                    label={'Email : '}
                    name="emailUser"
                    type="text"
                    placeholder="Email..."
                    disabled
                />
            </div>
            <div className="grid grid-cols-2 gap-[40px] w-full">
                <TextField
                    styleInput={style.lgInput}
                    className="flex flex-col"
                    styleLabel={style.label}
                    label={'Ngày sinh : '}
                    styleMessage={style.message}
                    name="birthday"
                    type="date"
                    required
                />
                <RadioField
                    styleInput={style.styleRadio}
                    options={genderRadio}
                    styleLabelList={style.label}
                    label={'Giới tính : '}
                    styleMessage={style.message}
                    name="gender"
                    select='flex text-[rgba(0,0,0,0.6)] gap-[10px] h-12 items-center text-[20px]'
                    styleLabelItem='mr-[8px]'
                />

            </div>
            <div className="grid grid-cols-2 gap-[40px] w-full">
                <TextField
                    styleInput={style.lgInput}
                    className="flex flex-col"
                    styleMessage={style.message}
                    styleLabel={style.label}
                    label={'Số điện thoại: '}
                    name="phoneNumber"
                    type="number"
                    placeholder="+12345678..."
                />
            </div>

            <Button
                primary
                className="mt-[32px] max-w-[300px] mx-[auto] bg-gradient-to-t duration-500 from-[#ffe1d1] to-[#ffd1b9] text-2nd-text"
                classHover="hover:shadow-shadow-btn"
            >
                Lưu thay đổi
            </Button>
        </FormProviderBox>
    )
}
