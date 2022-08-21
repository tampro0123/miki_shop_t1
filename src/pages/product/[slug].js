import Image from 'next/image';
import Page from 'src/components/Page';
import Footer from 'src/layouts/footer';
import Header from 'src/layouts/header';
import axios from 'axios';
import request from 'src/utils/request';
import CardDetail from 'src/sections/productDetail/CardDetail';
import MoreDetail from 'src/sections/productDetail/MoreDetail';
import { Separate } from 'src/components/Icons';
import ProductItem from 'src/components/ProductItem/ProductItem';

const DetailProduct = ({ product, productList, feedbacks }) => {


  return (
    <Page title={product.name}>
      <div className="app ">
        <Header />
        <div className="container m-0">
          <CardDetail product={product} />
          <MoreDetail product={product} feedbacks={feedbacks}/>
          <div className="flex justify-center mt-[60px]">
            <Separate />
          </div>
          <ProductItem products={productList} />
        </div>
        <Footer />
      </div>
    </Page>
  );
};

export const getStaticPaths = async () => {
  const res = await request.get('products/all');
  const products = await res.data.product;
  const paths = products.map((product) => {
    return {
      params: {
        slug: product.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await request.get(`products/${slug}`)
  const {_id : targetId, category} = res.data.product;
  console.log(targetId);
  const [{ data: feedbacks }, { data }] = await axios.all([
    request.get(`feedback/${targetId}`),
    request.get(`products/all?page=1&limit=4&category=${category}`),
  ]);
  return {
    props: {
      productList: data.product,
      product: res.data.product,
      feedbacks: feedbacks.feedbacks,
    },
    revalidate: 10,
  };
};

export default DetailProduct;
