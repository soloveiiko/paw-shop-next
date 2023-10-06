import { icoBasket, icoUser } from '@static';

function Tools({ toggleSidebar }) {
  const onLogoutHandler = async () => {
    console.log('logout');
  };
  return (
    <div className="header__tools tools">
      <button className="tools__profile">
        <img
          className="tools__profile-img"
          src={icoUser}
          width="26"
          height="26"
          loading="lazy"
          alt="Profile"
        />
      </button>
      <div className="tools__basket">
        <button className="tools__basket-img">
          <img
            className="tools__image"
            src={icoBasket}
            width="26"
            height="26"
            loading="lazy"
            alt="Basket"
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
