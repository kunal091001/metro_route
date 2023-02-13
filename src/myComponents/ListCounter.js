import React, { useState } from "react";

export default function ListCounter() {
  const [num, setNum] = useState(391);
  const [num1, setNum1] = useState(12);
  const [num2, setNum2] = useState(286);

  return (
    <div>
      <div className="flex  flex-row bg-carbon gap-10 px-5 py-2 rounded-lg">
        <div className="flex flex-col text-center pr-10  border-r-4 rounded border-whiteColor ">
          <span
            className=" text-3xl  bg-skyColor rounded-xl  font-semibold"
            onMouseEnter={() => {
              let count = 0;
              setInterval(() => {
                if (count < 391) {
                  count++;
                  setNum(count);
                }
              }, 0.1);
            }}
          >
            {num}
          </span>
          <span className="mt-2 text-sm ">
            Total Network Length
            <br />
            <i>(km)</i>
            <i className="text-redColor font-bold"> *</i>
          </span>
        </div>
        <div className="flex flex-col text-center pr-10  border-r-4 rounded border-whiteColor">
          <span
            className=" text-3xl bg-skyColor rounded-xl  font-semibold"
            onMouseEnter={() => {
              let count = 0;
              setInterval(() => {
                if (count < 12) {
                  count++;
                  setNum1(count);
                }
              }, 200);
            }}
          >
            {num1}
          </span>
          <span className="mt-2 text-sm ">
            Total no of Lines <i className="text-redColor font-bold">*</i>
          </span>
        </div>
        <div className="flex flex-col text-center ">
          <span
            className="text-3xl  bg-skyColor rounded-xl  font-semibold "
            onMouseEnter={() => {
              let count = 0;
              setInterval(() => {
                if (count < 286) {
                  count++;
                  setNum2(count);
                }
              }, 0.1);
            }}
          >
            {num2}
          </span>
          <span className="mt-2 text-sm ">
            Total no of Stations <i className="text-redColor  font-bold">*</i>
          </span>
        </div>
      </div>
    </div>
  );
}
