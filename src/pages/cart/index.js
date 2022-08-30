import { useState, useEffect } from 'react'
import Page from 'src/components/Page';
import CartUser from 'src/sections/cartInfor/CartUser'
import { useRecoilValue } from 'recoil'
import { cartState } from 'src/recoils/cartState'
import { EmptyCart, Close } from 'src/components/Icons'
export default function cart() {
    const value = useRecoilValue(cartState)

    const [dataCart, setDataCart] = useState([])
    useEffect(() => {
        setDataCart(value)
    }, [value])
    return (
        <Page title="Cart">
            <div className="app mt-[24px] ">
                <div className="container mt-0">
                    <p>Breadcum</p>
                    {dataCart.length ?
                        <div className="mt-[48px]">
                            <CartUser />
                        </div>
                        :
                        <div>
                            <EmptyCart />
                        </div>
                    }
                </div>
            </div>
        </Page>
    )
}
