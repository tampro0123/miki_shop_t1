import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState } from 'react';
import Page from 'src/components/Page';
import Footer from 'src/layouts/footer';
import Header from 'src/layouts/header';
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
        <Header />
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
          <div className="grid grid-cols-4 gap-10  mt-[70px]">
            {products.map((product, i) => {
              return (
                <div key={product?.name} className="flex flex-col-reverse text-center font-bold relative z-10 ">
                  <Button primary className="w-full mt-6 hover-btn-primary peer">
                    Thêm vào giỏ hàng
                  </Button>
                  <p className="text-price-text mt-[6px]">
                    {new Intl.NumberFormat('vi-VN').format(
                      Math.floor(product?.storage[0].price - (product?.storage[0].price * product.discount) / 100)
                    )}{' '}
                    đ
                  </p>
                  <p className="text-[20px] mt-6 text-trumcate2">{product.name}</p>
                  <div className="hover:shadow-product hover:scale-[1.01] shadow-md rounded-16 peer-hover:shadow-product relative">
                    <Link href={`product/${product.slug}/${product._id}`}>
                      <a>
                        <Image
                          src={product.images[0].src}
                          alt="Best seller product"
                          placeholder="empty"
                          width="254"
                          height="300"
                          layout="fixed"
                          className="rounded-16"
                        />
                      </a>
                    </Link>
                    {product.discount ? (
                      <p className="absolute top-0 left-0 px-3 inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 ">
                        <span className="relative text-white">Sale</span>
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <ReactPaginate
            className="flex items-center float-right mt-12"
            pageLinkClassName="px-3 py-1 border border-1 solid hover:bg-[#ccc]"
            pageClassName="mx-2"
            activeLinkClassName="bg-primary-text text-white select-none cursor-not-allowed hover:bg-primary-text"
            activeClassName="select-none"
            previousLinkClassName="px-3 py-1 border border-1 solid hover:bg-[#ccc]"
            nextLinkClassName="px-3 py-1 border border-1 solid hover:bg-[#ccc]"
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            pageCount={pageCount}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
          />
        </div>
        <Footer />
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
