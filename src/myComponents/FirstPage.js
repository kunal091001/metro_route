import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import MetroAnimation from "./Animation";

export default function firstpage() {
  return (
    <>
      <Header title="SMR" />
      <Navbar />
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <h1 className="text-9xl text-center mt-16 font-bold text-transparent bg-clip-text bg-gradient-to-r from-skyColor to-carbon  ">
            Find Your Route <br />
            With SMR
          </h1>
        </div>
        <div className="w-fit mt-24 ">
          <MetroAnimation />
        </div>
      </div>
    </>
  );
}
