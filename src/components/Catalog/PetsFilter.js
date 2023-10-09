import Link from 'next/link';
import { icoCat, icoDog } from '@public/images';
import Image from 'next/image';

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
        <Image
          className="pets-filter__icon"
          src={icoCat}
          width="30"
          height="30"
          priority
          alt="Cat"
        />
      </Link>
      <Link
        href="/catalog/dog?sort=default&order=desc&page=1"
        className="pets-filter__item_dog"
      >
        <span className="pets-filter__text">
          for<b className="pets-filter__marker dog">dog</b>
        </span>
        <Image
          className="pets-filter__icon"
          src={icoDog}
          width="30"
          height="30"
          priority
          alt="Dog"
        />
      </Link>
    </div>
  );
}

export default PetsFilter;
