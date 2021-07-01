import shallowSetup from "./mock.spec";
import toJson from "enzyme-to-json";

test("should render ProjectFilter component", () => {
  const { projectFilterWrapper } = shallowSetup();

  expect(
    projectFilterWrapper.find("div").first().hasClass("filter__wrapper")
  ).toBe(true);
  expect(projectFilterWrapper.find("select").hasClass("test-filter")).toBe(
    true
  );
  expect(projectFilterWrapper.find("option").first().text()).toBe("All");
});

test("should render ProjectFilter component Snapshot", () => {
  const { projectFilterWrapper } = shallowSetup();

  expect(toJson(projectFilterWrapper)).toMatchSnapshot();
});
