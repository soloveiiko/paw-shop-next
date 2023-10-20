import Subscribe from '@components/Base/Footer/Subscribe';
import InformationPanel from '@components/Base/Footer/InformationPanel';
import Links from '@components/Base/Footer/Links';
import Cards from '@components/Base/Footer/Cards';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__subscribe subscribe">
        <Subscribe />
      </div>
      <div className="footer__body">
        <div className="footer__top">
          <InformationPanel />
          <Links />
        </div>
        <div className="footer__bottom">
          <Cards />
          <span className="footer__copyright">
            Copyright © 2022. All Rights Reserved by SleepGo
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
