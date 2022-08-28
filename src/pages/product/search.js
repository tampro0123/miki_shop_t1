import React from 'react';
import Page from 'src/components/Page';
import Pagination from 'src/components/Pagination/Pagination';
import ProductItem from 'src/components/ProductItem/ProductItem';
import request from 'src/utils/request';

export default function allProduct({ products, pageCount }) {
  return (
    <Page title={'Sản phẩm tìm kiếm'}>
      <div className="app ">
        <div className="container mt-0">
        {products.length > 0 ? (
            <ProductItem products={products} />
          ) : (
            <div className="mt-10">
              <p className='text-center text-5xl text-red-500'>
              Không tìm thấy sản phẩm nào
              </p>
              </div>
          )}
          {
            pageCount > 1 &&
          <Pagination pageCount={pageCount} />
          }
        </div>
      </div>
    </Page>
  );
}

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  const keyWord = query.keyword;
  const products = await request.get(`search?page=${page}&limit=16&keyword=${keyWord}`);
  return {
    props: {
      products: products.data.product,
      pageCount: Math.ceil(products.data.product.length / 16),
    },
  };
};
