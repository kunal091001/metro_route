import React from "react";

export default function StationModal({
  showModal,
  setShowModal,
  stationList,
  stationData,
  setStationData,
  dataState,
  color,
  setShowSearchList,
}) {
  console.log(stationList);
  return (
    <>
      {showModal ? (
        <>
          <div className="h-2/3 m-auto justify-center items-center  flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-full my-6 mx-auto max-w-3xl h-full  ">
              {/*content*/}
              <div className="border-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div
                  className="flex justify-between p-4 border-b items-center"
                  // style={{ backgroundColor: color }}
                >
                  <h3 className="text-3xl font-semibold ml-2">Station List</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black text-3xl mr-8"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                {/*body*/}
                {stationList.map((element) => {
                  return (
                    <div
                      className="relative px-2 flex flex-row justify-between hover:bg-[#eaebed]   "
                      // style={{ backgroundColor: color }}
                      onDoubleClick={() => {
                        if (dataState === 0) {
                          setStationData((prev) => {
                            return {
                              ...prev,
                              from: element.station_name,
                              fromStationCode: element.station_code,
                            };
                          });
                        } else {
                          setStationData((prev) => {
                            return {
                              ...prev,
                              to: element.station_name,
                              toStationCode: element.station_code,
                            };
                          });
                        }

                        setShowModal(false);
                        setShowSearchList(false);
                      }}
                    >
                      <p className=" my-2 text-black font-semibold text-md leading-relaxed pointer-events-none ml-5">
                        {element.station_name}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          textAlign: "right",
                        }}
                        className="mr-12"
                      >
                        {element.station_facility[0] ? (
                          <div className="relative flex flex-col items-center group">
                            <span className="fi fi-br-wheelchair  text-black pl-4 pt-3  cursor-pointer"></span>
                            <div className="absolute bottom-0 flex flex-col items-center hidden mb-8 group-hover:flex">
                              <span className="relative left-2 z-10 px-2 pt-2 pb-3 text-xs text-white whitespace-no-wrap bg-[#00308F] shadow-lg rounded-md pointer-events-none w-max ">
                                Divyang friendly station.
                              </span>
                              <div className="relative left-2 w-3 h-3 z-10 -mt-2 rotate-45 bg-[#00308F]"></div>
                            </div>
                          </div>
                        ) : null}

                        {element.station_facility[1] ? (
                          <div className="relative flex flex-col items-center group">
                            <span className="fi fi-rr-parking  text-black pl-4 pt-3  cursor-pointer"></span>
                            <div className="absolute bottom-0 flex flex-col items-center hidden mb-8 group-hover:flex">
                              <span className="relative left-2 z-10 px-2 pt-2 pb-3 text-xs text-white whitespace-no-wrap bg-[#00308F] shadow-lg rounded-md pointer-events-none w-max">
                                Parking available.
                              </span>
                              <div className=" relative left-2 w-3 h-3 z-10 -mt-2  rotate-45 bg-[#00308F]"></div>
                            </div>
                          </div>
                        ) : null}

                        {element.station_facility[2] ? (
                          <div className="relative flex flex-col items-center group">
                            <span className="fi fi-rr-elevator  text-black pl-4 pt-3  cursor-pointer"></span>
                            <div className="absolute bottom-0 flex flex-col items-center hidden mb-8 group-hover:flex">
                              <span className="relative left-2 z-10 px-2 pt-2 pb-3 text-xs text-white whitespace-no-wrap bg-[#00308F] shadow-lg rounded-md pointer-events-none w-max ">
                                Lift/Escalator available.
                              </span>
                              <div className="relative left-2 w-3 h-3 z-10 -mt-2 rotate-45 bg-[#00308F]"></div>
                            </div>
                          </div>
                        ) : null}

                        {element.station_facility[3] ? (
                          // <i className="fi fi-br-shuffle pl-4 pt-3"></i>
                          <div className="relative flex flex-col items-center group">
                            <span className="fi fi-br-shuffle  text-black pl-4 pt-3  cursor-pointer"></span>
                            <div className="absolute bottom-0 flex flex-col items-center hidden mb-8 group-hover:flex">
                              <span className="relative left-2 z-10 px-2 pt-2 pb-3 text-xs leading-none text-white whitespace-no-wrap bg-[#00308F] shadow-lg rounded-md pointer-events-none w-max">
                                Interchange Available
                              </span>
                              <div className="relative left-2 w-3 h-3 z-10 -mt-2 rotate-45 bg-[#00308F]"></div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
