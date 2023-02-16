import React, { useState, useEffect } from "react";
import axios from "axios";
import Train from "../../../Assets/images/train.png";
import MovingTrain from "../../lottieAnimations/animation2";

const baseURL = "https://backend.delhimetrorail.com/api/v2/en/line_list";

function Lines() {
  const [metroLines, setmetroLines] = useState([]);

  useEffect(() => {
    getAnswer();
  }, []);
  const getAnswer = () => {
    axios.get(`${baseURL}`).then((res) => {
      setmetroLines(res.data);
    });
  };

  console.log(metroLines);
  return (
    <div className="flex flex-row flex-wrap gap-x-8 gap-y-4 md:p-4 p-8 justify-center items-center ">
      {metroLines.map((element) => {
        return (
          <div>
            <div
              className={`flex flex-col flex-wrap rounded-lg shadow-lg bg-carbon  justify-center items-center  w-28 h-auto py-4   
              // hover:bg-[${element.primary_color_code}]
            transition ease-in-out delay-100 hover:-translate-y-1 cursor-pointer `}
              onMouseEnter={(event) => {
                event.target.style.background = element.primary_color_code;
                event.target.style.color = "white";
              }}
              onMouseLeave={(event) => {
                event.target.style.background = "#A9A9A9";
                event.target.style.color = "#000000";
              }}
            >
              <img
                className=" h-14 w-14 my-2  pointer-events-none "
                src={Train}
                alt="TRAIN"
              />

              <div className="  text-center pointer-events-none ">
                <p className=" font-bold text-xs  ">{element.name}</p>
                <p className=" text-xs ">{element.line_color}</p>
              </div>
            </div>

            <div className="w-16 ml-6 h-8  top-0 relative ">
              <MovingTrain />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Lines;
