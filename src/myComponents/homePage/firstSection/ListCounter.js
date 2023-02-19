import React, { useState } from "react";
import NumberCounter from "number-counter";
export default function ListCounter() {
  return (
    <div className="grid grid-cols-3 mb-32  sm:border-b-2 rounded-xl py-12 sm:shadow-xl  ">
      <div className="flex flex-col text-center border-r-2    ">
        <span className=" md:text-7xl text-5xl   font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#ed1c24]  to-[#03008f] ">
          <NumberCounter end={391} delay={2} />
        </span>
        <span className="mt-2 text-xs sm:text-lg ">
          Total Network Length &nbsp;<i>(km)</i>
          <i className="text-red-500 font-bold"> *</i>
        </span>
      </div>
      <div className="flex flex-col text-center  border-r-2  ">
        <span className=" md:text-7xl text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#ed1c24]  to-[#03008f]">
          <NumberCounter end={12} delay={3} />
        </span>
        <span className="mt-2 text-xs sm:text-lg ">
          Total no of Lines <i className="text-red-500 font-bold">*</i>
        </span>
      </div>
      <div className="flex flex-col text-center ">
        <span className="md:text-7xl text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#ed1c24]  to-[#03008f] rounded-xl   ">
          <NumberCounter end={286} delay={2} />
        </span>
        <span className="mt-2 text-xs sm:text-lg  ">
          Total no of Stations <i className="text-red-500 font-bold">*</i>
        </span>
      </div>
    </div>
  );
}
