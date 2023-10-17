import Head from 'next/head';
import { useRouter } from 'next/router';
import { wrapper } from '@redux/store';
import {
  getProductsByParams,
  getRunningQueriesThunk,
  useGetProductsByParamsQuery,
} from '@services/catalogApi';
import {
  Breadcrumbs,
  CategoryFilter,
  Pagination,
  PetsFilter,
  Preloader,
  ProductList,
  SortBy,
} from '@components';

const sortByList = [
  { id: '1', name: 'Default', sort: 'default', order: 'desc' },
  { id: '2', name: 'More expensive at first', sort: 'price', order: 'desc' },
  { id: '3', name: 'The cheapest first', sort: 'price', order: 'asc' },
  { id: '4', name: 'The most popular first', sort: 'rating', order: 'desc' },
];

function Catalog() {
  const router = useRouter();
  const { sort, order, page } = router.query;
  const result = useGetProductsByParamsQuery({
    sort: sort || 'default',
    order: order || 'desc',
    per_page: 2,
    page: page || 1,
  });
  const { data, isLoading, isError, error } = result;

  const handleSort = (sort, order) => {
    const url = `/catalog?sort=${sort}&order=${order}&page=1`;
    router.push(url);
  };
  const handlePagination = (selectedPage) => {
    const url = `/catalog?sort=${sort || 'default'}&order=${
      order || 'desc'
    }&page=${selectedPage}`;
    router.push(url);
  };
  return (
    <div className="page catalog-page">
      {data && data.seo && (
        <Head>
          <title>{data.seo.title}</title>
          {Object.keys(data.seo).map((el, index) => (
            <meta key={index} property={el} content={data.seo[el]} />
          ))}
        </Head>
      )}
      {isLoading && <Preloader />}
      {isError && <div className="error">{error}</div>}
      <Breadcrumbs item="Category" />
      <h2>Catalog</h2>
      <section className="catalog-page__filters">
        <PetsFilter />
        <div className="container catalog-page__filters-container">
          <CategoryFilter />
          <SortBy
            sortByList={sortByList}
            handleSort={handleSort}
            sortItem={sort}
            orderItem={order}
          />
        </div>
      </section>
      <section className="container catalog-page__product-container">
        {data && <ProductList currentItems={data.data} />}
        {data && data.meta && data.meta.last_page > 1 && (
          <Pagination
            pageCount={data.meta.last_page}
            forcePage={data.meta.current_page}
            onPageChange={handlePagination}
          />
        )}
      </section>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { sort, order, page } = context.query;
    if (context) {
      store.dispatch(
        getProductsByParams.initiate({
          sort: sort || 'default',
          order: order || 'desc',
          per_page: 2,
          page: page || 1,
        })
      );
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);

export default Catalog;
