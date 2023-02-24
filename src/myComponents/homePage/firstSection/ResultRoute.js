import React, { useContext, useEffect } from "react";
import RouteContext from "../../Contexts/RouteContext";
import MapWindow from "./MapWindow";
import { useParams } from "react-router-dom";
import { getResultStations } from "../../../utils/apinew";

export default function ResultRoute() {
  const {
    finalStationList,
    setFinalStationList,
    changedFinalStationFrom,
    setChangedFinalStationFrom,
    changedFinalStationTo,
    setChangedFinalStationTo,
  } = useContext(RouteContext);

  const { paramChangedFinalStationFrom, paramChangedFinalStationTo } =
    useParams();

  console.log(finalStationList?.path);

  useEffect(() => {
    if (
      paramChangedFinalStationFrom !== "" &&
      paramChangedFinalStationTo !== ""
    ) {
      getResultStations(
        paramChangedFinalStationFrom,
        paramChangedFinalStationTo
      )
        .then((res) => {
          console.log(res);
          setFinalStationList(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Click Again");
    }
  }, [paramChangedFinalStationFrom, paramChangedFinalStationTo]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="border shadow-xl rounded-2xl">
          <div className="flex flex-col m-auto">
            <div className="text-5xl text-black font-bold m-auto  ">
              Destination Route
            </div>
            <div className="flex flex-col ">
              <p className="text-3xl  text-center font-bold mt-8 text-black ">
                Station List
              </p>
              <div>
                Total time to reach destination : {finalStationList?.time}
              </div>
              <div className=" w-1/2 overflow-y-scroll  p-5 m-10    scrollbar-thumb-gray-200  scrollbar-track-transparent scrollbar-thin  scrollbar-thumb-rounded-2xl ">
                <div className="h-96">
                  <ol className="relative border-l-2 border-[#003087]">
                    {finalStationList?.path?.map((element) => {
                      return (
                        <li className="mb-8 ml-4">
                          <div className="absolute w-5 h-5  rounded-full mt-1.5 -left-[0.7rem] border border-white bg-[#003087] "></div>
                          <p className="text-md font-semibold text-gray-900 border-b-2 border-[#003087] uppercase ">
                            {element}
                          </p>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-auto">
          <MapWindow />
        </div>
      </div>
    </>
  );
}
