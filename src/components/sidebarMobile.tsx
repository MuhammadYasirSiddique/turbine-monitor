
'use client'
import React, { useState } from 'react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed  inset-y-0 left-0 w-64 bg-gray-200 transform transition-transform top-16 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
        <div className='flex justify-between items-center '>
      <div className="py-4 px-4">
        {/* Sidebar content */}
        <h2>Dashboard</h2>
      </div>
      <div>
      <button
        className="top-0 left-0 m-4 p-2 text-gray-600 hover:text-gray-800"
        onClick={onClose}
      >
         <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
      </button>
    </div>
    </div>
    </div>
  );
};

export default MobileSidebar;
