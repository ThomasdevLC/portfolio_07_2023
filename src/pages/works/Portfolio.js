import React from "react";
import WorksComponent from "../../components/WorksComponent";
import BackBtn from "../../components/works/BackBtn";
import transition from "../../utils/transitions";
import usePrevent from "../../hooks/usePrevent";

const Portfolio = () => {
  usePrevent(true);

  return (
    <div>
      <BackBtn />
      <WorksComponent />
    </div>
  );
};

export default transition(Portfolio);
