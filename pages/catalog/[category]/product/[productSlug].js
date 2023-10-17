import { ProductBody, SimilarProducts, Switch } from '@components';
import Head from 'next/head';
import {
  getProductItem,
  useGetProductItemQuery,
  getRunningQueriesThunk,
} from '@services/catalogApi';
import { wrapper } from '@redux/store';
import { useRouter } from 'next/router';
import { skipToken } from '@reduxjs/toolkit/query';
import {
  getProductReviews,
  getCommentRunningQueriesThunk,
  useGetProductReviewsQuery,
} from '@services/reviewApi';
import Preloader from '@components/Base/Preloader/Preloader';
import { useState } from 'react';
import Breadcrumbs from '@components/Base/Breadcrumbs/Breadcrumbs';

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
function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { productSlug } = router.query;

  const productResult = useGetProductItemQuery(
    typeof productSlug === 'string' ? productSlug : skipToken,
    {
      skip: router.isFallback,
    }
  );
  const { data, isLoading, isError, error } = productResult;

  const productId = data.data.product.id;
  const commentsResult = useGetProductReviewsQuery(
    {
      id: typeof productId === 'string' ? productId : skipToken,
      params: { page: currentPage, per_page: 3 },
    },
    {
      skip: router.isFallback,
    }
  );
  const handlePagination = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

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
      <Breadcrumbs item={data.data.name} />
      {data && data.data && (
        <ProductBody data={data.data} switching={data.switching} />
      )}
      {data && data.data && (
        <Switch
          product={data.data}
          comments={commentsResult}
          handlePagination={handlePagination}
        />
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
      store.dispatch(
        getProductReviews.initiate({
          id: productId,
          params: { page: 1, per_page: 3 },
        })
      );
    }
    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    await Promise.all(store.dispatch(getCommentRunningQueriesThunk()));
    return {
      props: {},
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
