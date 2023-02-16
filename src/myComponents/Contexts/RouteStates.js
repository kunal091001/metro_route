import RouteContext from "./RouteContext";
import React, { useState, useEffect } from "react";
import axios from "axios";

const RouteStates = (props) => {
  const baseURL = "https://backend.delhimetrorail.com/api/v2/en/line_list";
  const [metroLines, setmetroLines] = useState([]);

  useEffect(() => {
    getAnswer();
  }, []);
  const getAnswer = () => {
    axios.get(`${baseURL}`).then((res) => {
      setmetroLines(res.data);
    });
  };

  return (
    <RouteContext.Provider value={{ metroLines, setmetroLines }}>
      {props.children}
    </RouteContext.Provider>
  );
};

export default RouteStates;
