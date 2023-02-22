import React, { useContext, useState } from "react";
import MetroLogo from "../../../Assets/images/metroLogo.jpg";
import RouteIcon from "../../../Assets/images/route.png";
import ChangeIcon from "../../../Assets/images/arrows.png";
import { getResultStations } from "../../../utils/apis";

import SearchList from "./SearchList";
import RouteContext from "../../Contexts/RouteContext";

export default function RoutePlanner() {
  const [showSearchList, setShowSearchList] = useState(false);

  // 0 -> from, 1 -> to
  const [dataState, setDataState] = useState(null);
  // const [color, setColor] = useState(null);

  const today = new Date();
  const [currDateTime, setCurrDateTime] = useState("");

  const { FinalStationList, setFinalStationList } = useContext(RouteContext);

  const [stationData, setStationData] = useState({
    stationStatus: "",
    from: null,
    to: null,
    fromStationCode: "",
    toStationCode: "",
  });

  const getFinalResults = () => {
    setCurrDateTime(
      today.getFullYear() +
        "-" +
        "0" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        "T" +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds() +
        "." +
        today.getMilliseconds()
    );

    // console.log(currDateTime);

    getResultStations(
      stationData.fromStationCode,
      stationData.toStationCode,
      currDateTime
    )
      .then((res) => {
        console.log(res);
        setFinalStationList(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {showSearchList ? (
        <SearchList
          stationData={stationData}
          setShowSearchList={setShowSearchList}
          dataState={dataState}
          setDataState={setDataState}
          setStationData={setStationData}
        />
      ) : (
        <div className="bg-[#fff] text-black shadow-2xl h-max rounded-2xl p-8 mx-4">
          <div className="flex justify-center items-center mb-2">
            <img
              src={MetroLogo}
              alt="dmrc icon"
              className="rounded-full w-10"
              loading="lazy"
            />
            <h1 className="ml-4 sm:text-3xl text-2xl font-bold text-black ">
              Plan Your Journey
            </h1>
          </div>

          <form>
            <div className="mb-3">
              <label
                htmlFor="fromLines"
                className="md:text-xl text-lg block  font-medium text-gray-900 dark:text-black"
              >
                From:
              </label>
              <input
                type="text"
                id="fromLines "
                name="fromLines"
                className="bg-white border-2 border-[#003087] text-black font-semibold text-sm rounded-lg  block w-full p-2.5"
                placeholder="Choose Line & Station"
                required
                defaultValue={stationData.from}
                onFocus={() => {
                  setShowSearchList((prev) => !prev);
                  setStationData((prev) => {
                    return {
                      ...prev,
                      stationStatus: "fromLines",
                    };
                  });
                }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="toLines"
                className="md:text-xl text-lg block mb-1 font-medium text-gray-900 dark:text-black"
              >
                To:
              </label>
              <input
                type="text"
                id="toLines "
                name="toLines"
                className="bg-white border-2 border-[#003087] text-black font-semibold text-sm rounded-lg  block w-full p-2.5"
                placeholder="Choose Line & Station"
                required
                defaultValue={stationData.to}
                onFocus={() => {
                  setShowSearchList((prev) => !prev);
                  setStationData((prev) => {
                    return {
                      ...prev,
                      stationStatus: "toLines",
                    };
                  });
                }}
              />
            </div>

            <p className="md:text-xl font-semibold text-lg text-black mb-1  ">
              Advanced Filter:
            </p>

            <div className="flex flex-col justify-between md:flex-row ">
              <button
                className="flex focus:outline-none  cursor-pointer text-[#03008f]  bg-white border-2 border-[#03008f]   rounded-md  outline-none   shadow-md dark:shadow-lg  font-medium   px-6 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38] my-2
             "
              >
                <img
                  src={RouteIcon}
                  alt="routeicon"
                  width={25}
                  height={25}
                  className="mr-2"
                />
                Shortest Route
              </button>
              <button className="flex focus:outline-none  cursor-pointer text-[#03008f]  bg-white border-2 border-[#03008f]   rounded-md  outline-none   shadow-md dark:shadow-lg  font-medium   px-6 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]  my-2 ">
                <img
                  src={ChangeIcon}
                  alt="changeicon"
                  width={22}
                  height={22}
                  className="mr-2 "
                />
                Minimum Interchange
              </button>
            </div>

            <div className="mt-4 flex flex-col md:flex-row">
              <button
                className=" focus:outline-none cursor-pointer text-white bg-[#03008f]  rounded-md  outline-none   shadow-md dark:shadow-lg border-2 border-[#03008f]  font-medium   px-10 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]  mr-2  my-2 w-full md:w-1/2"
                // onClick={getFinalResults}
              >
                Show Route &amp; Fare
              </button>
              <button
                type="reset"
                className="focus:outline-none  cursor-pointer text-[#03008f]  bg-white border-2 border-[#03008f]   rounded-md  outline-none   shadow-md dark:shadow-lg  font-medium   px-10 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]  my-2 w-full md:w-1/2"
                onClick={() => setStationData({ from: null, to: null })}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
