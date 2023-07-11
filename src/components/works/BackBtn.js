import React, { useEffect, useRef } from "react";
import backbtn from "../../assets/images/backbtn.png";
import { NavLink } from "react-router-dom";

const BackBtn = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const scrollRotate = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `rotate(${window.scrollY / 2}deg)`;
      }
    };

    window.addEventListener("scroll", scrollRotate);

    return () => {
      window.removeEventListener("scroll", scrollRotate);
    };
  }, []);

  return (
    <div>
      <NavLink to="/">
        <div className="backpage">
          <img
            src={backbtn}
            id="backhome"
            ref={imageRef}
            alt="bouton retour page d'accueil"
          />
          <div className="backpage__content">
            <span className="backpage__content__icon">
              <i class="fa-solid fa-arrow-left"></i>
            </span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default BackBtn;
