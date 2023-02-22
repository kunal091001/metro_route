import React, { useState, useContext } from "react";
import Arrows from "../../../Assets/images/arrows.png";
import { getStationList } from "../../../utils/apis";
import RouteContext from "../../Contexts/RouteContext";
import StationModal from "./StationModal";
import MetroLogo from "../../../Assets/images/metroLogo.jpg";

export default function SearchList({
  setShowSearchList,
  dataState,
  setDataState,
  setStationData,
  stationData,
}) {
  const [showModal, setShowModal] = useState(false);
  const { metroLines, setMetroLines, stationList, setStationList } =
    useContext(RouteContext);

  const [color, setColor] = useState(null);

  const pickStations = (lineCode) => {
    // console.log(lineCode);
    getStationList(lineCode)
      .then((res) => {
        setColor(
          metroLines.filter((line) => line.line_code === lineCode)[0]
            .secondary_color_code
        );
        setStationList(res);
        setShowModal(true);
        if (stationData.stationStatus === "fromLines") {
          setDataState(0);
        } else {
          setDataState(1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className="bg-[#fff] text-black shadow-2xl  
      h-[38.7rem]  md:h-[29.7rem] overflow-y-scroll rounded-2xl scrollbar-thumb-red-700  scrollbar-track-transparent scrollbar-thin  scrollbar-thumb-rounded-2xl p-8 mx-4"
      >
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
          <button
            className="p-1 ml-4 border-0 text-red-700 text-3xl font-bold "
            onClick={() => setShowSearchList((prev) => !prev)}
          >
            X
          </button>
        </div>

        <ol className="relative mt-8">
          {metroLines
            .filter((metroLineObj) => metroLineObj.id !== 13)
            .map((element) => {
              return (
                <li
                  className="mb-8  "
                  onClick={() => pickStations(element.line_code)}
                >
                  <div
                    className="absolute w-6 h-6  rounded-full mt-4   left-4 border border-white "
                    style={{
                      backgroundColor: element?.primary_color_code,
                    }}
                  ></div>
                  <div className="ml-16">
                    <p className="text-sm font-semibold text-slate-500 py-1">
                      {element?.name} &nbsp; {element.line_color}
                    </p>
                    <p className="text-sm  sm:text-base font-medium pb-1">
                      {" "}
                      {element?.start_station}&nbsp;{" "}
                      <img
                        src={Arrows}
                        className="h-4 w-4 inline-block "
                        alt="arrowImg"
                      />{" "}
                      &nbsp;
                      {element?.end_station}
                    </p>
                  </div>
                </li>
              );
            })}
        </ol>
      </div>

      <StationModal
        showModal={showModal}
        setShowModal={setShowModal}
        stationList={stationList}
        stationData={stationData}
        setStationData={setStationData}
        dataState={dataState}
        color={color}
        setShowSearchList={setShowSearchList}
      />
    </>
  );
}
