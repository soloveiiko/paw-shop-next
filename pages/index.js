import ForPetShortButton from '@components/Base/Buttons/ForPetShortButton/ForPetShortButton';
import { useGetPageQuery } from '@services/pagesApi';
import Head from 'next/head';
import Preloader from '@components/Base/Preloader/Preloader';

function Home() {
  const { data, isLoading, isError, error } = useGetPageQuery('home');

  console.log('home data', data);
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
