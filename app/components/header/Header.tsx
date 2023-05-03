import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

function Header() {
  return (
    <div className="flex items-center justify-between px-12 py-8">
      <LeftMenu />
      <RightMenu />
    </div>
  );
}

export default Header;
