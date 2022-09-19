import React from 'react'
import { SearchIcon } from 'src/components/Icons'
export default function ProcessOrder() {
    return (
        <div className='mt-[20px]'>
            <div>
                <div className="flex items-center h-[40px] border-[1px] border-primary-text bg-white px-[15px] rounded-8">
                    <label htmlFor="search">
                        <SearchIcon classNameIcon="cursor-pointer hover:scale-90 duration-300 " />
                    </label>
                    <input type='text' id='search' className='ml-[10px] outline-none w-full' placeholder='Tìm kiếm' />
                </div>
            </div>
            <div className='mt-[30px]  p-[30px] bg-white rounded-8'>
                <table className=' w-full'>
                    <thead>
                        <tr className='border-b-[1px] border-b-solid border-b-[#ccc] p-[15px]'>
                            <th>
                                <input type='checkbox' />
                            </th>
                            <th >Đơn hàng</th>
                            <th >Ngày tháng</th>
                            <th>Khách hàng</th>
                            <th>Trạng thái</th>
                            <th>Sản phẩm</th>
                            <th >Thay đổi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-[20px] px-[30px] text-center'>1</td>
                            <td className='py-[20px] px-[30px] text-center'>2</td>
                            <td className='py-[20px] px-[30px] text-center'>32</td>
                            <td className='py-[20px] px-[30px] text-center'>2</td>
                            <td className='py-[20px] px-[30px] text-center'>32</td>
                            <td className='py-[20px] px-[30px] text-center'>32</td>
                            <td className='py-[20px] px-[30px] text-center'>32</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
