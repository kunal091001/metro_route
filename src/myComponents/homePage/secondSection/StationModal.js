import React from "react";

export default function StationModal({ showModal, setShowModal, stationList }) {
  console.log(stationList);
  return (
    <>
      {showModal ? (
        <>
          <div className=" justify-center items-center  flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-full my-6 mx-auto max-w-3xl h-full">
              {/*content*/}
              <div className="border-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Station List</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                {stationList.map((element) => {
                  return (
                    <div className="relative px-2 ">
                      <p className=" my-2 text-slate-500 text-sm leading-relaxed float-left">
                        {element.station_name}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </p>
                      <div className="float-right flex flex-row gap-2">
                        <p className=" my-2">
                          {element.station_facility[0] ? (
                            <i class="fi fi-br-wheelchair"></i>
                          ) : (
                            <i className=""></i>
                          )}
                        </p>
                        <p className=" my-2">
                          {element.station_facility[1] ? (
                            <i className="fi fi-rr-parking"></i>
                          ) : (
                            <i className=""></i>
                          )}
                        </p>
                        <p className=" my-2">
                          {element.station_facility[2] ? (
                            <i class="fi fi-rr-elevator"></i>
                          ) : (
                            <i className=""></i>
                          )}
                        </p>
                        <p className=" my-2">
                          {element.station_facility[3] ? (
                            <i class="fi fi-br-shuffle"></i>
                          ) : (
                            <i className=""></i>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/*footer*/}

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
