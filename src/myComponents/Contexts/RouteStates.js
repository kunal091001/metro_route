import RouteContext from "./RouteContext";
import React, { useState } from "react";

const RouteStates = (props) => {
  // const baseURL = "https://backend.delhimetrorail.com/api/v2/en/line_list";

  // const secondURL = ` https://backend.delhimetrorail.com/api/v2/en/station_by_line/LN1`;

  const [metroLines, setMetroLines] = useState([]);
  const [stationList, setStationList] = useState([]);

  return (
    <RouteContext.Provider
      value={{ metroLines, setMetroLines, stationList, setStationList }}
    >
      {props.children}
    </RouteContext.Provider>
  );
};

export default RouteStates;
