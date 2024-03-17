/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Sidebar from './Sidebar';

const DefaultLayout: React.FC<any> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-700">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="w-4/5 bg-red-200 flex flex-col">
        <header className="shadow">
       <h2>hello</h2>
        </header>
        <main className="p-4 flex-grow"> 
          {children}
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
