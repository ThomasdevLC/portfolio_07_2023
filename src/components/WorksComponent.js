import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import worklistData from "../worklist/worklistData";

const WorksComponent = () => {
  const params = useParams();
  const projectId = parseInt(params.id);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = worklistData.find((w) => w.id === projectId);
    setProject(foundProject);
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <NavLink to="/">
        <div className="container__backpage"> &#x2191; PORTFOLIO</div>
      </NavLink>
      <h1>{project.title}</h1>
      <p>{project.intro}</p>
      <p>{project.pitch}</p>
    </section>
  );
};

export default WorksComponent;
