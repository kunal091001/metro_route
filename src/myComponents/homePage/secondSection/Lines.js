import React, { useContext } from "react";
import RouteContext from "../../Contexts/RouteContext";
import Train from "../../../Assets/images/train.png";
import MovingTrain from "../../lottieAnimations/animation2";

function Lines() {
  const { metroLines, setMetroLines } = useContext(RouteContext);

  return (
    <div className="grid grid-cols-2  md:grid-cols-6  gap-4 p-2 justify-center items-center ">
      {metroLines.map((element) => {
        return (
          <div>
            <div
              className={`flex flex-col flex-wrap rounded-lg shadow-lg bg-grey-300  justify-center items-center h-auto w-auto py-4  
            transition ease-in-out  hover:-translate-y-1 cursor-pointer `}
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
                className=" h-16 w-16 my-2  pointer-events-none "
                src={Train}
                alt="TRAIN"
              />

              <div className="  text-center pointer-events-none ">
                <p className=" font-bold text-sm  ">{element.name}</p>
                <p className=" text-sm ">{element.line_color}</p>
              </div>
              {/* <div className="w-16 h-8 pointer-events-none ">
                <MovingTrain />
              </div> */}
            </div>

            {/* <div className="w-16 ml-6 h-8  top-0 relative ">
              <MovingTrain />
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default Lines;
