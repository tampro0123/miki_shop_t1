import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { cartState } from 'src/recoils/cartState'
import FormatPrice from 'src/utils/formatPrice'
import { Delete } from 'src/components/Icons/icons.js';
import { useRouter } from 'next/router';
import Button from 'src/components/Button';
export default function ListOrder() {
    const router = useRouter()
    const data = useRecoilValue(cartState)
    const [loading, setLoading] = useState(true)
    console.log(data)
    useEffect(() => {
        setLoading(false)
    }, [])
    if (loading) return <h1>Loading....</h1>
    return (
        <div className="flex flex-col">
            <h1 className="text-[20px] font-bold">Đơn hàng</h1>
            <table className="mt-[20px]">
                <thead className="">
                    <tr>
                        <th className="py-3 bg-[#ffe1d1]">Sản phẩm</th>
                        <th className="py-3 bg-[#ffe1d1]">Số lượng</th>
                        <th className="py-3 bg-[#ffe1d1]">Kích cỡ</th>
                        <th className="py-3 bg-[#ffe1d1]">Giá</th>
                        <th className="py-3 bg-[#ffe1d1]">Xóa</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {data.map((item, index) => {
                        return (
                            <tr key={index} className="border-b-[1px] border-b-solid border-b-[#ccc] ">
                                <td className='flex py-3 px-6'>
                                    <img src={item.image} className='max-w-[100px]' />
                                    <div className='max-w-[150px]'>
                                        <p>{item.name}</p>
                                    </div>
                                </td>
                                <td className='py-3 px-6'>{item.quantity}</td>
                                <td className='py-3 px-6'>{item.size}</td>
                                <td className='py-3 px-6'><FormatPrice price={item.price} /></td>
                                <td className='py-3 px-6 m-0'>
                                    <button onClick={() => router.replace('/cart')}>
                                        <Delete iconClass='w-[25px] hover:scale-90 duration-300' />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Button
                primary
                className="mt-[32px] max-w-[300px] mx-[auto] bg-gradient-to-t duration-500 from-[#ffe1d1] to-[#ffd1b9] text-2nd-text"
                classHover="hover:shadow-shadow-btn"
            >
                Mua hàng
            </Button>
        </div >
    )
}
