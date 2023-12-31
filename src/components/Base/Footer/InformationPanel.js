import Link from 'next/link';
import { amatic_sc } from '../../../../components/layout';
import {
  Email,
  FacebookWhite,
  Instagram,
  LogoWhite,
  Twitter,
} from '@public/images/svg-icons';

const socialNetworkList = [
  {
    id: 1,
    name: 'Instagram',
    image: <Instagram className="social-network__number-image" />,
    link: '#',
  },
  {
    id: 2,
    name: 'Facebook',
    image: <FacebookWhite className="social-network__number-image" />,
    link: '#',
  },
  {
    id: 3,
    name: 'Twitter',
    image: <Twitter className="social-network__number-image" />,
    link: '#',
  },
];
function InformationPanel() {
  return (
    <div className="footer__information information-panel">
      <div className={`information-panel__logo logo ${amatic_sc.className}`}>
        <LogoWhite className="logo__image" />
        PawShop
      </div>
      <div className="information-panel__number-wrapper">
        <Email className="information-panel__number-image" name="email" />
        <a className="information-panel__number" href="tel:1-800-055-5566">
          1-800-055-5566
        </a>
      </div>
      <div className="information-panel__social-network social-network">
        <ul className="social-network__list">
          {socialNetworkList.map((el) => (
            <li key={el.id} className="social-network__item">
              <Link className="social-network__link" href={el.link}>
                {el.image}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InformationPanel;
