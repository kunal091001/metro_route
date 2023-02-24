import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RouteStates from "../src/myComponents/Contexts/RouteStates";

const cors = require("cors");

App.use(
  cors({
    origin: "https://metro-route.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouteStates>
    <App />
  </RouteStates>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
