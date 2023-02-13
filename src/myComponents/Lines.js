import React from "react";
import Train from "../images/train.png";

const metroLines = [
  {
    line: "LINE 1",
    name: "RED LINE",
    color: "red",
  },
  {
    line: "LINE 2",
    name: "YELLOW LINE",
    color: "yellow",
  },
  {
    line: "LINE 3",
    name: "BLUE LINE",
    color: "sky",
  },
  {
    line: "LINE 4",
    name: "BLUE LINE",
    color: "sky",
  },
  {
    line: "LINE 5",
    name: "GREEN LINE",
    color: "green",
  },
  {
    line: "LINE 6",
    name: "VIOLET LINE",
    color: "violet",
  },
  {
    line: "LINE 7",
    name: "PINK LINE",
    color: "pink",
  },
  {
    line: "LINE 8",
    name: "MAGENTA LINE",
    color: "magenta",
  },
  {
    line: "LINE 9",
    name: "GREY LINE",
    color: "stone",
  },
  {
    line: "AIRPORT EXPRESS",
    name: "ORANGE LINE",
    color: "orange",
  },
  {
    line: "RAPID METRO",
    name: "RMGL",
    color: "cyan",
  },
];

function Lines() {
  const backColor = (event) => {
    event.target.style.background = "#A9A9A9";
    event.target.style.color = "#000000";
  };

  const changeColor = (event) => {
    var current = event.target.innerText;
    const arr = current.split(" ");
    var myColor = arr[1].split("\n")[2];

    event.target.style.background = myColor;
    event.target.style.color = "white";
  };

  return (
    <div className="flex flex-row flex-wrap gap-x-2 gap-y-4 md:p-4 p-8 justify-center items-center ">
      {metroLines.map((element) => {
        return (
          <div
            className={`flex flex-col flex-wrap rounded-lg shadow-lg bg-carbon  justify-center items-center  w-28 h-auto py-4  
            transition ease-in-out delay-100 hover:-translate-y-1 cursor-pointer `}
            onMouseEnter={changeColor}
            onMouseLeave={backColor}
          >
            <img className=" h-14 w-14 my-2  " src={Train} alt="TRAIN" />

            <div className="  text-center ">
              <p className=" font-bold text-xs  ">{element.line}</p>
              <p className=" text-xs ">{element.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Lines;
