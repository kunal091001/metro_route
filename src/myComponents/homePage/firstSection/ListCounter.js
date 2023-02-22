import React from "react";
import NumberCounter from "number-counter";
export default function ListCounter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  sm:border-b-2 rounded-xl  sm:shadow-xl my-14 sm:my-52 md:my-14">
      <div className="flex flex-col text-center sm:border-r-2  my-5 ">
        <span className=" md:text-7xl text-5xl   font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#ed1c24]  to-[#03008f] ">
          <NumberCounter end={391} delay={2} />
        </span>
        <span className="mt-2 text-xs sm:text-md ">
          Total Network Length <i>(km)</i>
          <i className="text-red-500 font-bold"> *</i>
        </span>
      </div>
      <div className="flex flex-col text-center  sm:border-r-2 my-5   ">
        <span className=" md:text-7xl text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#ed1c24]  to-[#03008f]">
          <NumberCounter end={12} delay={4} />
        </span>
        <span className="mt-2 text-xs sm:text-md ">
          Total no of Lines <i className="text-red-500 font-bold">*</i>
        </span>
      </div>
      <div className="flex flex-col text-center my-5 ">
        <span className="md:text-7xl text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#ed1c24]  to-[#03008f] rounded-xl   ">
          <NumberCounter end={286} delay={2} />
        </span>
        <span className="mt-2 text-xs sm:text-md  ">
          Total no of Stations <i className="text-red-500 font-bold">*</i>
        </span>
      </div>
    </div>
  );
}
