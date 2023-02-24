import RouteContext from "./RouteContext";
import React, { useState } from "react";

const RouteStates = (props) => {
  // const baseURL = "https://backend.delhimetrorail.com/api/v2/en/line_list";

  // const secondURL = ` https://backend.delhimetrorail.com/api/v2/en/station_by_line/LN1`;

  const [metroLines, setMetroLines] = useState([]);
  const [stationList, setStationList] = useState([]);
  const [lineDetails, setLineDetails] = useState([]);
  const [lineCode, setLineCode] = useState("");
  const [finalStationList, setFinalStationList] = useState(null);
  const [changedFinalStationFrom, setChangedFinalStationFrom] = useState("");
  const [changedFinalStationTo, setChangedFinalStationTo] = useState("");

  return (
    <RouteContext.Provider
      value={{
        metroLines,
        setMetroLines,
        stationList,
        setStationList,
        lineCode,
        setLineCode,
        lineDetails,
        setLineDetails,
        finalStationList,
        setFinalStationList,
        changedFinalStationFrom,
        setChangedFinalStationFrom,
        changedFinalStationTo,
        setChangedFinalStationTo,
      }}
    >
      {props.children}
    </RouteContext.Provider>
  );
};

export default RouteStates;
