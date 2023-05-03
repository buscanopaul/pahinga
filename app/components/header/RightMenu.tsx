import Link from 'next/link';
import { AiFillDribbbleCircle } from 'react-icons/ai';
import HeaderItem from './HeaderItem';

function RightMenu() {
  return (
    <div className="hidden lg:flex gap-6 items-center">
      <Link href="/" className="flex items-center gap-1">
        <AiFillDribbbleCircle size={18} color="black" />
        <p>Language</p>
      </Link>
      <HeaderItem title="Sign in" />
      <Link href="/" className="bg-black px-6 py-2 rounded-lg">
        <p className="text-white font-semibold">Sign up</p>
      </Link>
    </div>
  );
}

export default RightMenu;
