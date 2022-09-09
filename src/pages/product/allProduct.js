import React from 'react';
import BreadCrumb from 'src/components/BreadCrumb/BreadCrumb';
import Page from 'src/components/Page';
import Pagination from 'src/components/Pagination/Pagination';
import ProductItem from 'src/components/ProductItem/ProductItem';
import request from 'src/utils/request';

export default function allProduct({ products, pageCount }) {
  return (
    <Page title={'Tất cả sản phẩm'}>
      <div className="app ">
        <div className="container mt-0 pb-1 pt-[32px]">
        <BreadCrumb params={[
            {
              href: '/',
              label: 'Trang chủ'
            },
            {
              href: '/product/allProduct',
              label: 'Tất cả sản phẩm '
            }
          ]}
          />
          <ProductItem products={products} />
          {pageCount > 1 && <Pagination pageCount={pageCount} />}
        </div>
      </div>
    </Page>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const products = await request.get(`products/all?page=${page}&limit=16`);
  return {
    props: {
      products: products.data.product,
      pageCount: Math.ceil(products.data.product.length / 16),
    },
  };
};
