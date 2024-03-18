import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItem';
import { FaMarsAndVenusBurst } from 'react-icons/fa6';

interface SidebarProps {
  handleIsSideBarOpen?: () => void;
  setIsSideBarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isSideBarOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
       handleIsSideBarOpen,
        isSideBarOpen,
}) => {


  return (
    <div className="">
      <div className="text-white">
        <div className='flex justify-between '> 
          <h2 className={`${isSideBarOpen ? 'block':'hidden'} mt-2 px-4 text-xl text-cyan-400 font-semibold`}>Travello</h2>
          {isSideBarOpen ? (
            <FaArrowAltCircleLeft onClick={handleIsSideBarOpen} className='text-3xl mt-2 mr-4 cursor-pointer' />
          ) : (
            <FaArrowAltCircleRight onClick={handleIsSideBarOpen} className='lg:text-4xl text-2xl ml-2 mt-2 cursor-pointer scale-110' />
          )}
        </div>
        
    
        {isSideBarOpen ? (
          <ul className="mt-2">
            {MenuItems.map((item) => (
              <li key={item.id} className="py-1">
                <Link to={item.link} className="rounded px-2 p-2 hover:bg-cyan-800 flex items-center">
                  <li><item.icon className='mr-2 text-2xl'/></li>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        ) : 
          <ul className="mt-2">
            {MenuItems.map((item) => (
              <li key={item.id} className="py-1">
                <Link to={item.link} className="rounded px-2 p-1 flex items-center ">
                  <li><item.icon className='mr-2 lg:text-4xl text-2xl hover:text-blue-400 hover-spin '/></li>
                </Link>
              </li>
            ))}
          </ul>
          }
      </div>
    </div>
  );
};

export default Sidebar;
