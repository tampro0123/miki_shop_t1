// Import library
import React from 'react';
import { useFormContext } from 'react-hook-form';
// Import component, function, asset
import { TextField } from "src/components/hook-form";
import { MasterCard, Visa, Paypal } from "src/components/Icons/icons"

export const PaymentMethodsSection = ({ option, setOption }) => {
    // Get method from react hook form
    const { register, formState: { errors } } = useFormContext();
    // List option
    const listOption = [
        { id: 1, title: "Tiền mặt" },
        { id: 2, title: "Thẻ đã lưu" },
        { id: 3, title: "Thẻ tín dụng hoặc thẻ ghi nợ" },
    ]
    // UI
    return (
        <div className="mt-[32px] mobile:px-[16px]">
            <h1 className="text-[#626262] font-bold text-base">Phương thức thanh toán</h1>
            <div className="mt-[36px] rounded-lg">
                {/* Render input title from list option */}
                {listOption.map(item =>
                    <div key={item.id} className={`p-4 border-[1px] border-[#626262] border-solid ${item.id === 1 ? "rounded-t-lg" : ""} ${item.id === 3 ? "rounded-b-lg" : ""}`}>
                        <div className={`flex items-center`}>
                            <input {...register("check")} value={item.title} className="w-6 h-6 mr-5" type="checkbox"
                                // choose 1
                                onChange={() => {
                                    if (option === item.id) {
                                        setOption(undefined)
                                    } else {
                                        setOption(item.id)
                                    }
                                }}
                                // checked
                                checked={option === item.id} />
                            <label>{item.title}</label>
                            {/* id === 2 */}
                            {item.id === 2 && <div className="flex items-center ml-[250px] mobile:ml-[16px]"><Visa /><p>***6699</p></div>}
                            {/* id === 3 */}
                            {item.id === 3 && <div className="flex ml-[16px] mobile:hidden"><Visa /><MasterCard /><Paypal /></div>}
                        </div>
                        {/* if option 3 is selected */}
                        {(item.id === 3 && option === 3) &&
                            <div className="mt-5">
                                {/* Number Card */}
                                <TextField
                                    styleInput="w-[515px] mobile:w-[319px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid"
                                    styleMessage="text-msgEr text-sm"
                                    name="numberCard"
                                    placeholder="Nhập số thẻ" />
                                <div className="mt-6 flex">
                                    {/* Out of date */}
                                    <TextField
                                        styleInput="w-[238px] mobile:w-[199px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mr-[40px] mobile:mr-[14px]"
                                        styleMessage="text-msgEr text-sm"
                                        name="outOfDate"
                                        placeholder="Ngày hết hạn (MM/YY)" />
                                    {/* CVV */}
                                    <TextField
                                        styleInput="w-[238px] mobile:w-[106px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid"
                                        styleMessage="text-msgEr text-sm"
                                        name="CVV"
                                        placeholder="Mã CVV" />
                                </div>
                            </div>
                        }
                    </div>
                )}
            </div>
            {/* Message Error */}
            <span className="text-msgEr text-sm">{errors["check"]?.message}</span>
        </div>
    )
}

