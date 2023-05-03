import HeaderItem from './HeaderItem';

function LeftMenu() {
  return (
    <div className="gap-6 hidden lg:flex">
      <HeaderItem title="Home" />
      <HeaderItem title="Places" />
      <HeaderItem title="Help" />
    </div>
  );
}

export default LeftMenu;
