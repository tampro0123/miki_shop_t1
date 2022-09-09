import { useState } from 'react'
import { History, UserIcon } from 'src/components/Icons/icons.js';
import CompleteShip from './Complete/CompleteShip';
import ShipPurchase from './Delivery/ShipPurchase';
import ListOrder from './ListOrder/ListOrder';
import ProcessOrder from './Process/ProcessOrder';
export default function Order() {
    const [check, setCheck] = useState(1)
    return (
        <div className='flex flex-col gap-[30px] px-[30px]'>
            <ul className='grid grid-cols-4 '>
                <li onClick={() => setCheck(1)} className={'rounded-8 p-[10px] flex gap-[5px] justify-center cursor-pointer items-center round-8 font-bold ' + (check == 1 ? 'bg-gradient-to-t from-[#ffe1d1] to-[#ffd1b9] shadow-shadow-btn' : '')}>
                    Tất cả đơn
                </li>
                <li onClick={() => setCheck(2)} className={'rounded-8 p-[10px] flex gap-[5px] justify-center cursor-pointer items-center round-8 font-bold ' + (check == 2 ? 'bg-gradient-to-t from-[#ffe1d1] to-[#ffd1b9] shadow-shadow-btn' : '')}>
                    Đang xử lí
                </li>
                <li onClick={() => setCheck(3)} className={'rounded-8 p-[10px] flex gap-[5px] justify-center cursor-pointer items-center round-8 font-bold ' + (check == 3 ? 'bg-gradient-to-t from-[#ffe1d1] to-[#ffd1b9] shadow-shadow-btn' : '')}>
                    Đang vận chuyển
                </li>
                <li onClick={() => setCheck(4)} className={'rounded-8 p-[10px] flex gap-[5px] justify-center cursor-pointer items-center round-8 font-bold ' + (check == 4 ? 'bg-gradient-to-t from-[#ffe1d1] to-[#ffd1b9] shadow-shadow-btn' : '')}>
                    Đã hoàn thành
                </li>
            </ul>
            <div>
                {check === 1 ? <ListOrder /> : ''}
                {check === 2 ? <ProcessOrder /> : ''}
                {check === 3 ? <ShipPurchase /> : ''}
                {check === 4 ? <CompleteShip /> : ''}
            </div>
        </div>
    )
}
