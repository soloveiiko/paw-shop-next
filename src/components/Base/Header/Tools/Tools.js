import { icoBasket, icoUser } from 'public/images';
import Image from 'next/image';

function Tools({ toggleSidebar }) {
  return (
    <div className="header__tools tools">
      <button className="tools__profile">
        <Image
          className="tools__profile-img"
          src={icoUser}
          width="26"
          height="26"
          alt="Profile"
          priority
        />
      </button>
      <div className="tools__basket">
        <button className="tools__basket-img">
          <Image
            className="tools__image"
            src={icoBasket}
            alt="Cart"
            priority
            style={{ height: 'auto' }}
          />
        </button>
        <div className="tools__basket-counter">0</div>
        <div className="tools__basket-price">$0</div>
      </div>
      <div className="tools__btn-container" onClick={toggleSidebar}>
        <button className="tools__open-sidebar-btn" title="Open"></button>
      </div>
    </div>
  );
}

export default Tools;
