import React from "react";
import Museum from "../../../Assets/images/museum.png";
import Travel from "../../../Assets/images/colosseum.png";
import Lost from "../../../Assets/images/lost-items.png";
import Ticket from "../../../Assets/images/ticket.png";

export default function ExtraEle() {
  return (
    <>
      <ul className="flex flex-row flex-wrap justify-around items-center my-20 gap-y-10">
        <li>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow px-5   ">
            <img class="rounded-t-lg h-32 mx-5 mt-2  " src={Museum} alt="" />

            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-black">
                Metro Museum
              </h5>

              <p class="mb-3 font-normal text-gray-700 ">Visit us</p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#003087] rounded-lg hover:bg-[#fff]  border-2 border-[#003087] hover:text-[#003087] "
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow px-5 ">
            <a href="#">
              <img
                class="rounded-t-lg h-32 mx-5 mt-2 h-32"
                src={Travel}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold tracking-tight text-black ">
                  Travel advisory
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Visit us
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#003087] rounded-lg hover:bg-[#fff]  border-2 border-[#003087] hover:text-[#003087] "
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow px-5 ">
            <a href="#">
              <img class="rounded-t-lg h-32 mx-5 mt-2 h-32" src={Lost} alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold tracking-tight text-black ">
                  Lost &amp; Found
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Visit us
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#003087] rounded-lg hover:bg-[#fff]  border-2 border-[#003087] hover:text-[#003087] "
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow px-5 ">
            <a href="#">
              <img
                class="rounded-t-lg h-32 mx-5 mt-2 h-32"
                src={Ticket}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-lg font-bold tracking-tight text-black ">
                  Tickets
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Visit us
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#003087] rounded-lg hover:bg-[#fff]  border-2 border-[#003087] hover:text-[#003087] "
              >
                Read more
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
