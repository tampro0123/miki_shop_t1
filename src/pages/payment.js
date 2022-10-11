// Import library
import React from 'react';
// Import component, function, asset
import PaymentSection from 'src/sections/body/PaymentSection';
import Page from 'src/components/Page';
import BreadCrumb from 'src/components/BreadCrumb/BreadCrumb';

const payment = () => {
  // UI
  return (
    <Page title="Payment">
      <div className="app">
        <div className='container mt-0'>
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
        </div>
        <div className="flex justify-center">
          <PaymentSection />
        </div>
      </div>
    </Page>
  );
};

export default payment;
