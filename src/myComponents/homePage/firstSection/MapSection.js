import React from "react";
import { Link } from "react-router-dom";
import Map from "../../../Assets/images/MetroMap.jpg";
export default function MapSection() {
  return (
    <>
      <div className="flex flex-col w-64 sm:w-80 md:w-96 p-2 text-center  justify-center items-center  shadow-2xl bg-white rounded-2xl ">
        <p className="text-3xl py-5 font-bold text-black  ">Interactive Map</p>
        <img
          src={Map}
          className="border rounded-xl opacity-50 pointer-events-none "
        ></img>

        <Link to="/mapwindow">
          {" "}
          <button className=" flex focus:outline-none  cursor-pointer text-[#03008f] bg-transparent border-2 border-[#03008f]   rounded-md  outline-none   shadow-md dark:shadow-lg  font-medium   px-6 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]  my-2 w-full -translate-y-28 sm:-translate-y-36 md:-translate-y-40  z-50 hover:bg-white ">
            Click Here to View Map
          </button>
        </Link>
      </div>
    </>
  );
}
