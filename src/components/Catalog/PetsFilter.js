import Link from 'next/link';
import { Cat, Dog } from '@public/images/svg-icons';

function PetsFilter() {
  return (
    <div className="pets-filter">
      <Link
        href="/catalog/cat?sort=default&order=desc&page=1"
        className="pets-filter__item_cat"
      >
        <span className="pets-filter__text">
          for<b className="pets-filter__marker cat">cat</b>
        </span>
        <Cat className="pets-filter__icon" />
      </Link>
      <Link
        href="/catalog/dog?sort=default&order=desc&page=1"
        className="pets-filter__item_dog"
      >
        <span className="pets-filter__text">
          for<b className="pets-filter__marker dog">dog</b>
        </span>
        <Dog className="pets-filter__icon" />
      </Link>
    </div>
  );
}

export default PetsFilter;
