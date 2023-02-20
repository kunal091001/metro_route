import React from "react";
import MetroLogo from "../../../Assets/images/metroLogo.jpg";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full shadow ">
      <div className="justify-between px-4  lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex items-center justify-start py-3 md:py-4 md:flex">
          <div className=" flex md:hidden mr-2">
            <button
              className="p-2 
                  rounded-md outline-none "
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center ">
            <div>
              <img className="logo w-10 " src={MetroLogo} alt="logo" />
            </div>
            <div>
              <h2 className="text-3xl font-bold  px-1 hover:text-[#00308f] ">
                SMR
              </h2>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3  mt-4 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black hover:text-[#00308f] font-semibold text-lg ">
                <a href="#.">Home</a>
              </li>
              <li className="text-black hover:text-[#00308f] font-semibold text-lg ">
                <a href="#.">Network</a>
              </li>
              <li className="text-black hover:text-[#00308f] font-semibold text-lg ">
                <a href="#.">Security</a>
              </li>
              <li className="text-black hover:text-[#00308f] font-semibold text-lg ">
                <a href="#.">Contact</a>
              </li>
              <li className="text-black hover:text-[#00308f] font-semibold text-lg ">
                <a href="#.">FAQ's</a>
              </li>
              {/* <li>
                <div>
                  <form action="search">
                    <button
                      type="button"
                      data-collapse-toggle="navbar-search"
                      aria-controls="navbar-search"
                      aria-expanded="false"
                      className="hidden  text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                    <div className=" flex relative  md:flex">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Search icon</span>
                      </div>
                      <input
                        type="search"
                        id="search-navbar"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                      />
                    </div>
                  </form>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
