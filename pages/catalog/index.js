import { CategoryFilter, PetsFilter, ProductList, SortBy } from '@components';
import { useEffect, useState } from 'react';
import { useLazyProductsQuery } from '@services/catalogApi';
import { useParams } from 'next/navigation';
const sortByList = [
  { id: '1', name: 'Default', sort: 'default', order: 'desc' },
  { id: '2', name: 'More expensive at first', sort: 'price', order: 'desc' },
  { id: '3', name: 'The cheapest first', sort: 'price', order: 'asc' },
  { id: '4', name: 'The most popular first', sort: 'rating', order: 'desc' },
];
function Catalog() {
  const [sortItem, setSortItem] = useState(sortByList[0].sort);
  const [orderItem, setOrderItem] = useState(sortByList[0].order);
  const [currentPage, setCurrentPage] = useState(1);
  const { slug } = useParams();
  const [getCatalogList, { data }] = useLazyProductsQuery();
  const itemsPerPage = 1;
  // const navigate = useNavigate();
  console.log('catalog data', data);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCurrentPage(Number(params.get('page')) || 1);
    setSortItem(params.get('sort') || sortByList[0].sort);
    setOrderItem(params.get('order') || sortByList[0].order);
    getCatalogList({
      page: currentPage,
      per_page: itemsPerPage,
      sort: sortItem,
      order: orderItem,
      category: slug,
    });
    console.log('currentPage', currentPage);
  }, [slug, currentPage, sortItem, orderItem]);

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
// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   const res = await fetch(`https://restcountries.eu/rest/v2/name/${id}`);
//   const country = await res.json();
//
//   console.log(`Fetched place: ${country.name}`);
//   return { props: { country } };
// }

export default Catalog;
