import React from "react";
import background from "../../assets/images/header_background.jpg";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.1), white), url(${background})`,
      }}
    >
      <div className="footer__border"></div>
    </div>
  );
};

export default Footer;
