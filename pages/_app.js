import Layout from '../components/layout';
import { wrapper } from '@redux/store';
import { Provider } from 'react-redux';
import { Router } from 'next/router';
import { Preloader } from '@components';
import { useEffect, useState } from 'react';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return (
    <Provider store={store}>
      {loading && <Preloader />}
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
