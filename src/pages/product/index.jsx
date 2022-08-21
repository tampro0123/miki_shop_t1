import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState } from 'react';
import Page from 'src/components/Page';
import Banner from 'src/assets/product/banner.jpg';
import { useRouter } from 'next/router';
import filterSearch from 'src/utils/filterSearch';
import request from 'src/utils/request';
import ProductItem from 'src/components/ProductItem/ProductItem';
import Pagination from 'src/components/Pagination/Pagination';

export default function Products({ products, pageCount }) {
  const router = useRouter();
  let sortChecked = useRef(' ');
  const [sortValue, setSortValue] = useState(' ');
  const handleSort = (e) => {
    sortChecked.current = e.target.value;
    setSortValue(e.target.value);
  };

  useLayoutEffect(() => {
    filterSearch({ router, sort: sortValue });
  }, [sortValue]);

  return (
    <Page title={'Products'}>
      <div className="app">
        <Image src={Banner} layouts="fill" />
        <div className="container mt-0">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-32 leading-10">Danh mục sản phẩm</h1>
            <div className="relative group">
              <select className="p-2 border-none" value={sortChecked.current} onChange={handleSort}>
                <option disabled defaultValue>
                  Sắp xếp theo
                </option>
                <option value=" ">Mặc định</option>
                <option value="price-up">Giá tăng dần</option>
                <option value="price-down">Giá giảm dần</option>
                <option value="lasted">Sản phẩm mới</option>
                <option value="sale">Sản phẩm ưu đãi</option>
              </select>
            </div>
          </div>
          <ProductItem products={products} />
          <Pagination pageCount={pageCount} />
        </div>
      </div>
    </Page>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const sort = query.sort || '';
  const category = query.category || '';
  const [{data}, {data: res}] = await Promise.all([
    request.get(`products/all?category=${category}`),
    request.get(`products/all?page=${page}&category=${category}&limit=16&sort=${sort}`)
  ])
  return {
    props: {
      products: res.product,
      pageCount: Math.ceil(data.product.length / 16),
    },
  };
};
