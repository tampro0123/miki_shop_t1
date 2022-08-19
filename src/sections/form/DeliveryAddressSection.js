// Import library
import React from 'react';
import { useForm } from 'react-hook-form';
// Import component, function, asset
import { TextField } from "src/components/hook-form";


export const DeliveryAddressSection = () => {
    const methods = useForm();
    return (
        <div className="w-[548px] mobile:w-[375px] mobile:mt-[44px] mobile:px-[16px]">
            <h1 className="text-[#626262] font-bold text-base">Địa chỉ giao hàng</h1>
            <div className="flex mt-[16px]">
                <TextField
                    styleInput="w-[254px] mobile:w-[159px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mr-[40px] mobile:mr-6"
                    styleMessage="text-msgEr text-sm"
                    name="firstName"
                    placeholder="Họ" />
                <TextField
                    styleInput="w-[254px] mobile:w-[159px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid"
                    styleMessage="text-msgEr text-sm"
                    name="lastName"
                    placeholder="Tên" />
            </div>
            <div className="flex mt-[32px] mobile:flex-col">
                <TextField
                    styleInput="w-[156px] mobile:w-[343px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mr-[40px] mobile:mb-[32px]"
                    styleMessage="text-msgEr text-sm"
                    name="city"
                    placeholder="Tỉnh/Thành phố" />
                <TextField
                    styleInput="w-[156px] mobile:w-[343px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mr-[40px] mobile:mb-[32px]"
                    styleMessage="text-msgEr text-sm"
                    name="district"
                    placeholder="Quận/Huyện" />
                <TextField
                    styleInput="w-[156px] mobile:w-[343px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid"
                    styleMessage="text-msgEr text-sm"
                    name="ward"
                    placeholder="Phường/Xã" />
            </div>
            <TextField
                styleInput="w-[548px] mobile:w-[343px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mt-[32px]"
                styleMessage="text-msgEr text-sm"
                name="specific address"
                placeholder="Địa chỉ cụ thể" />
            <TextField
                styleInput="w-[548px] mobile:w-[343px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mt-[32px]"
                styleMessage="text-msgEr text-sm"
                name="phone number"
                placeholder="Số điện thoại" />
        </div>
    )
}

