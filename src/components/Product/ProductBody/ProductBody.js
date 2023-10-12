import { useState } from 'react';
import Amount from '@components/Base/Amount/Amount';
import StarsRange from '@components/Base/StarsRange/StarsRange';
import { useDispatch } from 'react-redux';
import ProductSlider from '@components/Product/ProductSlider/ProductSlider';
import {
  facebookBlue,
  icoReturn,
  telegramBlue,
  twitterBlue,
} from '@public/images';

const ProductBody = ({ data, switching, handleChooseVariation }) => {
  const [quantity, setQuantity] = useState(data.min_qty);
  const [selectedProperties, setSelectedProperties] = useState({});

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
            <StarsRange value={data.product.rating} />
            {data.product.comments_count && (
              <span className="product-body__stars-count">
                {data.product.comments_count}
              </span>
            )}
          </div>
          {data.sku && <div className="product-body__scu">SKU: {data.sku}</div>}
        </div>
        <ProductSlider images={data.images} />
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
                    className={`product-body__checkbox-btn${
                      selectedProperties[el.attribute.name]?.id ===
                      item.property.id
                        ? ' selected'
                        : ''
                    }`}
                    type="button"
                    onClick={() => handleChooseVariation(el, item)}
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
                    <div className="product-body__prev-price">
                      {data.price_old}$
                    </div>
                    <div className="product-body__curr-price">
                      {data.price}$
                    </div>
                  </>
                ) : (
                  <div className="product-body__price">{data.price}$</div>
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
            <img
              className="product-body__return-img"
              src={icoReturn}
              alt="return"
              width="30"
              height="30"
            />
            <span className="product-body__return-text">
              Free return within 15 days
            </span>
          </div>
          <div className="product-body__share share">
            <span className="share__subtitle">Share:</span>
            <div className="share__list">
              <div className="share__item_telegram">
                <img
                  className="share__image"
                  src={telegramBlue}
                  alt="Telegram"
                  width="18"
                  height="15"
                />
              </div>
              <div className="share__item_facebook">
                <img
                  className="share__image"
                  src={facebookBlue}
                  alt="Facebook"
                  width="10"
                  height="20"
                />
              </div>
              <div className="share__item_twitter">
                <img
                  className="share__image"
                  src={twitterBlue}
                  alt="Twitter"
                  width="20"
                  height="17"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBody;
