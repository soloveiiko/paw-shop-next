import { CategoryFilter, PetsFilter, ProductList, SortBy } from '@components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import {
  getProductsByParams,
  getRunningQueriesThunk,
  useGetProductsByParamsQuery,
} from '@services/catalogApi';
import Pagination from '@components/Base/Pagination/Pagination';
import { wrapper } from '@redux/store';
import Preloader from '@components/Base/Preloader/Preloader';
import Head from 'next/head';
import Breadcrumbs from '@components/Base/Breadcrumbs/Breadcrumbs';

const sortByList = [
  { id: '1', name: 'Default', sort: 'default', order: 'desc' },
  { id: '2', name: 'More expensive at first', sort: 'price', order: 'desc' },
  { id: '3', name: 'The cheapest first', sort: 'price', order: 'asc' },
  { id: '4', name: 'The most popular first', sort: 'rating', order: 'desc' },
];

function CatalogCategory() {
  const router = useRouter();
  const { category, sort, order, page } = router.query;
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const [sortItem, setSortItem] = useState(sort || 'default');
  const [orderItem, setOrderItem] = useState(order || 'desc');
  const result = useGetProductsByParamsQuery(
    typeof category === 'string'
      ? {
          sort: sort || 'default',
          order: order || 'desc',
          page: page || currentPage,
          per_page: 1,
          category: category || 'cat',
        }
      : skipToken,
    {
      skip: router.isFallback,
    }
  );
  const { data, isLoading, isError, error } = result;
  console.log('result', data);
  useEffect(() => {
    setSortItem(sort || 'default');
    setOrderItem(order || 'desc');
    setCurrentPage(1);
  }, [category]);

  const handleSort = (sort, order) => {
    setSortItem(sort);
    setOrderItem(order);
    setCurrentPage(1);
    const url = `/catalog/${category}?sort=${sort}&order=${order}&page=1`;
    router.push(url);
  };
  const handlePagination = (selectedPage) => {
    setCurrentPage(selectedPage);
    const url = `/catalog/${category}?sort=${sortItem}&order=${orderItem}&page=${selectedPage}`;
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
            sortItem={sortItem}
            orderItem={orderItem}
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
    const { category, sort, order, page } = context.query;
    if (category) {
      store.dispatch(
        getProductsByParams.initiate({
          sort: sort || 'default',
          order: order || 'desc',
          page: page || 1,
          per_page: 1,
          category: category || 'cat',
        })
      );
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);

export default CatalogCategory;
