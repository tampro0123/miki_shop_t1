// Import library
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useState } from "react"
// Import component, function, asset
import Button from 'src/components/Button';
import { DeliveryAddressSection, PaymentMethodsSection, ProductsSection } from "src/sections/form"
import { FormProviderBox } from 'src/components/hook-form';
import { dataUser } from 'src/recoils/dataUser';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import axiosAuth from 'src/utils/axios';
import { cartState, totalCart } from 'src/recoils/cartState';
import { useRouter } from 'next/router';

const PaymentSection = () => {
    const router = useRouter()
    const idUser = useRecoilValue(dataUser)
    const setCart = useSetRecoilState(cartState)
    const total = useRecoilValue(totalCart)
    // Create the option status in Payment methods section
    const [option, setOption] = useState(undefined)
    // Create schema validate form
    let schema = yup.object().shape({
        firstName: yup.string().required('Vui lòng nhập họ'),
        lastName: yup.string().required('Vui lòng nhập tên'),
        city: yup.string().required('Vui lòng nhập'),
        district: yup.string().required('Vui lòng nhập'),
        ward: yup.string().required('Vui lòng nhập'),
        specificAddress: yup.string().required('Vui lòng nhập địa chỉ cụ thể'),
        phoneNumber: yup.string().required('Vui lòng nhập số điện thoại'),
        check: yup.array().typeError('Vui lòng nhập phương thức thanh toán').min(1, 'Vui lòng nhập phương thức thanh toán'),
    });
    // if option is 3, create 3 input
    if (option === 3) {
        schema = yup.object().shape({
            firstName: yup.string().required('Vui lòng nhập họ'),
            lastName: yup.string().required('Vui lòng nhập tên'),
            city: yup.string().required('Vui lòng nhập'),
            district: yup.string().required('Vui lòng nhập'),
            ward: yup.string().required('Vui lòng nhập'),
            specificAddress: yup.string().required('Vui lòng nhập địa chỉ cụ thể'),
            phoneNumber: yup.string().required('Vui lòng nhập số điện thoại'),
            check: yup.array().typeError('Vui lòng nhập phương thức thanh toán').min(1, 'Vui lòng nhập phương thức thanh toán'),
            numberCard: yup.string().required('Vui lòng nhập số thẻ'),
            outOfDate: yup.string().required('Vui lòng nhập ngày hết hạn'),
            CVV: yup.string().required('Vui lòng nhập số cvv'),
        });
    }
    // Get method from react hook form
    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            city: "",
            district: "",
            ward: "",
            specificAddress: "",
            phoneNumber: "",
        }
    });

    const { handleSubmit, reset } = methods;
    // Handle submit and logic
    const onSubmit = (data) => {
        axiosAuth({
            method: "POST",
            url: '/api/cart/payments',
            data: {
                userId: idUser.id,
                receipt: total,
                ...data
            },
        })
            .then((value) => {
                setCart([])
                router.replace("/")
            })
            .catch(err => {
                console.log(err)
            })

        console.log(data.data)
    }
    // UI
    return (
        <div className="w-[1136px] mobile:w-[375px] text-align">
            <h1 className="text-[32px] mobile:text-[24px] leading-10 mobile:leading-8 font-bold mobile:font-semibold mobile:ml-[16px]">Trang thanh toán</h1>
            {/* Form */}
            <FormProviderBox methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex mobile:items-center mt-12 mobile:mt-9 mb-10 mobile:flex-col-reverse">
                    <div className="flex flex-col">
                        {/* Delivery Address */}
                        <DeliveryAddressSection />
                        {/* Payment Methods */}
                        <PaymentMethodsSection option={option} setOption={setOption} />
                    </div>
                    {/* Products */}
                    <ProductsSection />
                </div>
                <div className="flex mobile:mx-[16px]">
                    {/* Button submit */}
                    <Button primary type="submit" className="mobile:py-[8px] mobile:px-[31.5px]" classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black">Thanh toán</Button>
                    {/* Button switch to cart page  */}
                    <Button to="/" text className="text-black ml-[179px] mobile:ml-[37px]">Trở lại giỏ hàng</Button>
                </div>
            </FormProviderBox>
        </div>
    )
}

export default PaymentSection
