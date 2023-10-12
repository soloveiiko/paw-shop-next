import Layout from '../components/layout';
import '@assets/styles/scss/index.scss';
import { wrapper } from '@redux/store';
import { Provider } from 'react-redux';

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
