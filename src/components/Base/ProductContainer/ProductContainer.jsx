import React from 'react';
import ProductItem from '@components/ProductItem/ProductItem';

const ProductContainer = ({ products }) => {
  const productsList = products.slice(-4);
  return (
    <div className="products-container">
      {productsList.map((product) => (
        <ProductItem
          product={product}
          key={product.product.id}
          id={product.slug}
          category={product.product.category.slug}
          isDiscount={product.prices.discount}
          discountPercent={product.discount_percent}
          image={product.images[0].url}
          name={product.product.name}
          rating={product.product.rating}
          commentsCount={product.product.comments_count}
          currPrice={product.prices.now}
          oldPrice={product.prices.old}
        />
      ))}
    </div>
  );
};

export default ProductContainer;
