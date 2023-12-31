import React, { useEffect, useState, useContext } from "react";
import { PreventContext } from "../context/PreventContext";

const SvgModule = () => {
  const { preventAnim } = useContext(PreventContext);
  const [isActive, setIsActive] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundColor: "lightgrey",
    opacity: preventAnim ? 1 : 0,
    transition: "opacity 0.8s ease",
  });

  useEffect(() => {
    if (!preventAnim) {
      setTimeout(() => {
        setIsActive(true);
        setBackgroundStyle({
          ...backgroundStyle,
          opacity: 1,
        });
      }, 1700);
    }
  }, []);
  return (
    <svg
      className={`svg-container${isActive ? " active" : ""}`}
      // class="absolute z-0 inset-0 h-full w-full"
      viewBox="0 0 1322 151"
      preserveAspectRatio="xMinYMin slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1600"
      height="150"
      style={backgroundStyle}
    >
      <g clipPath="url(#clip0_215_1707)">
        <path
          d="M-58 192.957C54.3602 131.041 162.743 67.3634 266.242 0.872637C337.306 -44.781 403.999 -92.3458 473.098 -138.885C506.256 -161.217 537.627 -186.276 574.737 -206.726C580.494 -209.898 594.102 -214.754 591.677 -206.2C589.614 -198.926 599.595 -190.08 593.462 -183.674C564.258 -153.175 547.438 -125.224 514.075 -96.1555C383.04 18.0089 304.869 130.048 176.132 245.021C69.5175 340.237 410.99 21.1651 613.226 11.2591C643.084 9.79663 632.448 29.1699 627.542 39.0002C602.771 88.6373 548.55 134.388 500.851 178.1C478.27 198.794 453.501 218.773 431.422 239.63C407.095 262.611 505.903 205.623 539.741 186.646C667.962 114.739 791.108 40.0471 915.28 -33.9681C992.191 -79.813 986.347 -84.7461 1082.67 -119.277C1127.96 -135.512 1122.21 -167.253 1111.08 -143.355C1081.59 -79.9984 1019.82 -23.1824 984.871 39.0002C981.351 45.2612 958.147 77.5178 990.358 75.6816C1044.69 72.5845 1101.4 34.5416 1136.37 14.6775C1182.03 -11.2514 1222.4 -39.143 1273.32 -62.1037C1278.56 -64.4636 1319.26 -81.2572 1310.31 -74.5937C1188.18 16.2583 1056.33 105.148 966.738 207.682C962.52 212.509 912.869 263.764 930.711 269.738C953.819 277.475 1039.15 247.18 1044.99 245.415C1171.28 207.321 1293.16 164.575 1416 123.275"
          stroke="url(#paint0_linear_215_1707)"
          strokeWidth="7"
          strokeLinecap="round"
          className={preventAnim ? "" : "svg-elem-1"}
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_215_1707"
          x1="1416"
          y1="29.996"
          x2="-58"
          y2="29.9959"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFF64"></stop>
          <stop offset="1" stopColor="#FFFFEF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SvgModule;
