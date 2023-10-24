import Icon from '@components/Base/Icon';
import { User } from '@public/images/icons/index.js';

function Tools({ toggleSidebar }) {
  return (
    <div className="header__tools tools">
      <button className="tools__profile">
        <User className="tools__profile-img" />
      </button>
      <div className="tools__basket">
        <button className="tools__basket-img">
          <Icon className="tools__image" name="basket" />
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
