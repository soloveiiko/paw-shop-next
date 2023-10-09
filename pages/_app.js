import Layout from '../components/layout';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import '@assets/styles/scss/index.scss';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
