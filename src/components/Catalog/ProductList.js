import ProductItem from '@components/ProductItem/ProductItem';

function ProductList({ currentItems }) {
  console.log(currentItems);
  return (
    <div className="product-list">
      <div className="product-list__wrapper">
        {currentItems.map((product) => (
          <ProductItem
            product={product}
            key={product.product.id}
            id={product.slug}
            category={product.product.category.slug}
            isDiscount={product.prices.discount}
            discountPercent={product.discount_percent}
            image={product.images[0].conversions.big.url}
            name={product.product.name}
            rating={product.product.rating}
            commentsCount={product.product.comments_count}
            currPrice={product.prices.now}
            oldPrice={product.prices.old}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
