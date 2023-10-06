import { logoDark } from '@static';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" className="header__logo logo">
      <img
        className="logo__image"
        src={logoDark}
        width="36.337"
        height="42.739"
        loading="lazy"
        alt="Logo"
      />
      <h1 className="logo__text">PawShop</h1>
    </Link>
  );
}

export default Logo;
