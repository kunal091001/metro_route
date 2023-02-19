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
        console.log(res);
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
      <div className="bg-[#fff] text-black shadow-2xl h-max rounded-2xl m-4 pt-4">
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

        <form className="mb-8 px-8">
          <div className="mb-1">
            <label
              htmlFor="fromLines"
              className="md:text-xl text-lg block  font-medium text-gray-900 dark:text-black"
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
                  // console.log("element", element?.primary_color_code);
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
            {stationData.from && (
              <p className="text-xl font-semibold ">
                Station : {stationData.from}
              </p>
            )}
          </div>

          <div className="mb-1">
            <label
              htmlFor="toLines"
              className="md:text-xl text-lg block mb-1 font-medium text-gray-900 dark:text-black"
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
            {stationData.to && (
              <p className="text-xl font-semibold">
                Station : {stationData.to}
              </p>
            )}
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
            <button className=" focus:outline-none cursor-pointer text-white bg-[#03008f]  rounded-md  outline-none   shadow-md dark:shadow-lg border-2 border-[#03008f]  font-medium   px-10 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]  mr-2  my-2 w-full md:w-1/2">
              Show Route &amp; Fare
            </button>
            <button
              type="reset"
              class="focus:outline-none  cursor-pointer text-[#03008f]  bg-white border-2 border-[#03008f]   rounded-md  outline-none   shadow-md dark:shadow-lg  font-medium   px-10 py-3 text-center text-lg hover:shadow-xl hover:shadow-[#1f008f38]  my-2 w-full md:w-1/2"
            >
              Reset
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
