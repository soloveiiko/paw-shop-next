import { register } from 'swiper/element';
import Image from 'next/image';

const ProductSlider = ({ images }) => {
  register();
  return (
    <div className="product-body__images">
      <swiper-container
        class="product-body__slider"
        slides-per-view={1}
        thumbs-swiper=".product-body__slider-trumbs"
      >
        {images.map((img) => (
          <swiper-slide key={img.id} className="product-body__slider-item">
            <Image
              className="product-body__slider-img"
              src={img.conversions.big.url}
              alt="Product"
              width="471"
              height="471"
              unoptimized
            />
          </swiper-slide>
        ))}
      </swiper-container>
      <swiper-container
        class="product-body__slider-trumbs"
        direction="vertical"
        slides-per-view={4}
        free-mode="true"
        watch-slides-progress={true}
      >
        {images.map((img) => (
          <swiper-slide key={img.id} className="product-body__trumbs-item">
            <Image
              className="product-body__trumbs-img"
              src={img.conversions.thumb.url}
              alt="Product"
              width="83"
              height="83"
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default ProductSlider;
