import React, { FC } from "react";
import { navigate } from "@reach/router";
import { ProjectType } from "../../types";

const Details: FC<any> = ({ id, projects }) => {
  const projectFilter = (id: string) => {
    return projects.filter((project: ProjectType) => project.id === id);
  };

  const home = () => navigate("/");
  const project = projectFilter(id)[0];

  return (
    <div className="project__details-wrapper">
      <div className="project__details-wrapper-image">
        <img src={project.image} className="test-img" alt="" />
      </div>
      <div className="project__details-wrapper-box">
        <h1 className="test-title">{project.title}</h1>
        <p className="test-desc"> {`👀 ${project.description}`}</p>

        <button type="button" className="test-btn" onClick={home}>
          Back to home
        </button>
      </div>
    </div>
  );
};

export default Details;
