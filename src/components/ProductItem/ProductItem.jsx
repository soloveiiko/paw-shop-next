import React from 'react';
import { icoBasket } from '@static';
import StarsRange from '@components/Base/StarsRange/StarsRange';
import Image from '@components/Base/Image/Image';
import { Link } from 'react-router-dom';
import { useAddToCartMutation } from '@services/cartApi';
import { setCartId } from '@redux/cart/cartSlice';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const [addToCart] = useAddToCartMutation();
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    const result = await addToCart({
      id: props.product.id,
      data: { quantity: 1 },
    });
    if (result.data) {
      dispatch(setCartId(result.data.cart_id));
      Cookies.set('cart_id', result.data.cart_id);
    }
  };
  return (
    <div className="products-item">
      <div className="products-item__additions">
        {/*{product.isNew && <div className="products-item__new">New</div>}*/}
        {props.isDiscount === 1 && (
          <div className="products-item__discount">
            -{props.discountPercent}%
          </div>
        )}
      </div>
      <Link to={`/catalog/${props.category}/product/${props.id}`}>
        <div className="products-item__img-container">
          <Image
            className="products-item__image"
            width="300"
            height="194"
            src={props.image}
            loading="lazy"
            alt="Product"
          />
        </div>
      </Link>
      <div className="products-item__information">
        <Link
          to={`/catalog/${props.category}/product/${props.id}`}
          className="products-item__name"
        >
          {props.name}
        </Link>
        <div className="products-item__stars-container stars-range">
          <StarsRange value={props.rating} />
          <div className="products-item__reviews">{props.commentsCount}</div>
        </div>
        <div className="products-item__price-container">
          {props.isDiscount === 1 ? (
            <div className="products-item__price-wrapper">
              <div className="products-item__curr-price">
                {props.currPrice} UAH
              </div>
              <div className="products-item__prev-price">
                {props.oldPrice} UAH
              </div>
            </div>
          ) : (
            <div className="products-item__price">{props.currPrice} UAH</div>
          )}
          <div className="products-item__in-basket-container in-basket">
            <button className="in-basket__btn" onClick={handleAddToCart}>
              +
              <img
                src={icoBasket}
                width="20"
                height="20"
                loading="lazy"
                alt="In Basket"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
