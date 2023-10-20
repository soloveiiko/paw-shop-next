import Link from 'next/link';
import Icon from '@components/Base/Icon';

function ForPetShortButton({ isCat, isDog, className }) {
  return (
    <div className="for-pets-btn-container for-pets">
      {isCat && (
        <Link
          href="/catalog/cat"
          className={`for-pets__btn cat-btn ${className ? className : ''}`}
        >
          <Icon className="for-pets__arrow" name="arrow-left" />
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
          <Icon className="for-pets__arrow" name="arrow-right" />
        </Link>
      )}
    </div>
  );
}

export default ForPetShortButton;
