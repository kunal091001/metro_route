import React, { useContext, useEffect, useState } from "react";
import RouteContext from "../../Contexts/RouteContext";
import MapWindow from "./MapWindow";
import { useParams } from "react-router-dom";
import { getResultStations } from "../../../utils/apinew";
import Animation from "../../lottieAnimations/Animation";
import { getResultFair } from "../../../utils/apis";

export default function ResultRoute() {
  const { finalStationList, setFinalStationList } = useContext(RouteContext);
  const [loading, setLoading] = useState(true);
  const { paramFinalStationFrom, paramFinalStationTo } = useParams();
  const { paramFinalStationFromCode, paramFinalStationToCode } = useParams();
  const {
    stationData,
    setStationData,
    fare,
    setFare,
    finalFare,
    setFinalFare,
  } = useContext(RouteContext);
  const date = new Date();
  const totalTimeToDestination = Math.round(finalStationList?.result?.time);
  var counter = 0;
  const startingTime = date.toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  function checkInterchange(currStation) {
    if (
      currStation === finalStationList?.result?.interchange[counter] &&
      counter < finalStationList?.result?.interchange.length
    ) {
      counter++;
      return (
        <>
          <div className="flex justify-between">
            <p className="font-bold text-lg ">{currStation}</p>
            <div className="relative flex flex-col items-center group">
              <span className="fi fi-br-shuffle  text-black  px-2 mr-8 cursor-pointer"></span>
              <div className="absolute bottom-0  flex-col items-center hidden mb-8 group-hover:flex">
                <span className="relative -left-4 z-10 px-2 py-2 pb-3 text-xs leading-none text-white whitespace-no-wrap bg-[#00308F] shadow-lg rounded-md pointer-events-none w-max">
                  Interchange Station
                </span>
                <div className="relative -left-4 w-3 h-3 z-10 -mt-2 rotate-45 bg-[#00308F]"></div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return currStation;
    }
  }
  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }
  const getreachTime = addMinutes(date, totalTimeToDestination);

  const reachingTime = getreachTime.toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  useEffect(() => {
    setLoading(true);
    getResultStations(paramFinalStationFrom, paramFinalStationTo)
      .then((res) => {
        setFinalStationList(res);
      })

      .catch((error) => {
        setLoading(true);
        console.log(error);
      });

    getResultFair(paramFinalStationFromCode, paramFinalStationToCode)
      .then((res) => {
        setFinalFare(res);
      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, [
    paramFinalStationFrom,
    paramFinalStationTo,
    paramFinalStationFromCode,
    paramFinalStationToCode,
  ]);
  // console.log(finalFare);
  setFare(finalFare?.weekday_fare);

  return (
    <>
      {loading && <Animation />}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 ">
          <div className="border shadow-xl rounded-2xl ">
            <div className="flex flex-col m-auto">
              <div className="text-center w-full relative  mx-auto shadow-lg shadow-[#002f8761] bg-white  top-0 z-50 rounded-md ">
                <div className="text-3xl md:text-5xl text-black font-bold py-4 bg-white ">
                  Destination Route
                </div>
                <div className="text-base flex items-center justify-evenly font-bold text-slate-600  ">
                  <span className="fi fi-br-time-quarter-past text-black text-4xl p-3"></span>
                  &nbsp; {startingTime} --&nbsp;
                  {reachingTime}
                  <span className="text-xl">
                    {" "}
                    {totalTimeToDestination}
                    &nbsp;Minutes
                  </span>{" "}
                </div>
              </div>

              <div className="h-[32rem] w-full overflow-y-scroll  px-5 pb-5  scrollbar-thumb-gray-200  scrollbar-track-transparent scrollbar-thin  scrollbar-thumb-rounded-2xl relative ">
                <div className=" focus:outline-none cursor-pointer text-white bg-[#03008f]  rounded-md  outline-none   shadow-md  border-2 border-[#03008f]  font-medium   px-10 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]   my-8 w-full ">
                  Total Fare {fare}
                </div>
                <p className="text-4xl text-center font-bold mt-4 mb-8 text-black ">
                  Station List
                </p>
                <ol className="relative border-l-2 border-[#03008f] mx-4">
                  {finalStationList?.result?.path.map((element) => {
                    return (
                      <li className="mb-8 ml-4">
                        <div className="absolute w-5 h-5  rounded-full mt-1.5 -left-[0.7rem] border border-white bg-[#03008f] "></div>
                        <div className="text-md font-semibold text-gray-900 border-b-2 border-[#03008f]  ">
                          {checkInterchange(element)}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>

          <div className="m-auto mb-16 md:mb-auto">
            <MapWindow />
          </div>
        </div>
      )}
    </>
  );
}
