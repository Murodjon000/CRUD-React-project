import React, { useState, FC } from "react";
import { ProjectType } from "../../types";
import categories from "../helper/category";
import FormHelper from "./FormHelper";

const EditProject: FC<{ project: ProjectType; updateProject: any }> = ({
  project,
  updateProject,
}) => {
  const [title, setTitle] = useState(project.title);
  const [description, setDescription] = useState(project.description);
  const [image, setImage] = useState(project.image);
  const [category, setCategory] = useState(project.category);
  const [editing] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { title, description, image, category, editing };

    updateProject(project.id, data);
    setTitle("");
    setImage("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="form__wrapper">
      <hr className="form__wrapper-line" />
      <h1>Update Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="upadte-form-wrapper">
          <label htmlFor="title">
            Title
            <FormHelper
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Project title"
              value={title}
              className="form-update-input"
              id="title"
            />
          </label>
          <label htmlFor="category">
            Select Priority
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-update-input"
            >
              {categories.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label htmlFor="image">
          Image link
          <FormHelper
            type="text"
            onChange={(e) => setImage(e.target.value)}
            placeholder="Project Image link"
            value={image}
            className="form-update-input"
            id="image"
          />
        </label>
        <label htmlFor="description">
          Description
          <FormHelper
            type="textarea"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Project description"
            value={description}
            className="form-update-input"
            id="description"
          />
        </label>
        <input type="submit" value="Update Project" className="primary-btn" />
      </form>
    </div>
  );
};

export default EditProject;
