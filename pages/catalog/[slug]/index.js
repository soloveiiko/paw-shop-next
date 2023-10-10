import { CategoryFilter, PetsFilter, ProductList, SortBy } from '@components';
import { useEffect, useState } from 'react';
import { useProductItemQuery } from '@services/catalogApi';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog, setCatalog } from '@redux/catalog/catalogSlice';
import { wrapper } from '@redux/store';

const sortByList = [
  { id: '1', name: 'Default', sort: 'default', order: 'desc' },
  { id: '2', name: 'More expensive at first', sort: 'price', order: 'desc' },
  { id: '3', name: 'The cheapest first', sort: 'price', order: 'asc' },
  { id: '4', name: 'The most popular first', sort: 'rating', order: 'desc' },
];

function Catalog({ data }) {
  const router = useRouter();
  const catalog = useSelector(selectCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    // Викликаємо setCatalog лише, якщо деякі дані доступні
    if (data) {
      dispatch(setCatalog(data));
    }
  }, [dispatch, data]);

  const handleSort = (sort, order) => {
    console.log('hello');
  };
  return (
    <div className="page catalog-page">
      {/*<Breadcrumbs />*/}
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
        {/*{data && data.meta && data.meta.last_page > 1 && (*/}
        {/*  <Pagination*/}
        {/*    pageCount={data.meta.last_page}*/}
        {/*    forcePage={data.meta.current_page}*/}
        {/*    onPageChange={handlePagination}*/}
        {/*  />*/}
        {/*)}*/}
      </section>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { slug } = context.params;
    const { data } = await useProductItemQuery('cat');

    store.dispatch(setCatalog(data));

    return {
      props: {
        data,
      },
    };
  }
);

export default Catalog;
