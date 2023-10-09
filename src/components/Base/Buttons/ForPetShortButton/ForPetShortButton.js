import Link from 'next/link';
import { icoArrowLeft, icoArrowRight } from 'public/images';

function ForPetShortButton({ isCat, isDog, className }) {
  return (
    <div className="for-pets-btn-container for-pets">
      {isCat && (
        <Link
          href="/catalog/cat?sort=default&order=desc&page=1"
          className={`for-pets__btn cat-btn ${className}`}
        >
          <img
            className="for-pets__arrow"
            src={icoArrowLeft}
            width="9.5"
            height="9.5"
            loading="lazy"
            alt="arrow"
          />
          <span className="for-pets__text">
            For <b className="for-pets__marker cat">cat</b>
          </span>
        </Link>
      )}
      {isDog && (
        <Link
          href="/catalog/dog?sort=default&order=desc&page=1"
          className={`for-pets__btn dog-btn ${className}`}
        >
          <span className="for-pets__text">
            For <b className="for-pets__marker dog">dog</b>
          </span>
          <img
            className="for-pets__arrow"
            src={icoArrowRight}
            width="9.5"
            height="9.5"
            loading="lazy"
            alt="arrow"
          />
        </Link>
      )}
    </div>
  );
}

export default ForPetShortButton;
