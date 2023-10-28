import React, { useEffect, useRef } from "react";
import "./Loading.css";
import lottie from "lottie-web";
import loopyPlane from "/src/assets/loopyplane.json";

function Loading() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animation = null;

    if (container && container.querySelector("svg") === null) {
      animation = lottie.loadAnimation({
        container,
        animationData: loopyPlane,
      });

      animation.setSpeed(2);
    }

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return <div ref={containerRef} id="loading-logo"></div>;
}

export default Loading;
