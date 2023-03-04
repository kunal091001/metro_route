import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RouteContext from "../../Contexts/RouteContext";
import Train from "../../../Assets/images/train.png";

function Lines() {
  const { metroLines, setMetroLines, lineCode, setLineCode } =
    useContext(RouteContext);
  const navigate = useNavigate();

  const moveToLineDetails = (code) => {
    setLineCode(code);
    navigate(`/linedetails/${code}`);
  };

  return (
    <>
      <div className="grid grid-cols-2  md:grid-cols-4  gap-4 p-2 justify-center items-center mx-5 gap-y-16  ">
        {metroLines.map((element) => {
          return (
            <div>
              <div
                className={`flex flex-col flex-wrap rounded-lg shadow-lg shadow-[#ed1c2346] hover:shadow-[#fff] bg-[#fff]  justify-center items-center h-auto w-auto py-4  
            transition ease-in-out  hover:-translate-y-1 cursor-pointer `}
                onMouseEnter={(event) => {
                  event.target.style.background = element.primary_color_code;
                  event.target.style.color = "white";
                }}
                onMouseLeave={(event) => {
                  event.target.style.background = "#fff";
                  event.target.style.color = "#000000";
                }}
                onClick={() => moveToLineDetails(element.line_code)}
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
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Lines;
