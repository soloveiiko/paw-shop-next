const ProductCharacteristics = ({ description }) => {
  return (
    <div className="product-characteristics">
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default ProductCharacteristics;
