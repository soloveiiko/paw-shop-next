import { facebook, icoEmail, instagram, logoWhite, twitter } from '@static';
import Link from 'next/link';

const socialNetworkList = [
  { id: 1, name: 'Instagram', image: instagram, link: '#' },
  { id: 2, name: 'Facebook', image: facebook, link: '#' },
  { id: 3, name: 'Twitter', image: twitter, link: '#' },
];
function InformationPanel() {
  return (
    <div className="footer__information information-panel">
      <div className="information-panel__logo logo">
        <img
          className="logo__image"
          src={logoWhite}
          width="54"
          height="63.514"
          loading="lazy"
          alt="Logo"
        />
        PawShop
      </div>
      <div className="information-panel__number-wrapper">
        <img
          className="information-panel__number-image"
          src={icoEmail}
          width="25"
          height="17.817"
          loading="lazy"
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
                <img
                  src={el.image}
                  width="20"
                  height="20"
                  loading="lazy"
                  alt={el.name}
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
