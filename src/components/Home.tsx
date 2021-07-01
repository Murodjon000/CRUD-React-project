import React, { FC } from "react";
import ProjectForm from "./ProjectForm";
import ProjectsList from "../containers/ProjectsContainer";

const Home: FC<any> = () => (
  <div className="test-home-wrapper">
    <ProjectForm />
    <ProjectsList />
  </div>
);

export default Home;
