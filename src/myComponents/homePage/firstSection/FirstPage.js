import React from "react";
import ListCounter from "./ListCounter";
export default function firstpage() {
  return (
    <>
      <div className="flex flex-col items-center  ">
        <h1 className="md:text-9xl text-7xl sm:my-14 my-16   text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#00308F]  to-[#ed1c24]  ">
          Find Your Route With SMR
        </h1>
      </div>
      <ListCounter />
    </>
  );
}
