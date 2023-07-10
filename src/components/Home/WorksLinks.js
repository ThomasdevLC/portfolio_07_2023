import React from "react";
import { NavLink } from "react-router-dom";
import worklist from "../../worklist/worklistData";

const WorksLinks = () => {
  return (
    <div>
      <p>hello</p>
      {worklist.map((item) => (
        <NavLink
          to={`/${item.link}/${item.id}`}
          key={item.id}
          className={`work work-${item.id} overlay`}
        ></NavLink>
      ))}
    </div>
  );
};

export default WorksLinks;
