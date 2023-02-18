import React from "react";
import RoutePlanner from "./RoutePlanner";
import MapWindow from "./MapWindow";
import Lines from "./Lines";

export default function secondpage() {
  return (
    <section id="secondSection" className="container">
      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="my-8">
          <MapWindow />
        </div>
        <div className="my-8">
          <RoutePlanner />
        </div>
      </div>
      <div>
        <Lines />
      </div>
    </section>
  );
}
