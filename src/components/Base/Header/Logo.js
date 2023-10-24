import Link from 'next/link';
import { amatic_sc } from '../../../../components/layout';
import { LogoDark } from '@public/images/svg-icons';

function Logo() {
  return (
    <Link href="/" className={`header__logo logo ${amatic_sc.className}`}>
      <LogoDark className="logo__image" />
      <h1 className="logo__text">PawShop</h1>
    </Link>
  );
}

export default Logo;
