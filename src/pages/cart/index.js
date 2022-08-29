import React from 'react'
import Page from 'src/components/Page';
import CartUser from 'src/sections/cartInfor/CartUser'

import { useRecoilValue } from 'recoil'
import { cartState } from 'src/recoils/cartState'
export default function cart() {
    const value = useRecoilValue(cartState)
    return (
        <Page title="Cart">
            <div className="app mt-[24px] ">
                <div className="container mt-0">
                    <p>Breadcum</p>
                    {/* {value.length ? */}
                    <div className="mt-[48px]">
                        <CartUser />
                    </div>
                    {/* :
                        <h1>Chưa có sản phẩm</h1>} */}
                </div>
            </div>
        </Page>

    )
}
