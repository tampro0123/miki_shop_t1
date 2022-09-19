import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Button from 'src/components/Button'
import { inforUser } from 'src/recoils/inforUser'
import convertToBase64 from 'src/sections/handleAction/functionHandle/convertImg'
export default function Profile() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useRecoilState(inforUser)
    const [changeAvata, setChangeData] = useState('')
    useEffect(() => {
        setLoading(false)
    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    }
    const onChangeData = (e) => {
        let convertArr = Array.from(e.target.files);
        convertArr.forEach(async (item) => {
            let base64 = await convertToBase64(item);
            setChangeData(base64);
            setData(prev => ({
                ...prev,
                image: base64
            }))
        });
    }
    return (
        <div className="px-[40px] mt-[30px] flex gap-[10px]">
            <img
                width='120px'
                height='120px'
                className='rounded-8'
                src={changeAvata || data.avatar}
            />
            <div>
                <p className='text-[20px] font-bold mb-[20px] '>{data.name}</p>
                <Button primary
                    className="bg-[#7367f0] px-0 py-0"
                    classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
                >
                    <input type='file' id='file' onChange={(e) => onChangeData(e)} name='avataUser' className='hidden' />
                    <label htmlFor='file' className='py-2 px-[46px] cursor-pointer block'>Update</label>
                </Button>
            </div>
        </div>
    )
}
