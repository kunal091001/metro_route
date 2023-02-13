import React from "react";
import RoutePlanner from "./RoutePlanner";
import MapWindow from "./MapWindow";
import Lines from "./Lines";

export default function secondpage() {
  return (
    <section id="secondSection">
      <div className="grid md:grid-cols-2 sm:grid-cols-1  ">
        <RoutePlanner />
        <MapWindow />
      </div>
      <div className="">
        <Lines />
      </div>
    </section>
  );
}
