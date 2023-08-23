import React, { useEffect, useContext } from "react";
import WorksComponent from "../../components/WorksComponent";
import BackBtn from "../../components/works/BackBtn";
import farmProducts from "../../assets/images/ferme_rougeraie_about.png";
import farmAbout from "../../assets/images/ferme_rougeraie_products.png";
import transition from "../../utils/transitions";
import DataContext from "../../context/DataContext";

const FermeRougeraie = () => {
  const { handleDataFromChild } = useContext(DataContext);

  useEffect(() => {
    const data = true;
    handleDataFromChild(data);
  }, [handleDataFromChild]);

  return (
    <div className="farm__container">
      <BackBtn />
      <WorksComponent />
      <div className="farm__description">
        <img
          className="farm__description__image-one"
          src={farmProducts}
          alt="image projet ferme de la rougeraie page a propos"
        />
        <img
          className="farm__description__image-two"
          src={farmAbout}
          alt="image projet ferme de la rougeraie page produits"
        />
      </div>
    </div>
  );
};

export default transition(FermeRougeraie);
