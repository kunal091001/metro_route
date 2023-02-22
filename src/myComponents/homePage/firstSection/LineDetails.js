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

  console.log(lineDetails);

  return (
    <>
      <div className="flex flex-col  md:flex-row bg-white  justify-evenly items-center shadow-xl rounded-lg my-16 ">
        <img
          className="w-60 h-60  md:h-auto md:w-48 my-5 "
          src={DelhiMetroImg}
          alt=""
        />
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5
              className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
              style={{ color: lineDetails[0]?.primary_color_code }}
            >
              {lineDetails[0]?.name} {lineDetails[0]?.line_color}
            </h5>
            <div className="flex flex-col sm:flex-row text-center">
              <p className="font-semibold text-black text-xl">
                {lineDetails[0]?.first_station?.station_name}
              </p>
              <img
                src={Arrows}
                className="h-5 w-5 mx-auto mt-1 sm:mt:0 sm:mx-5 rotate-90 sm:rotate-0"
              />
              <p className="font-semibold text-black text-xl">
                {lineDetails[0]?.last_station?.station_name}
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-5 sm:gap-x-16">
            <p
              className=" focus:outline-none  cursor-pointer text-[#000000]  bg-white    rounded-md  outline-none   shadow-md   font-medium   px-6 py-1 text-center text-lg hover:shadow-lg hover:shadow-[#1f008f38] my-2 w-fit h-fit
             "
              style={{ color: lineDetails[0]?.primary_color_code }}
            >
              {lineDetails[0]?.distance} km Distance
            </p>
            <p
              className=" focus:outline-none  cursor-pointer text-[#000000]  bg-white    rounded-md  outline-none   shadow-md   font-medium   px-6 py-1 text-center text-lg hover:shadow-lg hover:shadow-[#1f008f38] my-2 w-fit h-fit
             "
              style={{ color: lineDetails[0]?.primary_color_code }}
            >
              Rs. {lineDetails[0]?.fare} Fare
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <p
            className="text-2xl  text-center font-bold  "
            style={{ color: lineDetails[0]?.primary_color_code }}
          >
            Station List
          </p>
          <div className=" w-fit overflow-y-scroll  p-5 m-10    scrollbar-thumb-gray-200  scrollbar-track-transparent scrollbar-thin  scrollbar-thumb-rounded-2xl ">
            <div className="h-96">
              <ol
                className="relative"
                style={{
                  borderLeft: `1px solid ${lineDetails[0]?.primary_color_code} `,
                }}
              >
                {stationList.map((element) => {
                  return (
                    <li className="mb-8 ml-4">
                      <div
                        className="absolute w-4 h-4  rounded-full mt-1.5 -left-2 border border-white "
                        style={{
                          backgroundColor: lineDetails[0]?.primary_color_code,
                        }}
                      ></div>
                      <p
                        className="text-md font-semibold text-gray-900 "
                        style={{
                          borderBottom: `1px solid ${lineDetails[0]?.primary_color_code} `,
                        }}
                      >
                        {element?.station_name}
                      </p>
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
