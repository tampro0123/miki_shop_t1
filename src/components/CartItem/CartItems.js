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

    function handleQuantity(item, method) {
        let newQuantity;
        if (method === "ADD") {
            newQuantity = 1
        }
        if (method === "SUB") {
            newQuantity = -1
        }



        let objData = {}
        const quantity = inforProducts.map(data => {
            if ((data.product === item.product) && (data.size === item.size)) {
                objData.id = item.product;
                objData.quantity = data.quantity + newQuantity;
                objData.size = data.size;
                objData.name = data.name,
                    objData.price = data.price,
                    objData.image = data.image
                return { ...data, quantity: objData.quantity }
            }
            return data
        })
        setDataItems(quantity)
        const data = axiosAuth({
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
            .then(res => console.log(res))


        if (method === "REMOVE") {
            let itemIndex = inforProducts.findIndex(e => e.product === item.product);
            // console.log(itemIndex)
            let html = inforProducts.map(data => {
                if ((data.product === item.product) && (data.size === item.size)) {
                    newQuantity = -data.quantity;
                    let a = [
                        ...inforProducts.slice(0, itemIndex),
                        ...inforProducts.slice(itemIndex + 1)
                    ]
                    console.log(a)
                    return setDataItems(a)
                }
                return data
            })
            return html
        }
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
                        <div key={index} className="flex gap-[41px]
                         items-center justify-between pb-[46px] 
                            border-b-[1px] pt-[46px] border-b-solid border-b-[#D8D8D8]">
                            <div className="max-w-[136px] shadow-md rounded-8">
                                <img src={item?.image} className="w-full" alt="" />
                            </div>
                            <div className="flex-1 ">
                                <div>
                                    <div className='mb-8 flex justify-between items-start'>
                                        <h3 className=" text-[20px] font-bold">{item.name}</h3>
                                        <button className="active:bg-black active:rounded-full" onClick={() => handleQuantity(item, 'REMOVE')}>
                                            <Close />
                                        </button>
                                    </div>
                                    <p>size : {item.size}</p>
                                </div>
                                <div>
                                    <div className='flex items-center '>
                                        <button className="active:bg-black active:rounded-full"
                                            onClick={() => handleQuantity(item, 'SUB')}
                                        >
                                            <Sub />
                                        </button>
                                        <p className="text-[20px] font-bold leading-7 w-7 text-center mx-4">{item.quantity}</p>
                                        <button className="active:bg-black active:rounded-full"
                                            onClick={() => handleQuantity(item, 'ADD')}>
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
