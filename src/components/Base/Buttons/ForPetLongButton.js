import Link from 'next/link';
import { ArrowRight, Cat, Dog } from '@public/images/svg-icons';

function ForPetLongButton({ isCat, isDog }) {
  return (
    <div className="product-for-pets-btn-container product-for-pets">
      {isCat && (
        <Link href="/catalog/cat" className="product-for-pets__btn cat-btn">
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker cat">cat</b>
          </span>
          <Cat className="product-for-pets__icon" />
          <ArrowRight className="product-for-pets__arrow" />
        </Link>
      )}
      {isDog && (
        <Link href="/catalog/dog" className="product-for-pets__btn dog-btn">
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker dog">dog</b>
          </span>
          <Dog className="product-for-pets__icon" />
          <ArrowRight className="product-for-pets__arrow" />
        </Link>
      )}
    </div>
  );
}

export default ForPetLongButton;
