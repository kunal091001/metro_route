import { useState } from "react";
import LazyLoad from "react-lazy-load";
import mapImage from "../../../Assets/images/Network_map.jpg";

export default function MapWindow({
  src = mapImage,
  magnifierHeight = 250,
  magnifieWidth = 250,
  zoomLevel = 3,
}) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return (
    <div className="bg-[#9cafb7] rounded-2xl border-2 border-[#00308f]  m-4">
      <h1 className="text-3xl text-white text-center font-bold">METRO MAP</h1>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <LazyLoad>
          <img
            id="mapnetwork"
            src={src}
            style={{ height: "100%", width: "100%" }}
            className=" rounded-2xl"
            onMouseEnter={(e) => {
              // update image size and turn-on magnifier
              const elem = e.currentTarget;
              const { width, height } = elem.getBoundingClientRect();
              setSize([width, height]);
              setShowMagnifier(true);
            }}
            onMouseMove={(e) => {
              // update cursor position
              const elem = e.currentTarget;
              const { top, left } = elem.getBoundingClientRect();

              // calculate cursor position on the image
              const x = e.pageX - left - window.pageXOffset;
              const y = e.pageY - top - window.pageYOffset;
              setXY([x, y]);
            }}
            onMouseLeave={() => {
              // close magnifier
              setShowMagnifier(false);
            }}
            alt={"img"}
            loading={"lazy"}
          />
        </LazyLoad>

        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",

            // prevent magnifier blocks the mousemove event of img
            pointerEvents: "none",
            // set size of magnifier
            height: `${magnifierHeight}px`,
            width: `${magnifieWidth}px`,
            // move element center to cursor pos
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifieWidth / 2}px`,
            opacity: "1", // reduce opacity so you can verify position
            border: "1px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            overflow: "hidden",
            //calculate zoomed image size
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,

            //calculate position of zoomed image.
            backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          }}
        ></div>
      </div>
    </div>
  );
}
