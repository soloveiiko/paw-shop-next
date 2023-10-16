import { ProductBody, Switch } from '@components';
import Head from 'next/head';

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
  console.log('response data', data.data.product.id);
  return data.data.product.id;
}
function Product(props) {
  console.log('data props', props.allData.product);
  return (
    <div className="page product-page">
      {props.allData.product.data && props.allData.product.seo && (
        <Head>
          <title>{props.allData.product.seo.title}</title>
          {Object.keys(props.allData.product.seo).map((el, index) => (
            <meta
              key={index}
              property={el}
              content={props.allData.product.seo[el]}
            />
          ))}
        </Head>
      )}
      {/*{isLoading && <Preloader />}*/}
      {/*{isError && (*/}
      {/*  <div className="error">{error.message || 'An error occurred'}</div>*/}
      {/*)}*/}
      {props.allData.product.data && (
        <ProductBody
          data={props.allData.product.data}
          switching={props.allData.product.switching}
        />
      )}
      {props.allData.product.data && (
        <Switch
          product={props.allData.product.data}
          comments={props.allData.comments}
        />
      )}
      {/*<SimilarProducts />*/}
    </div>
  );
}
export async function getServerSideProps(context) {
  const { productSlug } = context.query;
  const productResponse = await fetch(
    `https://dropshop.demka.online/api/variation/${productSlug}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        sHost: 'paw.shop',
        'Cache-Control': 'no-cache',
      },
    }
  );
  const productData = await productResponse.json();

  const productId = await fetchProductId(productSlug);
  const commentsResponse = await fetch(
    `https://dropshop.demka.online/api/comments/products/${productId}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        sHost: 'paw.shop',
        'Cache-Control': 'no-cache',
      },
    }
  );
  const commentsData = await commentsResponse.json();
  const allData = {
    productSlug,
    productId,
    product: productData,
    comments: commentsData,
  };
  return {
    props: {
      allData,
    },
  };
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (context) => {
//     const { productSlug: slug } = context.query;
//     if (slug) {
//       const productId = await fetchProductId(slug);
//       console.log('Server Side Props - Product ID:', productId);
//       store.dispatch(getProductItem.initiate(slug));
//     }
//
//     await Promise.all(store.dispatch(getRunningQueriesThunk()));
//     return {
//       props: {},
//     };
//   }
// );
export default Product;
