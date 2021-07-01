import filterProject from "../../src/reducers/filter";

describe("filter reducer", () => {
  it("should return the initial state", () => {
    expect(
      filterProject(undefined, {
        type: "",
        payload: { value: "All" },
      })
    ).toMatchSnapshot();
  });

  it("should handle CHANGE_FILTER", () => {
    expect(
      filterProject("All", {
        type: "CHANGE_FILTER",
        payload: { value: "All" },
      })
    ).toMatchSnapshot();
  });
});
