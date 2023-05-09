import { Inter } from 'next/font/google';
import HomeHeader from './components/home/HomeHeader';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="relative">
      <HomeHeader />
      <div>test</div>
    </div>
  );
}
