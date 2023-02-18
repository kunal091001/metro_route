import React, { useContext, useEffect, useState } from "react";
import MetroLogo from "../../../Assets/images/metroLogo.jpg";
import RouteIcon from "../../../Assets/images/route.png";
import ChangeIcon from "../../../Assets/images/arrows.png";
import RouteContext from "../../Contexts/RouteContext";
import { getLineList, getStationList } from "../../../utils/apis";
import StationModal from "./StationModal";

export default function RoutePlanner() {
  const [showModal, setShowModal] = useState(false);
  const { metroLines, setMetroLines, stationList, setStationList } =
    useContext(RouteContext);

  // 0 -> from, 1 -> to
  const [dataState, setDataState] = useState(null);

  const [stationData, setStationData] = useState({
    from: null,
    to: null,
  });

  useEffect(() => {
    getLineList()
      .then((res) => {
        setMetroLines(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const pickStations = (event) => {
    getStationList(event.target.value)
      .then((res) => {
        setStationList(res);
        setShowModal(true);
        if (event.target.name === "fromLines") {
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
      <div className="bg-[#9cafb7] text-white shadow-lg border-[#00308f] h-max rounded-2xl m-4 py-8">
        <div className="flex justify-center items-center mb-2">
          <img
            src={MetroLogo}
            alt="dmrc icon"
            className="rounded-full"
            loading="lazy"
            width={50}
          />
          <h1 className="ml-4 text-2xl font-bold">Plan Your Journey</h1>
        </div>

        <form className="mb-8 px-8">
          <div className="mb-3">
            <label
              htmlFor="fromLines"
              className="md:text-xl text-lg block mb-2 font-medium text-gray-900 dark:text-white"
            >
              From:
            </label>

            <select
              name="fromLines"
              id="fromLines"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full block rounded-md sm:text-sm focus:ring-1 text-black"
              onChange={pickStations}
            >
              <option
                defaultValue={true}
                value={null}
                style={{
                  display: "block",
                  padding: "2rem 1rem",
                  margin: "2rem 1rem",
                  fontSize: 18,
                }}
              >
                Choose Lines & Station
              </option>
              {metroLines
                .filter((metroLineObj) => metroLineObj.id !== 13)
                .map((element) => {
                  console.log("element", element?.primary_color_code);
                  return (
                    <>
                      <option
                        key={element?.id}
                        value={element?.line_code}
                        style={{
                          display: "block",
                          padding: "2rem 1rem",
                          margin: "2rem 1rem",
                          fontSize: 18,
                        }}
                      >
                        {element?.name}: {element?.start_station} to{" "}
                        {element?.end_station}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>

          <div className="mb-3">
            {stationData.from && <p>{stationData.from}</p>}
          </div>

          <div className="mb-3">
            <label
              htmlFor="toLines"
              className="md:text-xl text-lg block mb-2 font-medium text-gray-900 dark:text-white"
            >
              To:
            </label>

            <select
              name="toLines"
              id="toLines"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full block rounded-md sm:text-sm focus:ring-1 text-black"
              onChange={pickStations}
            >
              <option
                defaultValue={true}
                value={null}
                style={{
                  display: "block",
                  padding: "2rem 1rem",
                  margin: "2rem 1rem",
                  fontSize: 18,
                }}
              >
                Choose Lines & Station
              </option>
              {metroLines
                .filter((metroLineObj) => metroLineObj.id !== 13)
                .map((element) => {
                  console.log("element", element?.primary_color_code);
                  return (
                    <>
                      <option
                        key={element?.id}
                        value={element?.line_code}
                        style={{
                          display: "block",
                          padding: "2rem 1rem",
                          margin: "2rem 1rem",
                          fontSize: 18,
                        }}
                      >
                        {element?.name}: {element?.start_station} to{" "}
                        {element?.end_station}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>

          <div className="mb-3">
            {stationData.to && <p>{stationData.to}</p>}
          </div>

          <p className="md:text-2xl font-semibold text-xl pt-4 mt-4">
            Advanced Filter
          </p>

          <div className="flex flex-row gap-4 ">
            <button className=" bg-white text-black hover:bg-[#9cafb7] hover:text-white border border-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-md  text-center inline-flex items-center pr-16 w-fit mb-2  ">
              <img src={RouteIcon} alt="routeicon" className="h-8 w-8 m-2" />
              Shortest Route
            </button>
            <button className="  bg-white text-black hover:bg-[#9cafb7] hover:text-white border border-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-md  text-center inline-flex items-center pr-3 w-fit  ">
              <img src={ChangeIcon} alt="changeicon" className="h-8 w-8 m-2" />
              Minimum Interchange
            </button>
          </div>

          <div className="">
            <button className="   bg-white text-black hover:bg-[#9cafb7] hover:text-white border border-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-md  text-center inline-flex items-center  w-fit px-6  float-left ml-1 p-2">
              Reset
            </button>
            <button className="  bg-white text-black hover:bg-[#9cafb7] hover:text-white border border-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-md  text-center inline-flex items-center px-6 w-fit float-right p-2 ">
              Show Route &amp; Fare
            </button>
          </div>
        </form>
      </div>

      <StationModal
        showModal={showModal}
        setShowModal={setShowModal}
        stationList={stationList}
        stationData={stationData}
        setStationData={setStationData}
        dataState={dataState}
      />
    </>
  );
}

// colors
// #0e6ba8 blue light0.
// #acbdba greyish tone
// #ed1c24 red
// #030027 oxford blue
// #9cafb7 grey light
// eaebed flash white
