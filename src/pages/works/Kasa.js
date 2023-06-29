import React from "react";
import WorksComponent from "../../components/WorksComponent";
import kasaXl from "../../assets/images/kasa_xl.png";
import kasaXs from "../../assets/images/kasa_xs.png";

const Kasa = () => {
  return (
    <div className="kasa__container">
      <WorksComponent />
      <div className="kasa__description">
        <img src={kasaXl} alt="image projet kasa version desktop" />
        <img src={kasaXs} alt="image projet kasa version mobile" />
      </div>
    </div>
  );
};

export default Kasa;
