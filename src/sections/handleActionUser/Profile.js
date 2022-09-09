import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import Button from 'src/components/Button'
import { inforUser } from 'src/recoils/inforUser'
import convertToBase64 from 'src/sections/handleAction/functionHandle/convertImg'
export default function Profile() {
    const [loading, setLoading] = useState(true)
    const [avata, setAvata] = useRecoilState(inforUser)
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
            setAvata(prev => ({
                ...prev,
                image: base64
            }))
        });
    }
    console.log(changeAvata)
    console.log(avata)
    return (
        <div className="px-[40px] mt-[30px] flex gap-[10px]">
            <img
                width='100px'
                height='100px'
                className='rounded-8'
                src={changeAvata || avata.image}
            />
            <div>
                <p className='text-[20px] font-bold mb-[20px] '>{avata.name}</p>
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
