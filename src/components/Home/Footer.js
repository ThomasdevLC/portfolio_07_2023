import React from "react";
import background from "../../assets/images/header_background.jpg";
import chart from "../../assets/images/chart.png";
import mark from "../../assets/images/mark.png";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.1), white), url(${background})`,
      }}
    >
      <div className="footer__border"></div>
      <div className="footer__box">
        <div className="footer__box__mark">
          <img src={mark} alt="mark" />
        </div>
        <div className="footer__box__chart">
          <img src={chart} alt="chart" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
