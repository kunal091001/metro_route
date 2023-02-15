import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import MetroAnimation from "../../lottieAnimations/Animation";

export default function firstpage() {
  return (
    <>
      <Header title="SMR" />
      <Navbar />
      <div className="flex flex-col h-screen items-center ">
        <div>
          <h1 className="md:text-9xl text-7xl sm:mt-14 mt-16   text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-black   from-carbon  to-skyColor ">
            Find Your{" "}
            <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-bl from-black   to-carbon  to-skyColor">
              Route
            </span>{" "}
            <br />
            With{" "}
            <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-bl from-black   to-carbon  to-skyColor">
              SMR
            </span>
          </h1>
        </div>
        <div className=" z-10  w-fit absolute  items-center bottom-0 lg:opacity-25 md:opacity-25   ">
          {/* <MetroAnimation /> */}
        </div>
      </div>
    </>
  );
}
