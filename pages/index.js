import { wrapper } from '@redux/store';
import {
  getPage,
  getRunningQueriesThunk,
  useGetPageQuery,
} from '@services/pagesApi';
import Head from 'next/head';
import { Preloader } from '@components';
import ForPetShortButton from '@components/Base/Buttons/ForPetShortButton/ForPetShortButton';

function Home() {
  const { data, isLoading, isError, error } = useGetPageQuery('home');

  return (
    <div className="page home-page">
      {isLoading && <Preloader />}
      {isError && <div className="error">{error}</div>}
      {data && data.seo && (
        <Head>
          <title>{data.seo.title}</title>
          {Object.keys(data.seo).map((el, index) => (
            <meta key={index} property={el} content={data.seo[el]} />
          ))}
        </Head>
      )}
      <ForPetShortButton isCat />
      <ForPetShortButton isDog />
    </div>
  );
}
export default Home;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    if (context) {
      store.dispatch(getPage.initiate('home'));
    }

    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return {
      props: {},
    };
  }
);
