import projectReducer from "../../src/reducers/project";
import { defaultState } from "../../src/helper/defaultState";

describe("projects reducer", () => {
  it("should return the initial state", () => {
    //eslint-disable-next-line
    expect(
      projectReducer(undefined, { payload: {}, type: "" })
    ).toMatchSnapshot();
  });

  it("should handle CREATE_PROJECT", () => {
    expect(
      projectReducer(defaultState, {
        type: "CREATE_PROJECT",
        payload: { defaultState },
      })
    ).toMatchSnapshot();
  });

  it("should handle REMOVE_PROJECT", () => {
    expect(
      projectReducer(defaultState, {
        type: "REMOVE_PROJECT",
        payload: { defaultState },
      })
    ).toMatchSnapshot();
  });

  it("should handle EDIT_PROJECT", () => {
    expect(
      projectReducer(defaultState, {
        type: "EDIT_PROJECT",
        payload: { defaultState },
      })
    ).toMatchSnapshot();
  });

  it("should handle UPDATE_PROJECT", () => {
    expect(
      projectReducer(defaultState, {
        type: "UPDATE_PROJECT",
        payload: { defaultState },
      })
    ).toMatchSnapshot();
  });
});
