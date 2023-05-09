import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

function Header() {
  return (
    <div className="flex items-center justify-between px-12 py-8 absolute top-5 h-10 z-10 w-full">
      <LeftMenu />
      <RightMenu />
    </div>
  );
}

export default Header;
