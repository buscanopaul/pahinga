import HomeHeaderQuick from './HomeHeaderQuick';

function HomeHeader() {
  return (
    <div className="flex flex-col justify-between pt-36 relative px-12 bg-[url('https://images.adsttc.com/media/images/546e/8d1c/e58e/ce3d/8700/00cc/large_jpg/portada_02_-_DSC_1980_edit2c-AAA_EDIT.jpg?1416531212')] h-screen bg-left bg-cover bg-no-repeat">
      <h1 className="text-7xl max-w-md font-semibold bg-clip-text bg-gradient-to-r from-gray-400 to-black text-transparent">
        Explore your place to stay
      </h1>
      <HomeHeaderQuick />
    </div>
  );
}

export default HomeHeader;
