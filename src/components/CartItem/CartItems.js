import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from 'src/recoils/cartState'
import { Add, Sub, Close } from 'src/components/Icons';
import FormatPrice from 'src/utils/formatPrice';
import axios from 'axios'
import { dataUser } from 'src/recoils/dataUser.js'
import { useRecoilValue } from 'recoil'
import axiosAuth from 'src/utils/axios'
export default function CartItems() {
    const inforUser = useRecoilValue(dataUser)
    const [dataItems, setDataItems] = useRecoilState(cartState)
    const [inforProducts, setInforProducts] = useState([])
    const [scroll, setScroll] = useState('')
    const removeItem = async (item) => {
        const itemIndex = inforProducts.findIndex(e => e.id === item.id);
        const html = inforProducts.map(data => {
            if ((data.id === item.id) && (data.size === item.size)) {
                return setDataItems([
                    ...inforProducts.slice(0, itemIndex),
                    ...inforProducts.slice(itemIndex + 1)
                ])

            }
            return data
        })
        const data = await axiosAuth({
            method: "POST",
            url: '/api/cart/addToCart',
            data: {
                userId: inforUser.id,
                product: {
                    id: item.id,
                    size: item.size,
                    quantity: 0,
                }
            },
        })
        console.log(data.data)
    }
    async function addQuantity(item) {
        let objData = {}
        const html = inforProducts.map(data => {
            if ((data.id === item.id) && (data.size === item.size)) {
                objData.id = item.id;
                objData.quantity = data.quantity + 1;
                objData.size = data.size;
                objData.name = data.name,
                    objData.price = data.price,
                    objData.image = data.image
                return { ...data, quantity: data.quantity + 1 }

            }
            return data
        })
        setDataItems(html)
        const data = await axiosAuth({
            method: "POST",
            url: '/api/cart/addToCart',
            data: {
                userId: inforUser.id,
                product: {
                    id: objData.id,
                    size: objData.size,
                    quantity: objData.quantity,
                    name: objData.name,
                    price: objData.price,
                    image: objData.image
                }
            },
        })
        console.log(data.data)
    }
    async function subQuantity(item) {
        let objData = {}
        const html = inforProducts.map(data => {
            if ((data.id === item.id) && (data.size === item.size)) {
                objData.id = item.id;
                objData.quantity = data.quantity - 1;
                objData.size = data.size;
                objData.name = data.name
                objData.price = data.price
                objData.image = data.image
                return { ...data, quantity: data.quantity - 1 }

            }
            return data
        })
        setDataItems(html)
        const data = await axiosAuth({
            method: "POST",
            url: '/api/cart/addToCart',
            data: {
                userId: inforUser.id,
                product: {
                    id: objData.id,
                    size: objData.size,
                    quantity: objData.quantity,
                    name: objData.name,
                    price: objData.price,
                    image: objData.image
                }
            },
        })
        console.log(data.data)
    }
    useEffect(() => {
        setInforProducts(dataItems)
        setScroll(dataItems.length)
    }, [dataItems])
    return (
        <div className="flex flex-col">
            <h1 className="text-[24px] font-bold">Giỏ hàng</h1>
            <div className={scroll > 3 ? "flex flex-col overflow-y-scroll max-h-[850px]" :
                "flex flex-col max-h-[850px]"}>
                {inforProducts?.map((item, index) => {
                    return (
                        <div key={index} className="flex gap-[41px] items-center justify-between pb-[46px] 
                            border-b-[1px] pt-[46px] border-b-solid border-b-[#D8D8D8]">
                            <div className="max-w-[136px] shadow-md rounded-8">
                                <img src={item?.image} className="w-full" alt="" />
                            </div>
                            <div className="flex-1 ">
                                <div>
                                    <div className='mb-8 flex justify-between items-start'>
                                        <h3 className=" text-[20px] font-bold">{item.name}</h3>
                                        <button className="active:bg-black active:rounded-full" onClick={() => removeItem(item)}>
                                            <Close />
                                        </button>
                                    </div>
                                    <p>size : {item.size}</p>
                                </div>
                                <div>
                                    <div className='flex items-center '>
                                        <button className="active:bg-black active:rounded-full"
                                            onClick={() => subQuantity(item)}
                                        >
                                            <Sub />
                                        </button>
                                        <p className="text-[20px] font-bold leading-7 w-7 text-center mx-4">{item.quantity}</p>
                                        <button className="active:bg-black active:rounded-full"
                                            onClick={() => addQuantity(item)}>
                                            <Add />
                                        </button>
                                    </div>
                                    <p className="text-price-text text-[24px] font-bold mt-4">
                                        <FormatPrice price={item?.price * item?.quantity} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
