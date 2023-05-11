import { BiSearch } from 'react-icons/bi';
import { BsCalendar3, BsPeople } from 'react-icons/bs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function HomeHeaderQuick() {
  return (
    <div className="bg-white w-full rounded-2xl flex lg:flex-row flex-col items-center p-10 gap-5 mb-16">
      <div className="lg:w-2/5 w-full flex items-center relative">
        <BiSearch size={18} color="black" className="absolute left-2" />
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Manila, Philippines"
          className="w-full bg-gray-100 h-11 rounded-lg px-8"
        />
      </div>
      <div className="flex w-full lg:w-1/4">
        <button className="bg-gray-100 h-11 flex items-center px-4 rounded-l-lg border-r-2 w-full">
          <BsCalendar3 size={18} color="black" className="mr-2" /> Check In
        </button>
        <button className="bg-gray-100 h-11 rounded-r-lg px-7 w-full">
          Checkout
        </button>
      </div>
      <button className="bg-gray-100 rounded-lg px-5 h-11 flex items-center justify-between lg:w-64 w-full">
        <div className="flex items-center">
          <BsPeople size={18} color="black" className="mr-2" />
          <p>Guests</p>
        </div>
        <MdOutlineKeyboardArrowDown size={18} color="black" />
      </button>
      <button className="h-11 w-full lg:w-40 bg-primary rounded-xl bg-[#DB5D5A] text-white">
        Search
      </button>
    </div>
  );
}

export default HomeHeaderQuick;
