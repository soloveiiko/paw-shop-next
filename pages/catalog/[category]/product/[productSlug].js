import { useRouter } from 'next/router';
import {
  getProductItem,
  getRunningQueriesThunk,
  useGetProductItemQuery,
} from '@services/catalogApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { ProductBody } from '@components';
import Preloader from '@components/Base/Preloader/Preloader';
import { wrapper } from '@redux/store';

function Product() {
  const router = useRouter();
  const { productSlug: slug } = router.query;
  console.log('slug', slug);
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
      {isLoading && <Preloader />}
      {isError && (
        <div className="error">{error.message || 'An error occurred'}</div>
      )}
      {data && data.data && (
        <ProductBody
          data={data.data}
          switching={data.switching}
          // selectedVariation={selectedVariation}
          // handleChooseVariation={handleChooseVariation}
        />
      )}
      {/*<Switch product={data.data} />*/}
      {/*<SimilarProducts />*/}
    </div>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { productSlug: slug } = context.query;
    if (slug) {
      store.dispatch(getProductItem.initiate(slug));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);
export default Product;
