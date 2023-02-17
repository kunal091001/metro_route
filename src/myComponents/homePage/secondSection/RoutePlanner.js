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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="journeyPlanner bg-gray-600 text-white border rounded-2xl p-4 m-4">
        <div className="flex mt-4 justify-center items-center">
          <img src={MetroLogo} alt="" className="h-14 mr-2" />
          <h1 className="md:text-3xl text-2xl  font-bold">Plan Your Journey</h1>
        </div>
        <form className="my-2 ">
          <p className="md:text-2xl text-xl pt-1">From</p>

          <select
            name="metroLines"
            id="metroLines"
            className="bg-white appearance-none border-2 border-black rounded w-full  px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-sky-300 h-8"
            onChange={pickStations}
          >
            <option defaultValue={true}> Choose Lines & Station </option>
            {metroLines
              .filter((metroLineObj) => metroLineObj.id !== 13)
              .map((element) => {
                return (
                  <option
                    value={element.line_code}
                    className={`flex flex-col bg-${[
                      element.primary_color_code,
                    ]} `}
                  >
                    <p className="text-md font-semibold ">{element.name}</p>

                    <div className=" mb-3">
                      <p className="text-xs float-left">
                        {element.start_station}
                        &nbsp;&nbsp;
                        <i className="fi fi-sr-exchange"></i>
                        &nbsp;&nbsp;
                        {element.end_station}
                      </p>
                      <p className="text-xs float-right">
                        {element.line_color}&nbsp;&nbsp;{element.id}
                      </p>
                    </div>
                  </option>
                );
              })}
          </select>

          <p className="md:text-2xl text-xl pt-4">To</p>
          <select
            name="metroLines"
            id="metroLines"
            className="bg-white appearance-none border-2 border-black rounded w-full  px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-sky-300 h-8"
            onChange={pickStations}
          >
            <option defaultValue={true}> Choose Lines & Station </option>
            {metroLines
              .filter((metroLineObj) => metroLineObj.id !== 13)
              .map((element) => {
                return (
                  <option
                    value={element.line_code}
                    className={`flex flex-col bg-${[
                      element.primary_color_code,
                    ]} `}
                  >
                    <p className="text-md font-semibold ">{element.name}</p>

                    <div className="mb-3">
                      <p className="text-xs float-left">
                        {element.start_station}
                        &nbsp;&nbsp;
                        <i className="fi fi-sr-exchange"></i>
                        &nbsp;&nbsp;
                        {element.end_station}
                      </p>
                      <p className="text-xs float-right">
                        {element.line_color}&nbsp;&nbsp;{element.id}
                      </p>
                    </div>
                  </option>
                );
              })}
          </select>
          <p className="md:text-2xl font-semibold text-xl pt-4 ">
            Advanced Filter
          </p>
          <div className="flex flex-col ">
            <button className=" bg-white text-black hover:bg-sky-300 border border-black focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-md  text-center inline-flex items-center pr-16 w-fit mb-2  ">
              <img src={RouteIcon} alt="routeicon" className="h-8 w-8 m-2" />
              Shortest Route
            </button>
            <button className="  bg-white text-black hover:bg-sky-300 border border-black focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-md  text-center inline-flex items-center pr-3 w-fit  ">
              <img src={ChangeIcon} alt="changeicon" className="h-8 w-8 m-2" />
              Minimum Interchange
            </button>
          </div>
          <div className="mt-4 ">
            <button className="  bg-white text-black hover:bg-sky-300 border border-black focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-md  text-center inline-flex items-center  w-fit px-6  float-left">
              Reset
            </button>
            <button className="  bg-white text-black hover:bg-sky-300 border border-black focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-md  text-center inline-flex items-center px-6 w-fit float-right  ">
              Show Route &amp; Fare
            </button>
          </div>
        </form>
      </div>

      <StationModal
        showModal={showModal}
        setShowModal={setShowModal}
        stationList={stationList}
      />
    </>
  );
}
