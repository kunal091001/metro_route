import React from "react";

import mapImage from "../../../Assets/images/Network_map.jpg";

export default function mapWindow() {
  return (
    <div className="bg-carbon rounded-2xl border  m-4">
      <h1 className="text-3xl text-black text-center">METRO MAP</h1>
      <img src={mapImage} alt="" className="rounded-2xl  " />
    </div>
  );
}
