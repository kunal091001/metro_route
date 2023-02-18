import React, { useState } from "react";

export default function ListCounter() {
  const [num, setNum] = useState(391);
  const [num1, setNum1] = useState(12);
  const [num2, setNum2] = useState(286);

  return (
    <div className="flex  flex-row bg-[#eaebed] rounded-lg w-fit h-fit p-2">
      <div className="flex flex-col text-center p-2  border-r-4 rounded border-white ">
        <span
          className=" md:text-3xl text-xl   text-[#00308F] font-semibold"
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
        <span className="mt-2 text-xs ">
          Total Network Length
          <br />
          <i>(km)</i>
          <i className="text-red-500 font-bold"> *</i>
        </span>
      </div>
      <div className="flex flex-col text-center p-2 border-r-4 rounded border-white">
        <span
          className=" md:text-3xl text-xl text-[#00308F]   font-semibold"
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
        <span className="mt-2 text-xs ">
          Total no of Lines <i className="text-red-500 font-bold">*</i>
        </span>
      </div>
      <div className="flex flex-col p-2 text-center ">
        <span
          className="md:text-3xl text-xl text-[#00308F] rounded-xl  font-semibold "
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
        <span className="mt-2 text-xs ">
          Total no of Stations <i className="text-red-500 font-bold">*</i>
        </span>
      </div>
    </div>
  );
}
