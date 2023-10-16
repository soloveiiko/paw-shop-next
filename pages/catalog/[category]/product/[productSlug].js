import { ProductBody, SimilarProducts, Switch } from '@components';
import Head from 'next/head';
import { getProductItem, useGetProductItemQuery } from '@services/catalogApi';
import { wrapper } from '@redux/store';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/query';
import {
  getProductReviews,
  getRunningQueriesThunk,
  useGetProductReviewsQuery,
} from '@services/reviewApi';
import Preloader from '@components/Base/Preloader/Preloader';

async function fetchProductId(slug) {
  const response = await fetch(
    `https://dropshop.demka.online/api/variation/${slug}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        sHost: 'paw.shop',
        'Cache-Control': 'no-cache',
      },
    }
  );
  const data = await response.json();
  return data.data.product.id;
}
function Product(props) {
  console.log('data props', props);
  const router = useRouter();
  const { productSlug } = router.query;
  const productResult = useGetProductItemQuery(
    typeof productSlug === 'string' ? productSlug : skipToken,
    {
      skip: router.isFallback,
    }
  );
  const { data, isLoading, isError, error } = productResult;
  console.log('data product', productResult);
  const productId = productResult.data.data.product.id;
  const commentsResult = useGetProductReviewsQuery(
    { id: typeof productId === 'string' ? productId : skipToken },
    {
      skip: router.isFallback,
    }
  );

  return (
    <div className="page product-page">
      {data && data.seo && (
        <Head>
          <title>{data.seo.title}</title>
          {Object.keys(data.seo).map((el, index) => (
            <meta key={index} property={el} content={data.seo[el]} />
          ))}
        </Head>
      )}
      {isLoading && <Preloader />}
      {isError && (
        <div className="error">{error.message || 'An error occurred'}</div>
      )}
      {data && data.data && (
        <ProductBody data={data.data} switching={data.switching} />
      )}
      {data && data.data && (
        <Switch product={data.data} comments={commentsResult} />
      )}
      <SimilarProducts />
    </div>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { productSlug } = context.query;
    if (productSlug) {
      store.dispatch(getProductItem.initiate(productSlug));
    }
    const productId = await fetchProductId(productSlug);
    if (productId) {
      store.dispatch(getProductReviews.initiate({ id: productId }));
    }
    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: { productId },
    };
  }
);

// Solution for fetch request
// export async function getServerSideProps(context) {
//   const { productSlug } = context.query;
//   const productResponse = await fetch(
//     `https://dropshop.demka.online/api/variation/${productSlug}`,
//     {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         sHost: 'paw.shop',
//         'Cache-Control': 'no-cache',
//       },
//     }
//   );
//   const productData = await productResponse.json();
//
//   const productId = await fetchProductId(productSlug);
//   const commentsResponse = await fetch(
//     `https://dropshop.demka.online/api/comments/products/${productId}`,
//     {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         sHost: 'paw.shop',
//         'Cache-Control': 'no-cache',
//       },
//     }
//   );
//   const commentsData = await commentsResponse.json();
//   const allData = {
//     productSlug,
//     productId,
//     product: productData,
//     comments: commentsData,
//   };
//   return {
//     props: {
//       allData,
//     },
//   };
// }
export default Product;
