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
          <ProductItem products={products} />
          <Pagination pageCount={pageCount} />
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
