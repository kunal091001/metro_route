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
  const [fare, setFare] = useState(null);
  const [finalFare, setFinalFare] = useState(null);
  const [stationData, setStationData] = useState({
    stationStatus: "",
    from: null,
    to: null,
    fromStationCode: null,
    toStationCode: null,
  });

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
        stationData,
        setStationData,
        fare,
        setFare,
        finalFare,
        setFinalFare,
      }}
    >
      {props.children}
    </RouteContext.Provider>
  );
};

export default RouteStates;
