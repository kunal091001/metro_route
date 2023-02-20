import React, { useContext, useEffect } from "react";
import RouteContext from "../../Contexts/RouteContext";
import { getLineDetails, getStationList } from "../../../utils/apis";
import DelhiMetroImg from "../../../Assets/images/delhimetro.png";
import Arrows from "../../../Assets/images/arrows.png";

export default function LineDetails() {
  const {
    lineCode,
    setLineCode,
    lineDetails,
    setLineDetails,
    stationList,
    setStationList,
  } = useContext(RouteContext);

  useEffect(() => {
    getLineDetails(lineCode)
      .then((res) => {
        setLineDetails(res);
      })
      .catch((error) => {
        console.log(error);
      });

    getStationList(lineCode)
      .then((res) => {
        setStationList(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [lineCode]);

  console.log(lineDetails);

  return (
    <>
      <div class="flex flex-col  md:flex-row bg-white border justify-evenly items-center border-gray-200 rounded-lg shadow  ">
        <div className="my-20">
          <div class=" flex flex-col sm:flex gap-x-20  ">
            <img
              class="h-60 float-left first-letter:"
              src={DelhiMetroImg}
              alt=""
            />
            <p
              class="my-20 text-5xl font-bold tracking-tight  "
              style={{ color: lineDetails[0]?.primary_color_code }}
            >
              {lineDetails[0]?.name} <br /> {lineDetails[0]?.line_color}
            </p>
          </div>
          <div className="flex justify-end items-center gap-x-8">
            <p
              className=" focus:outline-none  cursor-pointer text-[#000000]  bg-white    rounded-md  outline-none   shadow-md   font-medium   px-6 py-1 text-center text-lg hover:shadow-lg hover:shadow-[#1f008f38] my-2 w-fit h-fit
             "
            >
              {lineDetails[0]?.distance} km Distance
            </p>
            <p
              className=" focus:outline-none  cursor-pointer text-[#000000]  bg-white    rounded-md  outline-none   shadow-md   font-medium   px-6 py-1 text-center text-lg hover:shadow-lg hover:shadow-[#1f008f38] my-2 w-fit h-fit
             "
            >
              Rs. {lineDetails[0]?.fare} Fare
            </p>
          </div>
          <div className="flex  text-xl gap-x-5 my-20 font-medium   ">
            <div className="flex-col text-center">
              <p className="" id="starting station">
                {lineDetails[0]?.first_station?.station_name}
              </p>
              <label
                htmlFor="starting section"
                className="text-sm font-extralight text-slate-500"
              >
                Starting Station
              </label>
            </div>
            <img src={Arrows} className="h-5 mt-1 " />
            <div className="flex-col text-center">
              <p id="ending station">
                {lineDetails[0]?.last_station?.station_name}
              </p>
              <label
                htmlFor="starting section"
                className="text-sm font-extralight text-slate-500"
              >
                Ending Station
              </label>
            </div>
          </div>
        </div>
        <div className=" w-fit overflow-y-scroll  p-5 m-10 ">
          <div className="h-96">
            <ol
              class="relative"
              style={{
                borderLeft: `1px solid ${lineDetails[0]?.primary_color_code} `,
              }}
            >
              {stationList.map((element) => {
                return (
                  <li class="mb-8 ml-4">
                    <div
                      class="absolute w-4 h-4  rounded-full mt-1.5 -left-2 border border-white "
                      style={{
                        backgroundColor: lineDetails[0]?.primary_color_code,
                      }}
                    ></div>
                    <p
                      class="text-md font-semibold text-gray-900 "
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
    </>
  );
}
