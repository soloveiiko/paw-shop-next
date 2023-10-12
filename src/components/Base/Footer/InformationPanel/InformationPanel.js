import {
  facebook,
  icoEmail,
  instagram,
  logoWhite,
  twitter,
} from 'public/images';
import Link from 'next/link';
import Image from 'next/image';
import { amatic_sc } from '../../../../../components/layout';

const socialNetworkList = [
  { id: 1, name: 'Instagram', image: instagram, link: '#' },
  { id: 2, name: 'Facebook', image: facebook, link: '#' },
  { id: 3, name: 'Twitter', image: twitter, link: '#' },
];
function InformationPanel() {
  return (
    <div className="footer__information information-panel">
      <div className={`information-panel__logo logo ${amatic_sc.className}`}>
        <Image
          className="logo__image"
          src={logoWhite}
          width="54"
          height="63.514"
          priority
          alt="Logo"
        />
        PawShop
      </div>
      <div className="information-panel__number-wrapper">
        <Image
          className="information-panel__number-image"
          src={icoEmail}
          width="25"
          height="17.817"
          priority
          alt="Number"
        />
        <a className="information-panel__number" href="tel:1-800-055-5566">
          1-800-055-5566
        </a>
      </div>
      <div className="information-panel__social-network social-network">
        <ul className="social-network__list">
          {socialNetworkList.map((el) => (
            <li key={el.id} className="social-network__item">
              <Link className="social-network__link" href={el.link}>
                <Image
                  src={el.image}
                  priority
                  alt={el.name}
                  style={{ height: 'auto' }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InformationPanel;
