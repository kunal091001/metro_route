import React from "react";

export default function Header() {
  return (
    <header>
      <div className="bg-carbon flex justify-evenly w-full">
        <div className="flex justify-center items-center hidden sm:flex mr-5">
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
        <div className="flex justify-between">
          <div className="flex mr-5">
            <div className="mt-1">
              <a href="#." className="p-1">
                हिंदी
              </a>
            </div>
            <div>
              <strong className="mt-1">|</strong>
            </div>
            <div className="mt-1">
              <a href="#." className="p-1">
                English
              </a>
            </div>
          </div>
          <div className="flex ml-4  ">
            <div className="mt-1 ">
              <a href="#.">For Passengers</a>
            </div>
            <div>
              <strong className="p-1">|</strong>
            </div>
            <div className="mt-1">
              <a href="#.">For Corporates</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
