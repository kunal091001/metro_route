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
          <h1 className="md:text-9xl text-7xl sm:mt-14 mt-16   text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-black    to-sky-400">
            Find Your{" "}
            <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-bl from-black    to-sky-400">
              Route
            </span>{" "}
            <br />
            With{" "}
            <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-bl from-black    to-sky-400">
              SMR
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}
