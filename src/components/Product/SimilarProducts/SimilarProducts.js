import React, { useEffect, useState } from 'react';
import ProductContainer from '@components/Base/ProductContainer/ProductContainer';
import { useGetProductsByParamsQuery } from '@services/catalogApi';

const SimilarProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const { data } = useGetProductsByParamsQuery({ per_page: 4, sort: 'random' });
  useEffect(() => {
    if (data) {
      setRandomProducts(data.data);
    }
  }, [data]);
  return (
    <section className="similar-products">
      <div className="container similar-products__container">
        <h2 className="similar-products__headline headline">
          You can like this
        </h2>
        <ProductContainer products={randomProducts} />
      </div>
    </section>
  );
};

export default SimilarProducts;
