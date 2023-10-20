import Link from 'next/link';
import Icon from '@components/Base/Icon';

function ForPetLongButton({ isCat, isDog }) {
  return (
    <div className="product-for-pets-btn-container product-for-pets">
      {isCat && (
        <Link href="/catalog/cat" className="product-for-pets__btn cat-btn">
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker cat">cat</b>
          </span>
          <Icon className="product-for-pets__icon" name="cat" />
          <Icon className="product-for-pets__arrow" name="arrow-right" />
        </Link>
      )}
      {isDog && (
        <Link href="/catalog/dog" className="product-for-pets__btn dog-btn">
          <span className="product-for-pets__text">
            Products for <b className="product-for-pets__marker dog">dog</b>
          </span>
          <Icon className="product-for-pets__icon" name="dog" />
          <Icon className="product-for-pets__arrow" name="arrow-right" />
        </Link>
      )}
    </div>
  );
}

export default ForPetLongButton;
