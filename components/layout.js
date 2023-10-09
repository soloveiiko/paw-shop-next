import React from 'react';
import Header from '@components/Base/Header/Header';
import Footer from '@components/Base/Footer/Footer';
import { Montserrat_Alternates, Montserrat, Amatic_SC } from 'next/font/google';

const montserrat_alternates = Montserrat_Alternates({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
export const amatic_sc = Amatic_SC({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
export const montserrat = Montserrat({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
function Layout({ children }) {
  return (
    <div className={`paw-shop ${montserrat_alternates.className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
