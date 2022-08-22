import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Page from 'src/components/Page';
import Banner from 'src/assets/product/banner.jpg';
import { useRouter } from 'next/router';
import filterSearch from 'src/utils/filterSearch';
import request from 'src/utils/request';
import ProductItem from 'src/components/ProductItem/ProductItem';
import Pagination from 'src/components/Pagination/Pagination';

export default function Products({ products, pageCount }) {
  const router = useRouter();
  const [sortValue, setSortValue] = useState('price');
  const [orderValue, setOrderValue] = useState('');
  const handleSort = (e) => {
    if(e.target.id == 'sale') {
    setSortValue(e.target.id);
    setOrderValue("desc");
  } else {
    setSortValue(e.target.id);
    setOrderValue("");
  }
  };
  const handleOrder = (e) => {
    setOrderValue(e.target.value);
  };
  useEffect(() => {
    filterSearch({ router, sort: sortValue,  order: orderValue});
  }, [sortValue, orderValue]);

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
                      ? 'cursor-pointer py-2 px-6 bg-red-600 text-white mr-3'
                      : 'cursor-pointer py-2 px-6 bg-white text-primary-text mr-3'
                  }
                >
                  Giá
                </div>
                <div
                  onClick={handleSort}
                  id="sale"
                  className={
                    sortValue == "sale"
                      ? 'cursor-pointer p-2 px-4 bg-red-600 text-white mr-3'
                      : 'cursor-pointer p-2 px-4 bg-white text-primary-text mr-3'
                  }
                >
                  Ưu đãi
                </div>
                <div
                  onClick={handleSort}
                  id="time"
                  className={
                    sortValue == "time"
                      ? 'cursor-pointer p-2 px-4 bg-red-600 text-white mr-3'
                      : 'cursor-pointer p-2 px-4 bg-white text-primary-text mr-3'
                  }
                >
                  Thời gian
                </div>
              </div>
              {
                sortValue == "sale" ?
              <select className="p-2 border-none" onChange={handleOrder}>
                <option disabled value="">
                  Lọc
                </option>
                <option  value="desc">Giảm dần</option>
                <option value="">
                  Tăng dần
                </option>
              </select> : <select className="p-2 border-none" onChange={handleOrder}>
                <option disabled value="">
                  Lọc
                </option>
                <option value="">
                  Tăng dần
                </option>
                <option  value="desc">Giảm dần</option>
              </select>
              }
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
  const order = query.order || '';
  const [{ data }, { data: res }] = await Promise.all([
    request.get(`products/all?category=${category}`),
    request.get(`products/all?page=${page}&category=${category}&limit=16&sort=${sort}&order=${order}`),
  ]);
  return {
    props: {
      products: res.product,
      pageCount: Math.ceil(data.product.length / 16),
    },
  };
};
