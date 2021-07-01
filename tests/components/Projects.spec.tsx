import shallowSetup from "./mock.spec";
import toJson from "enzyme-to-json";

test("should render Projects component", () => {
  const { projectsWrapper } = shallowSetup();

  expect(
    projectsWrapper.find("div").first().hasClass("test-projects-wrapper")
  ).toBe(true);
});

test("should render Projects component Snapshot", () => {
  const { projectsWrapper } = shallowSetup();

  expect(toJson(projectsWrapper)).toMatchSnapshot();
});
