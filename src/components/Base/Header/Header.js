import { useEffect, useState } from 'react';
import Logo from '@components/Base/Header/Logo/Logo';
import Navbar from '@components/Base/Header/Navbar/Navbar';
import Tools from '@components/Base/Header/Tools/Tools';
import Sidebar from '@components/Base/Header/Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar } from '@redux/modals/modalsSlice';
import Link from 'next/link';

const Header = ({ handleAuth, handleCart }) => {
  const [tablet, setTablet] = useState(false);
  const isOpenSidebar = useSelector((state) => state.modals.sidebar);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setTablet(window.innerWidth < 1000);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    dispatch(openSidebar(!isOpenSidebar));
  };
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Navbar />
        <Link className="header__number" href="tel:1-800-055-5566">
          1-800-055-5566
        </Link>
        <Tools
          toggleSidebar={toggleSidebar}
          handleAuth={handleAuth}
          handleCart={handleCart}
        />
        {tablet && (
          <Sidebar isOpen={isOpenSidebar} toggleSidebar={toggleSidebar} />
        )}
      </div>
    </header>
  );
};

export default Header;
