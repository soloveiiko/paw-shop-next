import Layout from '../components/layout';
import { wrapper } from '@redux/store';
import { Provider } from 'react-redux';
import '@assets/styles/scss/index.scss';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
