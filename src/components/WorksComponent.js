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

        <div className="project__table">
          <table>
            <tr>
              <th>DATE</th>
              <th className="project__table__th">STACK</th>
              <th>URL</th>
            </tr>
            <tr>
              <td>{project.period}</td>
              <td className="project__table__td">
                <ul>
                  {project.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </td>{" "}
              <td>{project.url}</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WorksComponent;
