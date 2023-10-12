import ForPetShortButton from '@components/Base/Buttons/ForPetShortButton/ForPetShortButton';

function Home() {
  return (
    <div className="page home-page">
      <ForPetShortButton isCat />
      <ForPetShortButton isDog />
    </div>
  );
}

export default Home;
