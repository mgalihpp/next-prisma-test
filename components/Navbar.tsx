import { GoHomeFill, GoSearch } from "react-icons/go";
import { FaRegPenToSquare, FaRegUser } from 'react-icons/fa6';
import { AiOutlineHeart } from 'react-icons/ai';

const BottomNavbar = () => {
  return (
    <header className="bg-white h-[75px] fixed bottom-0 left-0 right-0 w-[350px] m-auto z-[999]">
      <nav className="flex flex-row justify-center items-center h-full">
        <li>
          <a href="">
            <GoHomeFill size={30}/>
          </a>
        </li>
        <li>
          <a href="">
            <GoSearch size={30}/>
          </a>
        </li>
        <li>
          <a href="">
            <FaRegPenToSquare size={30}/>
          </a>
        </li>
        <li>
          <a href="">
            <AiOutlineHeart size={30}/>
          </a>
        </li>
        <li>
          <a href="">
            <FaRegUser size={30}/>
          </a>
        </li>
      </nav>
    </header>
  );
};

export default BottomNavbar;
