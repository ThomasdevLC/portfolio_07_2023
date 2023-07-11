import React, { useEffect, useRef } from "react";
import SplitType from "split-type";

const WorksTitle = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrowElement = arrowRef.current;

    gsap.fromTo(
      arrowElement,
      {
        x: -20,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: ["elastic"],
        delay: 0.6,
      }
    );

    const title = SplitType.create(".workstitle__container__text");
    const splitTitle = title.chars;
    gsap.from(splitTitle, {
      y: 25,
      opacity: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: "back.out",
      duration: 1,
      delay: 0.7,
    });
  }, []);

  return (
    <div className="workstitle">
      <div className="workstitle__ellipse">
        <span
          class="workstitle__ellipse__arrow material-symbols-outlined"
          ref={arrowRef}
        >
          arrow_right_alt
        </span>
      </div>
      <div className="workstitle__container">
        <h2 className="workstitle__container__text">PROJETS 2022 - 2023 </h2>
      </div>
    </div>
  );
};

export default WorksTitle;
