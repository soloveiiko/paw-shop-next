import { useRouter } from 'next/router';
import {
  getProductItem,
  getRunningQueriesThunk,
  useGetProductItemQuery,
} from '@services/catalogApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { ProductBody, Switch } from '@components';
import Preloader from '@components/Base/Preloader/Preloader';
import { wrapper } from '@redux/store';
import Head from 'next/head';

async function fetchProductId(slug) {
  try {
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
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    console.log('response data', data);
    return data;
  } catch (error) {
    console.error('Error fetching product item:', error);
    throw error;
  }
}
function Product() {
  const router = useRouter();
  const { productSlug: slug } = router.query;
  console.log('slug', slug);
  fetchProductId(slug);
  const result = useGetProductItemQuery(
    typeof slug === 'string' ? slug : skipToken,
    {
      skip: router.isFallback,
    }
  );
  const { data, isLoading, error, isError } = result;
  console.log('data', data);
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
      {data && data.data && <Switch product={data.data} />}
      {/*<SimilarProducts />*/}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { productSlug: slug } = context.query;
    if (slug) {
      const productId = await fetchProductId(slug);
      console.log('Server Side Props - Product ID:', productId);
      store.dispatch(getProductItem.initiate(slug));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);
export default Product;
