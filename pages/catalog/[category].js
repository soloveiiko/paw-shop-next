import { CategoryFilter, PetsFilter, ProductList, SortBy } from '@components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import {
  getProductByParams,
  getRunningQueriesThunk,
  useGetProductByParamsQuery,
} from '@services/catalogApi';
import Pagination from '@components/Base/Pagination/Pagination';
import { wrapper } from '@redux/store';

const sortByList = [
  { id: '1', name: 'Default', sort: 'default', order: 'desc' },
  { id: '2', name: 'More expensive at first', sort: 'price', order: 'desc' },
  { id: '3', name: 'The cheapest first', sort: 'price', order: 'asc' },
  { id: '4', name: 'The most popular first', sort: 'rating', order: 'desc' },
];

function Catalog() {
  const router = useRouter();
  const test = JSON.parse(JSON.stringify(router.query));
  console.log(test);
  const { category, sort, order, page } = JSON.parse(
    JSON.stringify(router.query)
  );
  const itemsPerPage = 1;
  const [sortItem, setSortItem] = useState(sortByList[0].sort);
  const [orderItem, setOrderItem] = useState(sortByList[0].order);
  const [currentPage, setCurrentPage] = useState(1);
  const result = useGetProductByParamsQuery(
    typeof category === 'string'
      ? {
          page: page,
          per_page: itemsPerPage,
          sort: sort,
          order: order,
          category: category,
        }
      : skipToken,
    {
      skip: router.isFallback,
    }
  );
  const { data, isLoading } = result;
  console.log(data);

  useEffect(() => {
    setSortItem(sortByList[0].sort);
    setOrderItem(sortByList[0].order);
    setCurrentPage(1);
  }, [category]);

  const handleSort = (sort, order) => {
    const url = `/catalog/${category}?sort=${sort}&order=${order}&page=1`;
    router.push(url);
    setSortItem(sort);
    setOrderItem(order);
    setCurrentPage(1);
  };
  const handlePagination = (selectedPage) => {
    setCurrentPage(selectedPage);
    const url = `/catalog/${category}?sort=${sortItem}&order=${orderItem}&page=${selectedPage}`;
    router.push(url);
  };
  return (
    <div className="page catalog-page">
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
      console.log('asdfsdfsd');
      store.dispatch(
        getProductByParams.initiate({
          sort: sort,
          order: order,
          page: page,
          per_page: 1,
          category: category,
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
