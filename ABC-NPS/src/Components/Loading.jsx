import React, { useEffect, useRef } from "react";
import "./Loading.css";
import lottie from "lottie-web";
// import paperAirplane from "/src/assets/Paper-Airplane.json";
import loopyPlane from "/src/assets/loopyplane.json";

function Loading() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container && container.querySelector("svg") === null) {
      lottie.loadAnimation({
        container,
        // animationData: paperAirplane,
        animationData: loopyPlane,
      });
    }
  }, []);

  return <div ref={containerRef} id="loading-logo"></div>;
}

export default Loading;
