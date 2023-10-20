import Icon from '@components/Base/Icon';

function Tools({ toggleSidebar }) {
  return (
    <div className="header__tools tools">
      <button className="tools__profile">
        <Icon className="tools__profile-img" name="user" />
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
