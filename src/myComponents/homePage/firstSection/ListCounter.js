import React, { useState } from "react";
import NumberCounter from "number-counter";
export default function ListCounter() {
  return (
    <div className="flex  flex-row bg-[#eaebed] rounded-lg w-fit h-fit p-2">
      <div className="flex flex-col text-center p-2  border-r-4 rounded border-white ">
        <span className=" md:text-3xl text-xl   text-[#00308F] font-semibold">
          <NumberCounter end={391} delay={2} />
        </span>
        <span className="mt-2 text-xs ">
          Total Network Length
          <br />
          <i>(km)</i>
          <i className="text-red-500 font-bold"> *</i>
        </span>
      </div>
      <div className="flex flex-col text-center p-2 border-r-4 rounded border-white">
        <span className=" md:text-3xl text-xl text-[#00308F]   font-semibold">
          <NumberCounter end={12} delay={3} />
        </span>
        <span className="mt-2 text-xs ">
          Total no of Lines <i className="text-red-500 font-bold">*</i>
        </span>
      </div>
      <div className="flex flex-col p-2 text-center ">
        <span className="md:text-3xl text-xl text-[#00308F] rounded-xl  font-semibold ">
          <NumberCounter end={286} delay={2} />
        </span>
        <span className="mt-2 text-xs ">
          Total no of Stations <i className="text-red-500 font-bold">*</i>
        </span>
      </div>
    </div>
  );
}
