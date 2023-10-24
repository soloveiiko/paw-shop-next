import Link from 'next/link';
import { ArrowLeft, ArrowRight } from '@public/images/svg-icons';

function ForPetShortButton({ isCat, isDog, className }) {
  return (
    <div className="for-pets-btn-container for-pets">
      {isCat && (
        <Link
          href="/catalog/cat"
          className={`for-pets__btn cat-btn ${className ? className : ''}`}
        >
          <ArrowLeft className="for-pets__arrow" />
          <span className="for-pets__text">
            For <b className="for-pets__marker cat">cat</b>
          </span>
        </Link>
      )}
      {isDog && (
        <Link
          href="/catalog/dog"
          className={`for-pets__btn dog-btn  ${className ? className : ''}`}
        >
          <span className="for-pets__text">
            For <b className="for-pets__marker dog">dog</b>
          </span>
          <ArrowRight className="for-pets__arrow" />
        </Link>
      )}
    </div>
  );
}

export default ForPetShortButton;
