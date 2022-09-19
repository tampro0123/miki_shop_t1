import BreadCrumb from 'src/components/BreadCrumb/BreadCrumb';
import { useEffect, useState } from 'react';
import Page from 'src/components/Page';
import CartUser from 'src/sections/cartInfor/CartUser';
import { useRecoilValue } from 'recoil';
import { cartState } from 'src/recoils/cartState';
import CartEmpty from 'src/sections/cartInfor/CartEmpty';
export default function cart() {
  const cartItems = useRecoilValue(cartState);
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    setDataItems(cartItems);
  }, [cartItems]);
  return (
    <Page title="Cart">
      <div className="app mt-[24px] ">
        <div className="container mt-0">
          <BreadCrumb
            params={[
              {
                href: '/',
                label: 'Trang chủ',
              },
              {
                href: '/product/allProduct',
                label: 'Tất cả sản phẩm ',
              },
              {
                href: '/cart',
                label: 'Giỏ hàng',
              },
            ]}
          />
          {!dataItems.length ? (
            <CartEmpty />
          ) : (
            <div className="mt-[48px]">
              <CartUser />
            </div>
          )}
        </div>
      </div>
    </Page>
  );
}
