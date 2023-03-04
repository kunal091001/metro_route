import React from "react";

export default function Header() {
  return (
    <header>
      <div className="bg-[#00308F] flex flex-col md:flex-row justify-evenly w-full text-white">
        <div className="flex justify-center items-center  sm:flex ">
          <div>
            <strong className="p-2">Follow us on:</strong>
          </div>
          <div>
            <a href="#.">
              <i className="bx bxl-instagram icon mr-1 mt-2 "></i>
            </a>
          </div>
          <div>
            <a href="#.">
              <i className="bx bxl-youtube icon mr-1 mt-2"></i>
            </a>
          </div>
          <div>
            <a href="#.">
              <i className="bx bxl-twitter icon mr-1 mt-2"></i>
            </a>
          </div>
          <div>
            <a href="mailto:kunal9313882818@gmail.com">
              <i className="bx bxl-gmail icon mr-1  mt-2"></i>
            </a>
          </div>
          <div>
            <strong className="p-1">|</strong>
          </div>
          <div>
            <a href="#.">
              <i className="bx bxl-play-store icon mr-1 mt-2"></i>
            </a>
          </div>
          <div>
            <a href="#.">
              <i className="bx bxl-apple icon mr-1 mt-2"></i>
            </a>
          </div>
        </div>
        <div className="hidden justify-between md:flex">
          <div className="flex ml-4 gap-x-2">
            <div className="mt-1 pr-2  border-r-2 mb-1 ">
              <a href="/">For Passengers</a>
            </div>
            <div className="mt-1">
              <a href="https://www.delhimetrorail.com/corporate">
                For Corporates
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
