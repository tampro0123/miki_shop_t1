import React, { useEffect, useState } from 'react'
import { useProducts } from 'src/hooks'
import OverLay from 'src/layouts/managementPage/overlay/OverLay.js';
import Link from 'next/link';
import Button from 'src/components/Button';
import axiosAuth from 'src/utils/axios';
import Image from 'next/image';
import deleteUser from 'src/sections/handleActionUser/functionHandle/deleteUser'
import { useRouter } from 'next/router';
import { inforUser } from 'src/recoils/inforUser';
import { useSetRecoilState } from 'recoil';
export default function managementUser() {
    const router = useRouter()
    const [users, setUsers] = useState([])
    const setUserState = useSetRecoilState(inforUser)
    const [checkAll, setCheckAll] = useState(false)
    useEffect(() => {
        const data = axiosAuth({
            method: "GET",
            url: '/api/user/all',
        })
            .then(data => setUsers(data.data.users))
            .catch(err => console.log(err))
    }, [users])
    return (
        <OverLay>
            <div className='mt-[30px]'>
                <div className="flex shadow-md justify-between h-[80px] items-center bg-white mx-[20px] rounded-8 px-[30px]">
                    <h3 className='text-[20px] font-bold'>  Quản lí sản phẩm</h3>
                    <div className='flex justify-between'>
                        <input type='text' placeholder='Search' className='border-[1px] 
                        border-solid border-[#ccc] px-[10px] mr-[10px] rounded-8 w-[350px]'/>
                        <Button primary className='hover-btn-primary ml-[10px] bg-[#AC3131]'>
                            Xóa
                        </Button>
                    </div>
                </div>
            </div>
            <div className='mt-[30px] mx-[20px] p-[30px] bg-white rounded-8 shadow-md'>
                <table className='border-[1px] border-solid border-[#ccc] w-full'>
                    <thead>
                        <tr className='border-[1px] border-solid border-[#ccc] p-[15px]'>
                            <th>
                                <input type='checkbox' onClick={() => setCheckAll(!checkAll)} />
                            </th>
                            <th >Người dùng</th>
                            <th >Email</th>
                            <th>Vai trò</th>
                            <th >Thay đổi</th>
                        </tr>
                    </thead>
                    {users?.map((item, index) => {
                        return (
                            <tbody key={index}>
                                <tr className='border-[1px] py-[40px] my-[40px] border-solid border-[#ccc] text-center'>
                                    <td>
                                        <input type='checkbox' checked={checkAll ? checkAll : null} />
                                    </td>

                                    <td className='py-[20px] px-[30px]'>
                                        <div className='flex items-center ml-[25%] gap-[20px] justify-start'>
                                            <div>
                                                <Image
                                                    width='40px'
                                                    height='40px'
                                                    className='rounded-[50%]'
                                                    src={item.image}
                                                />
                                            </div>
                                            <div>
                                                <p>{item.username}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{item.email}</p>
                                    </td>
                                    <td>
                                        <p>{item.role}</p>
                                    </td>
                                    <td className='p-[10px] block text-center px-[20px]'>
                                        <div className='flex flex-col items-center'>
                                            <Button
                                                className='hover-btn-primary max-w-[180px] w-full bg-[#1E74A4]
                                                 text-white mb-[5px] p-[10px]'
                                                onClick={() => {
                                                    setUserState({
                                                        name: item.username,
                                                        image: item.image,
                                                        role: item.role,
                                                        email: item.email,
                                                        password: item.password,
                                                        birthday: item.birthday
                                                    })
                                                    router.push(`/admin/editUser?id=${item._id}`)
                                                }
                                                }
                                            >
                                                Cập nhật
                                            </Button>
                                            <Button className='hover-btn-primary max-w-[180px] w-full bg-[#AC3131] text-white p-[10px]'
                                                onClick={() => {
                                                    let decision = confirm("Bạn muốn xóa sản phẩm này không ? ")
                                                    if (decision) {
                                                        return deleteUser(item._id)
                                                    }
                                                }}
                                            >
                                                Xóa
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </OverLay>
    )
}
