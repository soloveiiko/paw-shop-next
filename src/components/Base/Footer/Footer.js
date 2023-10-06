import Subscribe from '@components/Base/Footer/Subscribe/Subscribe';
import InformationPanel from '@components/Base/Footer/InformationPanel/InformationPanel';
import Links from '@components/Base/Footer/Links/Links';
import Cards from '@components/Base/Footer/Cards/Cards';

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
          <div className="footer__copyright">
            Copyright © 2022. All Rights Reserved by SleepGo
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
