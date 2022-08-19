// Import library
import React from 'react';
import { useState } from "react"
import { useForm } from 'react-hook-form';
// Import component, function, asset
import { TextField } from "src/components/hook-form";

export const PaymentMethodsSection = () => {
    const methods = useForm();
    const [option, setOption] = useState(1)
    const listOption = [
        { id: 1, title: "Tiền mặt" },
        { id: 2, title: "Thẻ đã lưu" },
        { id: 3, title: "Thẻ tín dụng hoặc thẻ ghi nợ" },
    ]
    return (
        <div className="mt-[32px] mobile:px-[16px]">
            <h1 className="text-[#626262] font-bold text-base">Phương thức thanh toán</h1>
            <form className="mt-[36px] rounded-lg">
                {listOption.map(item =>
                    <div className={`p-4 border-[1px] border-[#626262] border-solid ${item.id === 1 ? "rounded-t-lg" : ""} ${item.id === 3 ? "rounded-b-lg" : ""}`}>
                        <div className={`flex items-center`}>
                            <input className="w-6 h-6 mr-5" type="checkbox"
                                onChange={() => {
                                    if (option === item.id) {
                                        setOption(undefined)
                                    } else {
                                        setOption(item.id)
                                    }
                                }}
                                checked={option === item.id} />
                            <label>{item.title}</label>
                        </div>
                        {(item.id === 3 && option === 3) &&
                            <div className="mt-5">
                                <TextField
                                    styleInput="w-[515px] mobile:w-[319px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid"
                                    styleMessage="text-msgEr text-sm"
                                    name="numberCard"
                                    placeholder="Nhập số thẻ" />

                                <div className="mt-6 flex">
                                    <TextField
                                        styleInput="w-[238px] mobile:w-[199px] h-12 p-3 rounded-lg border-[#6E5544] border-[1px] border-solid mr-[40px] mobile:mr-[14px]"
                                        styleMessage="text-msgEr text-sm"
                                        name="outOfDate"
                                        placeholder="Ngày hết hạn (MM/YY)" />
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
            </form>
        </div>
    )
}

