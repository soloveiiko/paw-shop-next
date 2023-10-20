import React from 'react';
import Header from '@components/Base/Header/Header';
import Footer from '@components/Base/Footer/Footer';
import { Montserrat_Alternates, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
export const montserrat_alternates = Montserrat_Alternates({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat_alternates',
});
// export const amatic_sc = Amatic_SC({
//   weight: ['700'],
//   style: ['normal'],
//   subsets: ['latin'],
//   display: 'swap',
// });
export const amatic_sc = localFont({
  src: [
    {
      path: './../src/assets/fonts/Amatic_SC/AmaticSC-Bold.woff2',
      weight: '700',
    },
  ],
});

export const montserrat = Montserrat({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
function Layout({ children }) {
  return (
    <div className={`paw-shop`}>
      <style jsx global>{`
        :root {
          --font-montserrat_alternates: ${montserrat_alternates.style
            .fontFamily};
          --font-amatic_sc: ${amatic_sc.style.fontFamily};
          --font-montserrat: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
