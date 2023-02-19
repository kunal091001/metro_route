import React from "react";
import ListCounter from "./ListCounter";
import MapSection from "./MapSection";
import RoutePlanner from "./RoutePlanner";
import Lines from "./Lines";
import ExtraEle from "./ExtraEle";
export default function firstpage() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center  ">
          <h1 className="md:text-9xl text-7xl sm:my-14 my-16   text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#00308F]  to-[#ed1c24]  ">
            Find Your Route With SMR
          </h1>
        </div>
        <ListCounter />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:m-8">
          <div className="mx-auto">
            <MapSection />
          </div>
          <RoutePlanner />
        </div>
        <Lines />
        <ExtraEle />
      </div>
    </>
  );
}
