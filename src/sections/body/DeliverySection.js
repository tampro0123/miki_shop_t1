// Import library
import React from 'react';
import Button from 'src/components/Button';
import { useForm } from 'react-hook-form';
// Import component, function, asset
import { DeliveryAddressSection, PaymentMethodsSection, ProductListSection } from "src/sections/form"
import { FormProviderBox } from 'src/components/hook-form';

const DeliverySection = () => {
    const methods = useForm();
    const { handleSubmit, reset } = methods;
    const onSubmit = () => { console.log("a") }
    return (
        <div className="w-[1136px] mobile:w-[375px] text-align">
            <h1 className="text-[32px] mobile:text-[24px] leading-10 mobile:leading-8 font-bold mobile:font-semibold mobile:ml-[16px]">Trang giao hàng</h1>
            <FormProviderBox methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex mobile:items-center mt-12 mobile:mt-9 mb-10 mobile:flex-col-reverse">
                    <div className="flex flex-col">
                        <DeliveryAddressSection />
                        <PaymentMethodsSection />
                    </div>
                    <ProductListSection />
                </div>
                <div className="flex mobile:mx-[16px]">
                    <Button primary className="mobile:py-[8px] mobile:px-[31.5px]" classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black">Thanh toán</Button>
                    <Button to="/" text className="text-black ml-[179px] mobile:ml-[37px]">Trở lại giỏ hàng</Button>
                </div>
            </FormProviderBox>
        </div>
    )
}

export default DeliverySection
