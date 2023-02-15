import React from "react";
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import mapImage from "../../../Assets/images/Network_map.jpg";

export default function mapWindow() {
  return (
    <div className="bg-carbon rounded-2xl border  m-4">
      <h1 className="text-3xl text-black text-center">METRO MAP</h1>
      {/* <img
        src={mapImage}
        alt=""
        className="rounded-2xl hover:scale-150 transition-transform "
      /> */}
      <Magnifier
        imageSrc={mapImage}
        imageAlt="Example"
        largeImageSrc={mapImage} // Optional
        // mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
        touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
      />
      {/* <GlassMagnifier
        imageSrc={mapImage}
        imageAlt="Example"
        largeImageSrc={mapImage} // Optional
      /> */}
    </div>
  );
}
