import { useEffect, useState } from 'react'
import Page from 'src/components/Page';
import CartUser from 'src/sections/cartInfor/CartUser'
import { useRecoilValue } from 'recoil'
import { cartState } from 'src/recoils/cartState'
import CartEmpty from 'src/sections/cartInfor/CartEmpty'
export default function cart() {
    const cartItems = useRecoilValue(cartState);
    const [dataItems, setDataItems] = useState([]);
    useEffect(() => {
        setDataItems(cartItems)
    }, [cartItems])
    return (
        <Page title="Cart">
            <div className="app mt-[24px] ">
                <div className="container mt-0">
                    <p>Breadcum</p>
                    {dataItems.length ?
                        <div className="mt-[48px]">
                            <CartUser />
                        </div>
                        :
                        <CartEmpty />
                    }
                </div>
            </div>
        </Page>

    )
}
