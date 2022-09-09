import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProviderBox, SlectOption, TextField, RadioField } from 'src/components/hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'src/components/Button';
import { useRecoilState } from 'recoil';
import { inforUser } from 'src/recoils/inforUser';
import axiosAuth from 'src/utils/axios';
import { useRouter } from 'next/router'
export default function CreateUser() {
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true)
    const [dataUser, setDataUser] = useRecoilState(inforUser)
    const schema = yup.object().shape({
        nameUser: yup.string().required('Nhập tên người dùng'),
        // emailUser: yup.string().required("Không để trống email")
        //     .matches(
        //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //         'Email không tồn tại'
        //     ),
        password: yup.string().trim().required('Vui lòng nhập mật khẩu').min(8, 'Nhập mật khẩu từ 6 đến 8 kí tự'),

    });
    const methods = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onBlur',
        defaultValues: {
            nameUser: dataUser.name,
            emailUser: dataUser.email,
            password: dataUser.password,
            role: dataUser.role,
            birthday: dataUser?.birthday?.substring(0, dataUser?.birthday.indexOf('T')),
        }
    });
    const { handleSubmit, reset } = methods;
    const style = {
        smInput: 'w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid',
        lgInput: 'w-full h-12 p-3 rounded-lg border-solid border-border-1 border-[1px]',
        message: 'text-msgEr text-sm',
        label: 'mt-6 block pl-[8px] mb-[8px]',
        area: 'w-full rounded-lg border-solid border-border-1 border-[1px] p-[13px]',
        lgOption: 'text-[120px] mr-[10px]'
    };
    const optionRole = [
        {
            value: 'admin',
            name: "Quản lí"
        },
        {
            value: 'user',
            name: "Người dùng"
        },
    ]
    const onSubmit = (data) => {
        // const item = axiosAuth({
        //     method: 'POST',
        //     url: `api/user/${id}`,
        //     data: {
        //     },
        // })
        console.log(data)
    }
    useEffect(() => {
        setLoading(false)
    }, [])
    const render = ['Nam', 'Nữ']
    if (loading) <h1>Loading....</h1>
    return (
        <FormProviderBox className="px-10 max-full mt-[20px]" methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-[40px] w-full">
                <TextField
                    styleInput={style.lgInput}
                    className="flex flex-col"
                    styleLabel={style.label}
                    label={'Tên người dùng: '}
                    name="nameUser"
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
                />
            </div>
            <div className="grid grid-cols-2 gap-[40px] w-full">
                <TextField
                    styleInput={style.lgInput}
                    className="flex flex-col"
                    styleMessage={style.message}
                    styleLabel={style.label}
                    label={'Mật khẩu: '}
                    name="password"
                    type="password"
                    placeholder="Nhập mật khẩu..."
                />
                <TextField
                    styleInput={style.lgInput}
                    className="flex flex-col"
                    styleLabel={style.label}
                    label={'Ngày sinh : '}
                    styleMessage={style.message}
                    name="birthday"
                    type="date"
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
                <RadioField
                    options={render}
                    styleLabelList={style.label}
                    label={'Giới tính : '}
                    styleMessage={style.message}
                    name="render"
                    select='flex gap-[10px] h-12 items-center text-[20px]'
                    styleLabelItem='mr-[8px]'
                />
            </div>

            <SlectOption
                className="mt-[30px]"
                styleInput={style.area}
                styleLabel={style.label}
                label={'Chức vụ : '}
                valueOption={optionRole}
                name="role"
                styleMessage={style.message}
            />
            <Button
                className="mt-[32px] max-w-[300px] mx-[auto] bg-[#7367f0] text-base"
                primary
                type="submit"
                classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
            >
                Lưu thay đổi
            </Button>
        </FormProviderBox>
    )
}
