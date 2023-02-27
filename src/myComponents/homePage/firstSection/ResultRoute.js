import React, { useContext, useEffect, useState } from "react";
import RouteContext from "../../Contexts/RouteContext";
import MapWindow from "./MapWindow";
import { useParams } from "react-router-dom";
import { getResultStations } from "../../../utils/apinew";

export default function ResultRoute() {
  const { finalStationList, setFinalStationList } = useContext(RouteContext);

  const { paramFinalStationFrom, paramFinalStationTo } = useParams();

  const date = new Date();
  const time = date.toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // const endTime=

  // var interchangeCounter = 0;

  // console.log(new Date(`2023-02-27T02:${finalStationList?.result?.time}:00Z`));

  useEffect(() => {
    getResultStations(paramFinalStationFrom, paramFinalStationTo)
      .then((res) => {
        console.log(res);
        setFinalStationList(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [paramFinalStationFrom, paramFinalStationTo]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 ">
        <div className="border shadow-xl rounded-2xl ">
          <div className="flex flex-col m-auto">
            <div className="text-center w-full relative  mx-auto shadow-lg shadow-[#002f8761] bg-white  top-0 z-50 rounded-md ">
              <div className="text-3xl md:text-5xl text-black font-bold py-4 bg-white ">
                Destination Route
              </div>
              <div className="text-base flex items-center justify-evenly font-bold text-slate-600  ">
                <span className="fi fi-br-time-quarter-past text-black text-4xl p-3"></span>
                &nbsp; {time} --&nbsp;
                {time}
                <span className="text-xl">
                  {" "}
                  {Math.round(finalStationList?.result?.time)}
                  &nbsp;Minutes
                </span>{" "}
              </div>
            </div>

            <div className="h-[32rem] w-full overflow-y-scroll  px-5 pb-5  scrollbar-thumb-gray-200  scrollbar-track-transparent scrollbar-thin  scrollbar-thumb-rounded-2xl relative ">
              <div className=" focus:outline-none cursor-pointer text-white bg-[#03008f]  rounded-md  outline-none   shadow-md  border-2 border-[#03008f]  font-medium   px-10 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]   my-8 w-full ">
                Total Fare 50
              </div>
              <p className="text-4xl text-center font-bold mt-4 mb-8 text-black ">
                Station List
              </p>
              <ol className="relative border-l-2 border-[#03008f] mx-4">
                {finalStationList?.result?.path.map((element) => {
                  return (
                    <li className="mb-8 ml-4">
                      <div className="absolute w-5 h-5  rounded-full mt-1.5 -left-[0.7rem] border border-white bg-[#03008f] "></div>
                      <p className="text-md font-semibold text-gray-900 border-b-2 border-[#03008f]  ">
                        {element}
                      </p>
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
    </>
  );
}
