import React, { useContext, useEffect } from "react";
import RouteContext from "../../Contexts/RouteContext";
import { getLineDetails, getStationList } from "../../../utils/apis";
import DelhiMetroImg from "../../../Assets/images/delhimetro.png";
import Arrows from "../../../Assets/images/arrows.png";
import { useParams } from "react-router-dom";

export default function LineDetails() {
  const {
    lineCode,
    setLineCode,
    lineDetails,
    setLineDetails,
    stationList,
    setStationList,
  } = useContext(RouteContext);

  const { paramLineCode } = useParams();

  useEffect(() => {
    getLineDetails(paramLineCode)
      .then((res) => {
        setLineDetails(res);
      })
      .catch((error) => {
        console.log(error);
      });

    getStationList(paramLineCode)
      .then((res) => {
        setStationList(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [paramLineCode]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 my-16 gap-y-16 ">
        <div className="flex flex-col bg-white  justify-between items-center text-center gap-y-8 ">
          <img
            className="w-56 h-56  md:h-auto md:w-48  "
            src={DelhiMetroImg}
            alt=""
          />
          <div className="flex flex-col justify-center items-center p-4 leading-normal gap-y-12">
            <div
              className=" text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
              style={{ color: lineDetails[0]?.primary_color_code }}
            >
              {lineDetails[0]?.name} {lineDetails[0]?.line_color}
            </div>
            <div className="flex flex-col sm:flex-row text-center ">
              <p className="font-semibold text-black text-xl">
                {lineDetails[0]?.first_station?.station_name}
              </p>
              <img
                src={Arrows}
                className="h-5 w-5 my-1 mx-auto  sm:mt:0 sm:mx-5 rotate-90 sm:rotate-0"
              />
              <p className="font-semibold text-black text-xl">
                {lineDetails[0]?.last_station?.station_name}
              </p>
            </div>
          </div>
          <div className="flex w-full justify-evenly items-center ">
            <p
              className=" focus:outline-none  cursor-pointer text-[#000000]  bg-white    rounded-md  outline-none   shadow-md   font-medium   px-6 py-1 text-center text-lg hover:shadow-lg hover:shadow-[#1f008f38] my-2 w-fit h-fit
             "
              style={{ color: lineDetails[0]?.primary_color_code }}
            >
              {lineDetails[0]?.distance} km Distance
            </p>
            <p
              className=" focus:outline-none  cursor-pointer text-[#000000]  bg-white    rounded-md  outline-none   shadow-md   font-medium   px-6 py-1 text-center text-lg hover:shadow-lg hover:shadow-[#1f008f38]  my-2 w-fit h-fit
             "
              style={{ color: lineDetails[0]?.primary_color_code }}
            >
              Rs. {lineDetails[0]?.fare} Fare
            </p>
          </div>
        </div>

        <div className="flex flex-col ">
          <div
            className="text-3xl  text-center font-bold  "
            style={{ color: lineDetails[0]?.primary_color_code }}
          >
            Station List
          </div>
          <div className=" w-full overflow-y-scroll px-10    scrollbar-thumb-gray-200  scrollbar-track-transparent scrollbar-thin  scrollbar-thumb-rounded-2xl py-4">
            <div className="h-96">
              <ol
                className="relative"
                style={{
                  borderLeft: `1px solid ${lineDetails[0]?.primary_color_code} `,
                }}
              >
                {stationList.map((element) => {
                  return (
                    <li className=" my-6 ml-4">
                      <div
                        className="absolute w-4 h-4  rounded-full mt-3.5 -left-2 border border-white "
                        style={{
                          backgroundColor: lineDetails[0]?.primary_color_code,
                        }}
                      ></div>
                      <div
                        className="flex justify-between items-center text-md font-semibold text-gray-900  "
                        style={{
                          borderBottom: `1px solid ${lineDetails[0]?.primary_color_code} `,
                        }}
                      >
                        {element?.station_name}

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            textAlign: "right",
                          }}
                          className="items-center pb-2 "
                        >
                          {element?.station_facility[0] ? (
                            <div className="relative flex flex-col items-center group ">
                              <span className="fi fi-br-wheelchair  text-black ml-4 mt-3  cursor-pointer"></span>
                              <div className="absolute bottom-0  flex-col items-center hidden mb-8 group-hover:flex">
                                <span className="relative left-2 z-10 px-2 pt-2 pb-3 text-xs text-white whitespace-no-wrap bg-[#00308F] shadow-lg rounded-md pointer-events-none w-max ">
                                  Divyang friendly station.
                                </span>
                                <div className="relative left-2 w-3 h-3 z-10 -mt-2 rotate-45 bg-[#00308F]"></div>
                              </div>
                            </div>
                          ) : null}

                          {element?.station_facility[1] ? (
                            <div className="relative flex flex-col items-center group">
                              <span className="fi fi-rr-parking  text-black ml-4 mt-3  cursor-pointer"></span>
                              <div className="absolute bottom-0  flex-col items-center hidden mb-8 group-hover:flex">
                                <span className="relative left-2 z-10 px-2 pt-2 pb-3 text-xs text-white whitespace-no-wrap bg-[#00308F] shadow-lg rounded-md pointer-events-none w-max">
                                  Parking available.
                                </span>
                                <div className=" relative left-2 w-3 h-3 z-10 -mt-2  rotate-45 bg-[#00308F]"></div>
                              </div>
                            </div>
                          ) : null}

                          {element?.station_facility[2] ? (
                            <div className="relative flex flex-col items-center group">
                              <span className="fi fi-rr-elevator  text-black ml-4 mt-3  cursor-pointer"></span>
                              <div className="absolute bottom-0  flex-col items-center hidden mb-8 group-hover:flex">
                                <span className="relative left-2 z-10 px-2 pt-2 pb-3 text-xs text-white whitespace-no-wrap bg-[#00308F] shadow-lg rounded-md pointer-events-none w-max ">
                                  Lift/Escalator available.
                                </span>
                                <div className="relative left-2 w-3 h-3 z-10 -mt-2 rotate-45 bg-[#00308F]"></div>
                              </div>
                            </div>
                          ) : null}

                          {element?.station_facility[3] ? (
                            <div className="relative flex flex-col items-center group">
                              <span className="fi fi-br-shuffle  text-black ml-4 mt-3  cursor-pointer"></span>
                              <div className="absolute bottom-0  flex-col items-center hidden mb-8 group-hover:flex">
                                <span className="relative left-2 z-10 px-2 pt-2 pb-3 text-xs leading-none text-white whitespace-no-wrap bg-[#00308F] shadow-lg rounded-md pointer-events-none w-max">
                                  Interchange Available
                                </span>
                                <div className="relative left-2 w-3 h-3 z-10 -mt-2 rotate-45 bg-[#00308F]"></div>
                              </div>
                            </div>
                          ) : null}

                          <div className="relative flex flex-col items-center group pb-1">
                            <div
                              className="rounded-full w-4 h-4   ml-4 mt-3  cursor-pointer "
                              style={{
                                backgroundColor: `${
                                  element.status === "Station Open"
                                    ? "#03C04A"
                                    : "red"
                                }`,
                              }}
                            ></div>
                            <div className="absolute bottom-0  flex-col items-center hidden mb-8 group-hover:flex">
                              <span className="relative left-2 z-10 px-2 pt-2 pb-3 text-xs leading-none text-white whitespace-no-wrap bg-[#00308F] shadow-lg rounded-md pointer-events-none w-max">
                                {element.status === "Station Open"
                                  ? "Station Open"
                                  : "Station Closed"}
                              </span>
                              <div className="relative left-2 w-3 h-3 z-10 -mt-2 rotate-45 bg-[#00308F]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
