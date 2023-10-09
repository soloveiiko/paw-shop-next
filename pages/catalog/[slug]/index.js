import { CategoryFilter, PetsFilter, ProductList, SortBy } from '@components';
import { useState } from 'react';
import { getProducts, useProductItemQuery } from '@services/catalogApi';
import { useRouter } from 'next/router';

const sortByList = [
  { id: '1', name: 'Default', sort: 'default', order: 'desc' },
  { id: '2', name: 'More expensive at first', sort: 'price', order: 'desc' },
  { id: '3', name: 'The cheapest first', sort: 'price', order: 'asc' },
  { id: '4', name: 'The most popular first', sort: 'rating', order: 'desc' },
];

export const getServerSideProps = async (context) => {
  const { data } = await getProducts();
  const products = data.items;

  return {
    props: {
      products,
    },
  };
};
function Catalog({ items }) {
  const router = useRouter();
  const slug = router.query.slug;
  console.log(slug);
  const [sortItem, setSortItem] = useState(sortByList[0].sort);
  const [orderItem, setOrderItem] = useState(sortByList[0].order);

  const { data } = useProductItemQuery(slug);
  console.log('productItem data', items);

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

export default Catalog;
