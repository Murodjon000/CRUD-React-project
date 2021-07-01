import {
  CREATE_PROJECT,
  EDIT_PROJECT,
  REMOVE_PROJECT,
  UPDATE_PROJECT,
} from "../actions";
import { defaultState } from "../helper/defaultState";

const projectReducer = (
  state = defaultState,
  action: { type: string; payload: any }
): any => {
  if (action.type === CREATE_PROJECT) {
    const { project } = action.payload;
    return [...state, project];
  }

  if (action.type === REMOVE_PROJECT) {
    const { id } = action.payload;
    return state.filter((project) => project.id !== id);
  }

  if (action.type === EDIT_PROJECT) {
    const { id } = action.payload;
    return state.map((project) =>
      project.id === id ? { ...project, editing: !project.editing } : project
    );
  }

  if (action.type === UPDATE_PROJECT) {
    const { id, data } = action.payload;
    return state.map((project) => {
      if (project.id === id) {
        return {
          ...project,
          title: data.title,
          description: data.description,
          image: data.image,
          category: data.category,
          editing: false,
        };
      } else {
        return project;
      }
    });
  }

  return state;
};

export default projectReducer;
