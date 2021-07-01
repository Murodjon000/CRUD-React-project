/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ProjectType, FirstProjectType } from "../../types";

export const CREATE_PROJECT = "CREATE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";

export const createProject = (projectData: FirstProjectType) => {
  const id = Math.ceil(Date.now() * Math.random()).toString();
  const project = {
    ...projectData,
    id: id,
  };
  return { type: CREATE_PROJECT, payload: { project } };
};

export const removeProject = (id: string) => ({
  type: REMOVE_PROJECT,
  payload: { id },
});

export const editProject = (id: string, data: ProjectType) => ({
  type: EDIT_PROJECT,
  payload: { id, data },
});

export const updateProject = (id: string, data: ProjectType) => ({
  type: UPDATE_PROJECT,
  payload: { id, data },
});

export const filterProject = (value: string) => ({
  type: CHANGE_FILTER,
  payload: { value },
});
