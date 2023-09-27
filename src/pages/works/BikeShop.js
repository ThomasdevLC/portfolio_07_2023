import React, { useContext } from "react";
import WorksComponent from "../../components/WorksComponent";
import BackBtn from "../../components/works/BackBtn";
import bike_anim from "../../assets/images/bike_anim.webp";
import bike_final from "../../assets/images/bike_final.webp";
import bike_shop from "../../assets/images/bike_shop.webp";
import transition from "../../utils/transitions";
import { PreventContext } from "../../context/PreventContext";

const Portfolio = () => {
  const { setPreventAnim } = useContext(PreventContext);
  setPreventAnim(true);

  return (
    <div className="bikeshop__container">
      <BackBtn />
      <WorksComponent />

      <div className="bikeshop__description">
        <img src={bike_anim} alt="animation projet bike shop" />
        <img src={bike_final} alt="page lien boutique projet bike shop" />
        <img src={bike_shop} alt="page boutique projet bike shop" />
      </div>
    </div>
  );
};

export default transition(Portfolio);
