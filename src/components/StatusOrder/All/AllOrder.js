import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { SearchIcon, More, Edit, Delete } from 'src/components/Icons'

export default function AllOrder() {
    const [active, setActive] = useState(false)
    const navRef = useRef(null)
    const onBlur = (e) => {
        if (active && !navRef.current.contains(e.target)) {
            setActive(prev => !prev)
        }
    }
    useEffect(() => {
        document.addEventListener('click', onBlur)
        return () => {
            document.removeEventListener('click', onBlur)
        }
    }, [onBlur, active])
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
                            <td className='py-[20px] px-[30px] text-center'>
                                <div
                                    onClick={() => {
                                        console.log(active)
                                        setActive(prev => !prev)
                                    }}
                                    ref={navRef}
                                    className='flex justify-center relative'>
                                    <More iconClass='w-[24px] cursor-pointer' />
                                    <div className='absolute z-20  max-w-[900px]
                                     w-[200px] bg-[#fff] right-[-30px] 
                                     top-[30px] block transition-500'>
                                        <ul className={active ? " shadow-xl rounded-8 border-[1px] border-solid border-[#ccc]  w-full py-[10px] text-[16px] flex flex-col" : 'hidden'}>
                                            <li
                                                className="text-16 font-bold p-[10px] hover:bg-[#ccc] duration-500 ">
                                                <Link href='/'>
                                                    <a className='flex gap-[5px] items-center'>
                                                        <Edit />
                                                        <span>Chi tiết</span>
                                                    </a>
                                                </Link>
                                            </li>

                                            <li
                                                className="text-16 font-bold p-[10px] hover:bg-[#ccc] duration-500 ">
                                                <Link href='/'>
                                                    <a className='flex gap-[5px] items-center'>
                                                        <Edit />
                                                        <span>Xác nhận</span>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li
                                                className="text-16 font-bold p-[10px] hover:bg-[#ccc] duration-500">
                                                <Link href='/'>
                                                    <a className='flex gap-[5px] items-center'>
                                                        <Delete />
                                                        <span>Xóa</span>
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
