import React, { FC } from "react";
import Project from "./Project";
import ProjectFilter from "./ProjectFilter";
import { ProjectType } from "../../types";
import EditProject from "../containers/EditProjectContainer";

const ProjectsList: FC<{
  projects: ProjectType[];
  handleRemoveProject: any;
  handleUpdateProject: any;
  filter: string;
  filterProject: any;
}> = (
  { projects, handleRemoveProject, handleUpdateProject, filter, filterProject } //eslint-disable-line
) => (
  <div className="test-projects-wrapper">
    <ProjectFilter filter={filter} handleFilterChange={filterProject} />
    <div className="projects__container">
      {projects
        ? projects.map((project: ProjectType) =>
            project.editing ? (
              <EditProject key={project.id} />
            ) : (
              <Project
                id={project.id}
                title={project.title}
                description={project.description}
                key={project.id}
                image={project.image}
                category={project.category}
                handleRemoveProject={handleRemoveProject}
                handleUpdateProject={handleUpdateProject}
              />
            )
          )
        : "No Projects found"}
    </div>
  </div>
);

export default ProjectsList;
