import { useState } from 'react'
import BreadCrumb from 'src/components/BreadCrumb/BreadCrumb';
import Page from 'src/components/Page';
import { History, UserIcon, ManagementOrder, Lock } from 'src/components/Icons/icons.js';
import InforUser from 'src/components/ProfileComponent/UserProfile/InforUser';
import ChangePass from 'src/components/ProfileComponent/RepassUser/ChangePass';
import Order from 'src/components/ProfileComponent/OrderUser/Order';
import PurchaseHistory from 'src/components/ProfileComponent/History/PurchaseHistory';
export default function index() {
    const [check, setCheck] = useState(1)
    return (
        <Page title="Profile Setting">
            <div className="app mt-[24px]">
                <div className="container mt-0 pb-[10px]">
                    <BreadCrumb
                        params={[
                            {
                                href: '/',
                                label: 'Trang chủ',
                            },
                            {
                                href: '/profile',
                                label: 'Thông tin cá nhân',
                            },
                        ]}
                    />
                    <div className='flex gap-[30px]'>
                        <ul className='max-w-[250px] w-full flex flex-col gap-[5px]'>
                            <li onClick={() => setCheck(1)} className={'rounded-8 p-[10px] flex gap-[5px] cursor-pointer items-center round-8 font-bold ' + (check == 1 ? 'bg-gradient-to-t from-[#ffe1d1] to-[#ffd1b9] shadow-shadow-btn' : '')}>
                                <UserIcon classNameIcon='w-[25px] ' />
                                Thông tin
                            </li>
                            <li onClick={() => setCheck(2)} className={'rounded-8 px-[10px] py-[15px] flex gap-[5px] cursor-pointer items-center round-8 font-bold ' + (check == 2 ? 'bg-gradient-to-t from-[#ffe1d1] to-[#ffd1b9] shadow-shadow-btn' : '')}>
                                <ManagementOrder iconClass='w-[25px] ' />
                                Quản lí đơn hàng
                            </li>
                            <li onClick={() => setCheck(3)} className={'rounded-8 p-[10px] flex gap-[5px] cursor-pointer items-center round-8 font-bold ' + (check == 3 ? 'bg-gradient-to-t from-[#ffe1d1] to-[#ffd1b9] shadow-shadow-btn' : '')}>
                                <History iconClass='w-[25px] ' />
                                Lịch sử mua hàng
                            </li>
                            <li onClick={() => setCheck(4)} className={'rounded-8 px-[10px] py-[15px] flex gap-[5px] cursor-pointer items-center round-8 font-bold ' + (check == 4 ? 'bg-gradient-to-t from-[#ffe1d1] to-[#ffd1b9] shadow-shadow-btn' : '')}>
                                <Lock classNameIcon='w-[25px] ' />
                                Thay đổi mật khẩu
                            </li>
                        </ul>
                        <div className='bg-[#fff] w-full py-[20px] shadow-shadow-gray rounded-8'>
                            {check == 1 ? <InforUser /> : ''}
                            {check == 2 ? <Order /> : ''}
                            {check == 3 ? <PurchaseHistory /> : ''}
                            {check == 4 ? <ChangePass /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
