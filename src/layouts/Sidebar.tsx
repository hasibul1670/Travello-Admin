import React from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItem';

const Sidebar: React.FC = () => {
  return (
    <div className="">
      <div className="p-4 text-white">
        <h2 className="text-lg text-cyan-400 font-semibold">Travello</h2>
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
      </div>
    </div>
  );
};

export default Sidebar;
