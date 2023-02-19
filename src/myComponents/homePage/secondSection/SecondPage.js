import React from "react";
import RoutePlanner from "./RoutePlanner";
import MapWindow from "./MapWindow";

export default function secondpage() {
  return (
    <section id="secondSection" className="container m-auto ">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center ">
        <MapWindow />
        <RoutePlanner />
      </div>
    </section>
  );
}
