import Lottie from "lottie-react";
import MetroAnimation from "../../Assets/lottieFiles/BulletTrain.json";
import React from "react";

function Animation() {
  return (
    <>
      <div className="w-2/3 sm:w-1/2  mx-auto">
        <Lottie animationData={MetroAnimation} loop={true} />
      </div>
    </>
  );
}

export default Animation;
