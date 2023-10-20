import Link from 'next/link';
import { amatic_sc } from '../../../../../components/layout';
import Icon from '@components/Base/Icon';

function Logo() {
  return (
    <Link href="/" className={`header__logo logo ${amatic_sc.className}`}>
      <Icon className="logo__image" name="logo-dark" />
      <h1 className="logo__text">PawShop</h1>
    </Link>
  );
}

export default Logo;
