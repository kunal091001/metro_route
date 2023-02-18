import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

export default function firstpage() {
  return (
    <>
      <Header title="SMR" />
      <Navbar />
      <div className="flex flex-col h-screen items-center ">
        <div>
          <h1 className="md:text-9xl text-7xl sm:mt-14 mt-16   text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-[#00308F]  to-[#ed1c24]  ">
            Find Your{" "}
            <span className="font-extrabold  text-transparent bg-clip-text bg-gradient from-[#00308F]  to-[#ed1c24] ">
              Route
            </span>{" "}
            <br />
            With{" "}
            <span className="font-extrabold  text-transparent bg-clip-text bg-gradient from-[#00308F]  to-[#ed1c24] ">
              SMR
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
