import { Basket, User } from '@public/images/svg-icons';

function Tools({ toggleSidebar }) {
  return (
    <div className="header__tools tools">
      <button className="tools__profile">
        <User className="tools__profile-img" />
      </button>
      <div className="tools__basket">
        <button className="tools__basket-img">
          <Basket className="tools__image" />
        </button>
        <span className="tools__basket-counter">0</span>
        <span className="tools__basket-price">$0</span>
      </div>
      <div className="tools__btn-container" onClick={toggleSidebar}>
        <button className="tools__open-sidebar-btn" title="Open"></button>
      </div>
    </div>
  );
}

export default Tools;
