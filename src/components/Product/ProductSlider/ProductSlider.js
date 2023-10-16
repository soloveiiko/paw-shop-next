import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const ProductSlider = ({ images }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
    },
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 5,
        spacing: 10,
      },
      vertical: true,
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return (
    <div className="product-body__images">
      <div ref={sliderRef} className="keen-slider">
        {images.map((img) => (
          <div key={img.id} className="keen-slider__slide">
            <Image
              className="keen-slider__img"
              src={img.conversions.preview.url}
              alt="Product"
              width="471"
              height="471"
            />
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {images.map((img) => (
          <div key={img.id} className="keen-slider__slide">
            <Image
              className="keen-slider__trumbs-img"
              src={img.conversions.thumb.url}
              alt="Product"
              width="83"
              height="83"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
