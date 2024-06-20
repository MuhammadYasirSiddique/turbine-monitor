"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileSidebar from "./sidebarMobile";
import Image from "next/image";

export default function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    // Check screen width and toggle the sidebar accordingly
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsScreenSmall(true);
      } else {
        setIsScreenSmall(false);
      }
    };

    // Add an event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log("isScreenSmall:", isScreenSmall);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsSidebarVisible(true);
    };

    const handleMouseLeave = () => {
      setIsSidebarVisible(false);
    };

    // Check if sidebarContainer is not null before adding event listeners
    const sidebarContainer = document.getElementById("sidebar-container");
    if (sidebarContainer) {
      sidebarContainer.addEventListener("mouseenter", handleMouseEnter);
      sidebarContainer.addEventListener("mouseleave", handleMouseLeave);

      // Clean up the event listeners when the component unmounts
      return () => {
        sidebarContainer.removeEventListener("mouseenter", handleMouseEnter);
        sidebarContainer.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  if (isScreenSmall) {
    return (
      <div className="relative h-screen">
        <button
          className="absolute top-0 left-0 mr-10 p-0 "
          onClick={handleSidebarToggle}
        >
          <svg
            fill="gray"
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
            stroke="#000000"
            className=" rounded-r-full shadow-2xl"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_15_"
                d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15 C330,6.716,323.284,0,315,0z M215.606,175.605l-80,80.002C132.678,258.535,128.839,260,125,260c-3.839,0-7.678-1.464-10.606-4.394 c-5.858-5.857-5.858-15.355,0-21.213l69.394-69.396l-69.394-69.392c-5.858-5.857-5.858-15.355,0-21.213 c5.857-5.858,15.355-5.858,21.213,0l80,79.998c2.813,2.813,4.394,6.628,4.394,10.606C220,168.976,218.42,172.792,215.606,175.605z"
              ></path>{" "}
            </g>
          </svg>
        </button>

        <MobileSidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
      </div>
    );
  }

  return (
    <div
      id="sidebar-container"
      className={`  fixed z-50 top-30 left-0 w-72 h-screen transition-transform duration-300 ${
        isSidebarVisible ? "translate-x-0" : " -translate-x-full"
      }`}
    >
      <div className="flex flex-col w-full p-3 bg-white shadow lg:h-screen lg:w-72">
        <div className="flex flex-col w-full p-3 bg-slate-100 shadow lg:h-screen lg:w-72">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>

            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <Link
                    href="/"
                    className="flex items-center p-2 space-x-3 rounded-md transition-all duration-300 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span>Home</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    href="/mail"
                    className="flex items-center p-2 space-x-3 rounded-md transition-all duration-300 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <span>Inbox</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    href="/orders"
                    className="flex items-center p-2 space-x-3 rounded-md transition-all duration-300 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <span>Orders</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    href="/settings"
                    className="flex items-center p-2 space-x-3 rounded-md transition-all duration-300 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Settings</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    href="/logout"
                    className="flex items-center p-2 space-x-3 rounded-md transition-all duration-300 hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
