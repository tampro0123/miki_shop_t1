import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { dataUser } from 'src/recoils/dataUser'
import convertToBase64 from 'src/sections/handleAction/functionHandle/convertImg'
import { Edit } from 'src/components/Icons/icons.js';
import Button from '../../Button'
import FormEdit from './FormEdit'
export default function InforUser() {
    const data = useRecoilValue(dataUser)
    const [loading, setLoading] = useState(true)
    const [avatar, setAvatar] = useState('')
    const [edit, setEdit] = useState(false)
    const [userName, setUserName] = useState(data.userName)
    const onChangeData = (e) => {
        let convertArr = Array.from(e.target.files);
        convertArr.forEach(async (item) => {
            let base64 = await convertToBase64(item);
            setAvatar(base64);
        });
    }
    useEffect(() => {
        setLoading(false)
    }, [])
    if (loading) return <h1>Loading....</h1>
    return (
        <div >
            <div className='flex gap-[20px] px-[45px]'>
                <img
                    src={avatar || data?.avatar}
                    className='rounded-8 max-w-[130px] max-h-[130px] object-cover'
                />
                <div>
                    <div className='cursor-pointer text-[23px] group  mt-[3px] font-bold flex items-center'>
                        <input value={userName} onBlur={() => setEdit(false)} className={'border-b-[2px] mt-[3px] outline-0 border-b-[#ccc] border-b-solid' + (edit ? ' block' : ' hidden')} onChange={(e) => setUserName(e.target.value)} autoFocus />
                        <p className={'mr-[8px] mt-[5px]' + (edit ? ' hidden' : ' block')}>{userName || data?.userName}</p>
                        <div className='hidden group-hover:block' onClick={() => setEdit(!edit)}>
                            <Edit iconClass='w-[25px]' />
                        </div>
                    </div>
                    <p className=' cursor-pointer text-[15px] italic text-[#ccc] mb-[10px] mt-[3px]'>Code không bug xóa group</p>
                    <Button primary
                        className="px-0 py-0 bg-gradient-to-t duration-500 from-[#ffe1d1] to-[#ffd1b9] text-2nd-text"
                        classHover="hover:shadow-shadow-btn "
                    >
                        <input type='file' id='file' onChange={(e) => onChangeData(e)} name='avataUser' className='hidden' />
                        <label htmlFor='file' className='py-2 px-[46px] cursor-pointer block'>Tải lên</label>
                    </Button>
                </div>
            </div>
            <div>
                <FormEdit />
            </div>
        </div >
    )
}
