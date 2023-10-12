import { ProductBody, SimilarProducts, Switch } from '@components';

function Product() {
  return (
    <div className="page product-page">
      <ProductBody
        data={data.data}
        switching={data.switching}
        selectedVariation={selectedVariation}
        handleChooseVariation={handleChooseVariation}
      />
      <Switch product={data.data} />
      <SimilarProducts />
    </div>
  );
}

export default Product;
