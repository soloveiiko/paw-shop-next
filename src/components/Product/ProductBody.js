import React, { useEffect, useState } from 'react';
import Amount from '@components/Base/Amount/Amount';
import dynamic from 'next/dynamic';
import Icon from '@components/Base/Icon';

const DynamicRating = dynamic(
  () => import('@components/Base/StarsRange/StarsRange'),
  {
    ssr: false,
  }
);
const DynamicSlider = dynamic(
  () => import('@components/Product/ProductSlider'),
  {
    ssr: false,
  }
);
const ProductBody = ({ data, switching }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [quantity, setQuantity] = useState(data.min_qty);

  const handleAddToCart = async () => {
    console.log('added to cart');
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className="product-body">
      <div className="container product-body__container">
        <div className="product-body__top">
          {data.name && <h2>{data.name}</h2>}
          <div className="product-body__stars-range">
            {isClient && <DynamicRating value={data.product.rating} />}
            {data.product.comments_count && (
              <span className="product-body__stars-count">
                {data.product.comments_count}
              </span>
            )}
          </div>
          {data.sku && <div className="product-body__scu">SKU: {data.sku}</div>}
        </div>
        {isClient && <DynamicSlider images={data.images} />}
        {/*<ProductSlider images={data.images} />*/}
        <div className="product-body__checkbox-list">
          <div className="product-body__form">
            {switching.map((el) => (
              <div
                key={el.attribute.id}
                className="product-body__checkbox-item"
              >
                <span className="product-body__subtitle">
                  {el.attribute.name}:
                </span>
                {el.properties.map((item) => (
                  <button
                    key={item.property.id}
                    className={`product-body__checkbox-btn`}
                    type="button"
                  >
                    {item.property.value}
                  </button>
                ))}
              </div>
            ))}
            <div className="product-body__quantity">
              <span className="product-body__subtitle">Quantity:</span>
              <Amount
                quantity={quantity}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            </div>
            <div className="product-body__buy">
              <div className="product-body__price-container">
                {data.prices.discount === 1 ? (
                  <>
                    <span className="product-body__prev-price">
                      {data.price_old}$
                    </span>
                    <span className="product-body__curr-price">
                      {data.price}$
                    </span>
                  </>
                ) : (
                  <span className="product-body__price">{data.price}$</span>
                )}
              </div>
              <div className="product-body__btn-container">
                <button
                  className="product-body__in-basket"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                <button className="product-body__buy-btn">Buy 1 click</button>
              </div>
            </div>
          </div>
          <div className="product-body__return">
            <Icon className="product-body__return-img" name="return" />
            <span className="product-body__return-text">
              Free return within 15 days
            </span>
          </div>
          <div className="product-body__share share">
            <span className="share__subtitle">Share:</span>
            <div className="share__list">
              <div className="share__item_telegram">
                <Icon className="share__image" name="telegram-blue" />
              </div>
              <div className="share__item_facebook">
                <Icon className="share__image" name="facebook-blue" />
              </div>
              <div className="share__item_twitter">
                <Icon className="share__image" name="twitter-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBody;
