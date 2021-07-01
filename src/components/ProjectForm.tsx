import React, { useState, FC } from "react";
import { connect } from "react-redux";
import { createProject } from "../actions/index";
import categories from "../helper/category";
import FormHelper from "./FormHelper";
import Modal from "./Modal";

const ProjectsForm: FC<{ createProject: any }> = ({ createProject }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [id] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("High");
  const [editing] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const state = { title, description, image, category, editing, id };

    createProject(state);

    setTitle("");
    setImage("");
    setDescription("");
    setCategory("");
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal} className="projectBtn">
        Add Project
      </button>
      {showModal ? (
        <Modal>
          <div className="modal__wrapper">
            <span onClick={toggleModal} className="modal__wrapper-icon">
              X
            </span>
          </div>
          <div className="form__wrapper">
            <hr className="form__wrapper-line" />
            <h1>Add new Project</h1>

            <form onSubmit={handleSubmit}>
              <div className="upadte-form-wrapper">
                <label htmlFor="newTitle" className="form-label">
                  Title
                  <FormHelper
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Project title"
                    value={title}
                    className="form-input"
                    id="newTitle"
                  />
                </label>

                <label htmlFor="newCat" className="form-label">
                  Select priority
                  <select
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-input"
                    id="newCat"
                  >
                    {categories.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div>
                <label htmlFor="newImage" className="form-label">
                  Image
                  <FormHelper
                    type="text"
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Project image link"
                    value={image}
                    className="form-input"
                    id="newImage"
                  />
                </label>
                <label htmlFor="newDesc" className="form-label">
                  Description
                  <FormHelper
                    type="textarea"
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Project description"
                    value={description}
                    className="form-input"
                    id="newDesc"
                  />
                </label>
              </div>
              <input
                type="submit"
                value="Create a Project"
                className="primary-btn"
              />
            </form>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default connect(null, { createProject })(ProjectsForm);
