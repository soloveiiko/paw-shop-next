import Link from 'next/link';
import { logoDark } from '@public/images';
import Image from 'next/image';
import { amatic_sc } from '../../../../../components/layout';

function Logo() {
  return (
    <Link href="/" className={`header__logo logo ${amatic_sc.className}`}>
      <Image
        className="logo__image"
        src={logoDark}
        alt="Logo"
        width="36.337"
        height="42.739"
        priority
      />
      <h1 className="logo__text">PawShop</h1>
    </Link>
  );
}

export default Logo;
