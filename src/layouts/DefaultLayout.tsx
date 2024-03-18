/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const DefaultLayout: React.FC<any> = ({ children }) => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const handleIsSideBarOpen = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div className="flex h-screen">
     
 <div className={`${isSideBarOpen ? 'lg:w-1/6 ' : 'lg:w-20 '} bg-gray-700 transition-all duration-400`}>
        <Sidebar 
        handleIsSideBarOpen={handleIsSideBarOpen}
        isSideBarOpen={isSideBarOpen}
         />
      </div>
      
      {/* Main Content */}
  <div className={`${isSideBarOpen ? 'w-5/6' : 'w-dvw'} bg-red-200 flex flex-col transition-all duration-400`}>
    <main className="ml-4 flex-grow"> 
      {children}
    </main>
  </div>
    </div>
  );
};

export default DefaultLayout;
