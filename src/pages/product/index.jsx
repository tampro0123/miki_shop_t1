import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Page from 'src/components/Page';
import Banner from 'src/assets/product/banner.jpg';
import request from 'src/utils/request';
import ProductItem from 'src/components/ProductItem/ProductItem';
import Pagination from 'src/components/Pagination/Pagination';
import SortProduct from 'src/sections/sortProduct/SortProduct';
import BreadCrumb from 'src/components/BreadCrumb/BreadCrumb';

export default function Products( { products, pageCount, category }) {
  return (
    <Page title={'Products'}>
      <div className="app">
        <Image src={Banner} layouts="fill" className="relative -z-10" />
        <div className="container mt-0 pb-1 pt-[32px]">
          <BreadCrumb params={[
            {
              href: '/',
              label: 'Trang chủ'
            },
            {
              href: '/product/allProduct',
              label: 'Tất cả sản phẩm '
            },
            {
              href: `/product?category=${category}&sort=price&order=+`,
              label: category == "nhan" ?  products[0].name.split(' ')[0] : `${products[0]?.name.split(' ')[0]} ${products[0]?.name.split(' ')[1]}`,
            },
          ]}
          />
          <SortProduct />
          <ProductItem products={products} />
          {pageCount > 1 && <Pagination pageCount={pageCount} />}
        </div>
      </div>
    </Page>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const sort = query.sort || ' ';
  const category = query.category ;
  const order = query.order || ' ';
  const [{ data }, { data: res }] = await Promise.all([
    request.get(`products/all?category=${category}`),
    request.get(`products/all?page=${page}&category=${category}&limit=16&sort=${sort}&order=${order}`),
  ]);
  return {
    props: {
      products: res.product,
      pageCount: Math.ceil(data.product.length / 16),
      category: category,
    },
  };
};
