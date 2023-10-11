import Layout from '../components/layout';
import '@assets/styles/scss/index.scss';
import { wrapper } from '@redux/store';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}
export default wrapper.withRedux(MyApp);
