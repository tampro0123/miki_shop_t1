import { useState } from 'react'
import Button from 'src/components/Button'
import AllOrder from 'src/components/StatusOrder/All/AllOrder'
import CompleteShip from 'src/components/StatusOrder/Done/CompleteShip'
import ProcessOrder from 'src/components/StatusOrder/Processing/ProcessOrder'
import ShipOrder from 'src/components/StatusOrder/Shipping/ShipOrder'
import OverLay from 'src/layouts/managementPage/overlay/OverLay'

export default function managementOrder() {
    const [check, setCheck] = useState(1)

    return (
        <OverLay>
            <div className='mt-[30px]'>
                <div className="flex shadow-md justify-between h-[80px] items-center bg-white mx-[20px] rounded-8 px-[30px]">
                    <h3 className='text-[20px] font-bold'>  Quản lí đơn hàng</h3>
                </div>
            </div>
            <div className='mt-[30px] bg-white mx-[20px] rounded-8 py-[10px] px-[30px] shadow-md'>
                <div className="mt-[10px] border-b-[1px] border-[#ccc] border-solid pb-[10px]">
                    <ul className=' flex gap-[10px]'>
                        <li onClick={() => setCheck(1)} className={'rounded-8 p-[10px] flex gap-[5px] cursor-pointer items-center round-8 font-bold ' + (check == 1 ? 'bg-[#ccc]' : '')}>
                            Tất cả đơn hàng
                        </li>
                        <li onClick={() => setCheck(2)} className={'rounded-8 px-[10px] py-[15px] flex gap-[5px] cursor-pointer items-center round-8 font-bold ' + (check == 2 ? 'bg-[#ccc]' : '')}>
                            Đang xử lí
                        </li>
                        <li onClick={() => setCheck(3)} className={'rounded-8 p-[10px] flex gap-[5px] cursor-pointer items-center round-8 font-bold ' + (check == 3 ? 'bg-[#ccc]' : '')}>
                            Đang vận chuyển
                        </li>
                        <li onClick={() => setCheck(4)} className={'rounded-8 px-[10px] py-[15px] flex gap-[5px] cursor-pointer items-center round-8 font-bold ' + (check == 4 ? 'bg-[#ccc]' : '')}>
                            Hoàn thành
                        </li>
                    </ul>
                </div>
                {check == 1 ? <AllOrder /> : ''}
                {check == 2 ? <ProcessOrder /> : ''}
                {check == 3 ? <ShipOrder /> : ''}
                {check == 4 ? <CompleteShip /> : ''}

            </div>
        </OverLay>
    )
}
