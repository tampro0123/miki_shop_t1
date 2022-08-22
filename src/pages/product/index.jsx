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
  const sortChecked = useRef(' ');
  const [sortValue, setSortValue] = useState(' ');
  const [order, setOrder] = useState('');
  const handleSort = (e) => {
    setSortValue(e.target.id);
  };
  useLayoutEffect(() => {
    filterSearch({ router, sort: sortValue });
  }, [sortValue]);

  return (
    <Page title={'Products'}>
      <div className="app">
        <Image src={Banner} layouts="fill" className="relative -z-10" />
        <div className="container mt-0">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-32 leading-10">Danh mục sản phẩm</h1>
            <div className="flex items-center">
              <div className='flex'>
                <div
                  onClick={handleSort}
                  id="price"
                  className={
                    sortValue == "price"
                      ? 'cursor-pointer p-2 bg-red-600 text-white'
                      : 'cursor-pointer p-2 bg-white text-primary-text'
                  }
                >
                  Giá
                </div>
                <div
                  onClick={handleSort}
                  id="sale"
                  className={
                    sortValue == "sale"
                      ? 'cursor-pointer p-2 bg-red-600 text-white'
                      : 'cursor-pointer p-2 bg-white text-primary-text'
                  }
                >
                  Ưu đãi
                </div>
                <div
                  onClick={handleSort}
                  id="time"
                  className={
                    sortValue == "time"
                      ? 'cursor-pointer p-2 bg-red-600 text-white'
                      : 'cursor-pointer p-2 bg-white text-primary-text'
                  }
                >
                  Thời gian
                </div>
              </div>
              <select className="p-2 border-none">
                <option disabled value="price-up">
                  Lọc
                </option>
                <option defaultValue value="price-up">
                  Tăng dần
                </option>
                <option value="lasted">Giảm dần</option>
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
  const [{ data }, { data: res }] = await Promise.all([
    request.get(`products/all?category=${category}`),
    request.get(`products/all?page=${page}&category=${category}&limit=16&sort=${sort}`),
  ]);
  return {
    props: {
      products: res.product,
      pageCount: Math.ceil(data.product.length / 16),
    },
  };
};
