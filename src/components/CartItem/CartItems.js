import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from 'src/recoils/cartState'
import { Add, Sub, Close2 } from 'src/components/Icons';
import FormatPrice from 'src/utils/formatPrice';
export default function CartItems() {
    const [dataItems, setDataItems] = useRecoilState(cartState)
    const [inforProducts, setInforProducts] = useState([])
    console.log(dataItems)
    const [scroll, setScroll] = useState('')
    const [test, setTest] = useState([
        {
            name: 1,
            text: 'dasd'
        },
        {
            name: 2,
            text: 'dadsadsd'
        },
    ])

    const removeItem = (item) => {
        const itemIndex = inforProducts.findIndex(e => e.id === item.id);
        setDataItems([
            ...inforProducts.slice(0, itemIndex),
            ...inforProducts.slice(itemIndex + 1)
        ])

    }
    function addQuantity(item) {
        // const itemIndex = inforProducts.findIndex(e => e.id === item.id);
        const html = inforProducts.map(data => {
            if (data.id == item) {
                return { ...data, quantity: data.quantity + 1 }

            }
            return data
        })
        setDataItems(html)
    }
    function subQuantity(item) {
        // const itemIndex = inforProducts.findIndex(e => e.id === item.id);
        const html = inforProducts.map(data => {
            if (data.id == item && data.quantity > 0) {
                return { ...data, quantity: data.quantity - 1 }
            }
            return data
        })
        setDataItems(html)
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
                {inforProducts.map((item, index) => {
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
                                            <Close2 />
                                        </button>
                                    </div>
                                    <p>size : {item.size}</p>
                                </div>
                                <div>
                                    <div className='flex items-center '>
                                        <button className="active:bg-black active:rounded-full"
                                            onClick={() => subQuantity(item.id)}
                                        >
                                            <Sub />
                                        </button>
                                        <p className="text-[20px] font-bold leading-7 w-7 text-center mx-4">{item.quantity}</p>
                                        <button className="active:bg-black active:rounded-full"
                                            onClick={() => addQuantity(item.id)}>
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
