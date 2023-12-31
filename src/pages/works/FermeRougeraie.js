import React, { useContext } from "react";
import WorksComponent from "../../components/WorksComponent";
import BackBtn from "../../components/works/BackBtn";
import farmProducts from "../../assets/images/ferme_rougeraie_about.webp";
import farmAbout from "../../assets/images/ferme_rougeraie_products.webp";
import transition from "../../utils/transitions";
import { PreventContext } from "../../context/PreventContext";

const FermeRougeraie = () => {
  const { setPreventAnim } = useContext(PreventContext);

  setPreventAnim(true);

  return (
    <div className="farm__container">
      <BackBtn />
      <WorksComponent />
      <div className="farm__description">
        <img className="farm__description__image-one" src={farmProducts} alt="image projet ferme de la rougeraie page a propos" />
        <img className="farm__description__image-two" src={farmAbout} alt="image projet ferme de la rougeraie page produits" />
      </div>
    </div>
  );
};

export default transition(FermeRougeraie);
