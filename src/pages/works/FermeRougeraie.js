import React from "react";
import WorksComponent from "../../components/WorksComponent";
import farmProducts from "../../assets/images/ferme_rougeraie_about.png";
import farmAbout from "../../assets/images/ferme_rougeraie_products.png";

const FermeRougeraie = () => {
  return (
    <div className="farm__container">
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

export default FermeRougeraie;
