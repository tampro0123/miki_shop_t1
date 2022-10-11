import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { SearchIcon, More, Edit, Delete } from 'src/components/Icons'
import Pagination from 'src/components/Pagination/Pagination'
import axiosAuth from 'src/utils/axios'
import formatTime from 'src/utils/formatTime'
export default function AllOrder() {
    const { query } = useRouter()
    const [active, setActive] = useState(true)
    const navRef = useRef(null)
    const [dataOrder, setDataOrder] = useState([])
    const [totalPage, setTotalPage] = useState()
    const [isEdit, setIsEdit] = useState(false)
    const onBlur = (e) => {
        // if (active && !navRef.current.contains(e.target)) {
        //     let check = dataOrder.map(item => {
        //         return ({ ...item, active: !item.active })
        //     })
        //     console.log(check)
        //     setDataOrder(check)
        // }
    }
    const handleClick = (id) => {
        let check = dataOrder.map(item => {
            if (item.active) {
                return { ...item, active: false }
            }
            return item._id === id ? { ...item, active: !item.active } : item
        })
        setDataOrder(check)
    }
    const handleEdit = (id) => {
        const data = axiosAuth({
            url: '/api/cart/edit',
            method: "POST",
            data: {
                id
            }
        })
            .then(res => {
                console.log(res.data)
                setIsEdit(!isEdit)
            })
            .catch(err => console.error(err.data))
    }
    const handleCancelCart = (id) => {
        const data = axiosAuth({
            url: '/api/cart/cancel',
            method: "POST",
            data: {
                id
            }
        })
            .then(res => {
                console.log(res.data)
                setIsEdit(!isEdit)
            })
            .catch(err => console.error(err.data))
    }
    useEffect(() => {
        document.addEventListener('click', onBlur)
        return () => {
            document.removeEventListener('click', onBlur)
        }
    }, [onBlur, dataOrder])
    useEffect(() => {
        const data = axiosAuth({
            method: 'GET',
            url: `/api/cart/all?page=${query.page}&limit=10`,
        })
            .then(res => {
                setDataOrder(res.data.carts)
                setTotalPage(res.data.totalPages)
            })
            .catch(err => console.error(err))
    }, [totalPage, query.page, isEdit])
    useEffect(() => {
        let check = dataOrder.map(item => ({ ...item, active: false }))
        setDataOrder(check)
    }, [])
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
                        {dataOrder.length ?
                            dataOrder.map((item, index) => (
                                <tr key={item._id}>
                                    <td className='py-[20px] px-[30px] text-center'><input type='checkbox' /></td>
                                    <td className='py-[20px] px-[30px] text-center'>{item._id}</td>
                                    <td className='py-[20px] px-[30px] text-center'>{formatTime(item.createdAt)}</td>
                                    <td className='py-[20px] px-[30px] text-center'>{item.name}</td>
                                    <td className='py-[20px] px-[30px] text-center'>{item.status}</td>
                                    <td className='py-[20px] px-[30px] text-center'>{item.products.length}</td>
                                    <td className='py-[20px] px-[30px] text-center'>
                                        <div
                                            onClick={() => { handleClick(item._id) }}
                                            ref={navRef}
                                            className='flex justify-center relative'>
                                            <More iconClass='w-[24px] cursor-pointer' />
                                            <div className='absolute z-20  max-w-[900px]
                                 w-[200px] bg-[#fff] right-[-30px] 
                                 top-[30px] block transition-500'>
                                                <ul className={item.active ? " shadow-xl rounded-8 border-[1px] border-solid border-[#ccc]  w-full py-[10px] text-[16px] flex flex-col" : 'hidden'}>
                                                    <li
                                                        className="text-16 font-bold p-[10px] hover:bg-[#ccc] duration-500 ">
                                                        <Link href=''>
                                                            <a className='flex gap-[5px] items-center'>
                                                                <Edit />
                                                                <span>Chi tiết</span>
                                                            </a>
                                                        </Link>
                                                    </li>

                                                    <li
                                                        className="text-16 font-bold p-[10px] hover:bg-[#ccc] duration-500 ">
                                                        <Link href=''>
                                                            <a className='flex gap-[5px] items-center' onClick={() => handleEdit(item._id)}>
                                                                <Edit />
                                                                <span>Xác nhận</span>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li
                                                        className="text-16 font-bold p-[10px] hover:bg-[#ccc] duration-500">
                                                        <Link href=''>
                                                            <a className='flex gap-[5px] items-center'>
                                                                <Delete />
                                                                <span>Xóa</span>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li
                                                        className="text-16 font-bold p-[10px] hover:bg-[#ccc] duration-500">
                                                        <Link href=''>
                                                            <a
                                                                onClick={() => handleCancelCart((item._id))}
                                                                className='flex gap-[5px] items-center'>
                                                                <Delete />
                                                                <span>Hủy</span>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                            :
                            ''
                        }

                    </tbody>
                </table>
                <Pagination pageCount={totalPage} />
            </div>
        </div>
    )
}
