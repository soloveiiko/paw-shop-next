import React from 'react';
import Header from '@components/Base/Header/Header';
import Footer from '@components/Base/Footer/Footer';
function Layout({ children }) {
  return (
    <div className="paw-shop">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
