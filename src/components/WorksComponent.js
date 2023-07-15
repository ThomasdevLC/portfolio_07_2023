import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import worklistData from "../worklist/worklistData";

const WorksComponent = () => {
  const params = useParams();
  const projectId = parseInt(params.id);
  const [project, setProject] = useState(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const selectedProject = worklistData.find((w) => w.id === projectId);
    setProject(selectedProject);
  }, [projectId]);

  useEffect(() => {
    if (project) {
      const containerElement = containerRef.current;
      gsap.fromTo(
        containerElement,
        { opacity: 0, y: -140 },
        { opacity: 1, duration: 0.8, y: 0, ease: "power2.out", delay: 0.7 }
      );
      const titleElement = titleRef.current;
      gsap.fromTo(
        titleElement,
        { opacity: 0, y: 65 },
        { opacity: 1, duration: 0.8, y: 0, ease: "power2.out", delay: 1.2 }
      );
    }
  }, [project]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container">
      <h1 className="container__title" ref={containerRef}>
        <span className="container__title__span" ref={titleRef}>
          {project.title}
        </span>
      </h1>
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
