import configureMockStore from "redux-mock-store";
import { defaultState } from "../../src/helper/defaultState";
import {
  createProject,
  editProject,
  filterProject,
  removeProject,
  updateProject,
} from "../../src/actions";

const mockStore = configureMockStore();
const store = mockStore({});
describe("action creators", () => {
  it("creates CREATE_PROJECT when creating a project was successful", () => {
    store.dispatch(createProject(defaultState[0]));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("creates REMOVE_PROJECT when creating a project was successful", () => {
    store.dispatch(removeProject("12252"));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("creates EDIT_PROJECT when creating a project was successful", () => {
    store.dispatch(editProject("12212352", defaultState[1]));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("creates UPDATE_PROJECT when creating a project was successful", () => {
    store.dispatch(updateProject("12212352", defaultState[1]));
    expect(store.getActions()).toMatchSnapshot();
  });

  it("creates FILTER_PROJECT when creating a project was successful", () => {
    store.dispatch(filterProject("High"));
    expect(store.getActions()).toMatchSnapshot();
  });
});
