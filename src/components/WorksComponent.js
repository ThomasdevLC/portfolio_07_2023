import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import worklistData from "../worklist/worklistData";

const WorksComponent = () => {
  const params = useParams();
  const projectId = parseInt(params.id);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = worklistData.find((w) => w.id === projectId);
    setProject(selectedProject);
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container">
      <NavLink to="/">
        <div className="container__backpage"> &#x2191; PORTFOLIO</div>
      </NavLink>
      <h1 className="container__title">{project.title}</h1>
      <div className="project">
        <p className="project__intro">{project.intro}</p>
        <p className="project__pitch">{project.pitch}</p>
      </div>

      <tbody>
        <tr>
          <th align="left">DATE</th>
          <th align="left">STACK</th>
          <th align="left">URL</th>
        </tr>
        <tr>
          <td>
            <strong class="text-sd">UI Design, Art Direction</strong>
          </td>
          <td>
            <strong class="text-sd">Online</strong>
          </td>
          <td>
            <strong class="text-sd">English with Subt.</strong>
          </td>
        </tr>
      </tbody>
    </section>
  );
};

export default WorksComponent;
