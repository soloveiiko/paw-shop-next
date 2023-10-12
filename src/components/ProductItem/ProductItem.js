import React, { useEffect, useState } from 'react';
import { defaultImage, icoBasket } from 'public/images';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const DynamicRating = dynamic(
  () => import('@components/Base/StarsRange/StarsRange'),
  {
    ssr: false,
  }
);
function ProductItem(props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleAddToCart = async () => {
    console.log('added to cart');
  };
  const imageLoader = ({ src }) => {
    return src ? src : defaultImage;
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
      <Link href={`/catalog/${props.category}/product/${props.id}`}>
        <div className="products-item__img-container">
          <Image
            className="products-item__image"
            src={props.image}
            width="300"
            height="194"
            loader={imageLoader}
            loading="lazy"
            alt="Product"
            unoptimized
          />
        </div>
      </Link>
      <div className="products-item__information">
        <Link
          href={`/catalog/${props.category}/product/${props.id}`}
          className="products-item__name"
        >
          {props.name}
        </Link>
        <div className="products-item__stars-container stars-range">
          {isClient && <DynamicRating value={props.rating} />}
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
              <Image src={icoBasket} width="20" height="20" alt="In Cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
