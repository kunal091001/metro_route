import React from "react";
import MetroLogo from "../../../Assets/images/metroLogo.jpg";
import RouteIcon from "../../../Assets/images/route.png";
import ChangeIcon from "../../../Assets/images/arrows.png";

export default function secondpage() {
  return (
    <div className="journeyPlanner bg-carbon text-white border rounded-2xl p-4 m-4">
      <div className="flex mt-4 justify-center items-center">
        <img src={MetroLogo} alt="" className="h-14 mr-2" />
        <h1 className="md:text-3xl text-2xl  font-bold">Plan Your Journey</h1>
      </div>
      <form className="my-2 ">
        <p className="md:text-2xl text-xl pt-1">From</p>
        <input
          className="bg-whiteColor appearance-none border-2 border-black rounded w-full  px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-skyColor h-8"
          id="inline-full-name"
          type="text"
          list="MetroLines"
        />
        <datalist id="MetroLines"></datalist>
        <p className="md:text-2xl text-xl pt-4">To</p>
        <input
          className="bg-whiteColor appearance-none border-2 border-black rounded w-full  px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-skyColor h-8"
          id="inline-full-name"
          type="text"
        />
        <p className="md:text-2xl font-semibold text-xl pt-4 ">
          Advanced Filter
        </p>
        <div className="flex flex-col ">
          <button className=" bg-whiteColor text-black hover:bg-skyColor border border-black focus:ring-4 focus:outline-none focus:ring-skyColor font-medium rounded-md  text-center inline-flex items-center pr-16 w-fit mb-2  ">
            <img src={RouteIcon} alt="routeicon" className="h-8 w-8 m-2" />
            Shortest Route
          </button>
          <button className=" bg-whiteColor text-black bg-white hover:bg-skyColor border border-black focus:ring-4 focus:outline-none focus:ring-skyColor font-medium rounded-md  text-center inline-flex items-center pr-3 w-fit  ">
            <img src={ChangeIcon} alt="changeicon" className="h-8 w-8 m-2" />
            Minimum Interchange
          </button>
        </div>
        <div className="mt-4 ">
          <button className=" bg-whiteColor text-black bg-white hover:bg-skyColor border border-black focus:ring-4 focus:outline-none focus:ring-skyColor font-medium rounded-md  text-center inline-flex items-center  w-fit px-6  float-left">
            Reset
          </button>
          <button className=" bg-whiteColor text-black bg-white hover:bg-skyColor border border-black focus:ring-4 focus:outline-none focus:ring-skyColor font-medium rounded-md  text-center inline-flex items-center px-6 w-fit float-right  ">
            Show Route &amp; Fare
          </button>
        </div>
      </form>
    </div>
  );
}
