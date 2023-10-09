import { icoArrowRight, icoCat, icoDog } from 'public/images';
import Link from 'next/link';

function ForPetLongButton({ isCat, isDog }) {
  return (
    <div className="product-for-pets-btn-container product-for-pets">
      {isCat && (
        <Link
          href="/catalog/cat?sort=default&order=desc&page=1"
          className="product-for-pets__btn cat-btn"
        >
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker cat">cat</b>
          </span>
          <img
            className="product-for-pets__icon"
            src={icoCat}
            width="30"
            height="30"
            loading="lazy"
            alt="Cat"
          />
          <img
            className="product-for-pets__arrow"
            src={icoArrowRight}
            width="9.5"
            height="9.5"
            loading="lazy"
            alt="Arrow"
          />
        </Link>
      )}
      {isDog && (
        <Link
          href="/catalog/dog?sort=default&order=desc&page=1"
          className="product-for-pets__btn dog-btn"
        >
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker dog">dog</b>
          </span>
          <img
            className="product-for-pets__icon"
            src={icoDog}
            width="30"
            height="30"
            loading="lazy"
            alt="Dog"
          />
          <img
            className="product-for-pets__arrow"
            src={icoArrowRight}
            width="9.5"
            height="9.5"
            loading="lazy"
            alt="Arrow"
          />
        </Link>
      )}
    </div>
  );
}

export default ForPetLongButton;
