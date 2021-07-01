import React, { FC } from "react";
import { Link } from "@reach/router";

const Project: FC<{
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  handleRemoveProject: any;
  handleUpdateProject: any;
}> = ({
  id,
  title,
  description,
  image,
  category,
  handleRemoveProject,
  handleUpdateProject,
}) => {
  const data = { title, image, description, category };
  return (
    <div className="project__wrapper ">
      <Link to={`/project/${id}`}>
        <div className="project__wrapper-image">
          <img src={image} className="test-project-img" alt="" />
        </div>
      </Link>
      <div className="project__wrapper-info ">
        <h2 className="test-project-title">{title}</h2>
        <p className="text-link test-project-desc">{description}</p>
        <div className="project__wrapper-info-bottom">
          <button className="text-link test-project-cat-btn" type="button">
            {category}
          </button>
          <span className="line-border" />
          <button
            className="text-link test-project-rm-btn"
            type="button"
            onClick={() => handleRemoveProject(id)}
          >
            Remove
          </button>
          <span className="line-border" />
          <button
            className="text-link test-project-up-btn"
            type="button"
            onClick={() => handleUpdateProject(id, data)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
