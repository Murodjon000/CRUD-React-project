import shallowSetup from "./mock.spec";
import toJson from "enzyme-to-json";

test("should render Header component", () => {
  const { homeWrapper } = shallowSetup();

  expect(homeWrapper.find("div").first().hasClass("test-home-wrapper")).toBe(
    true
  );
});

test("should render Home component Snapshot", () => {
  const { homeWrapper } = shallowSetup();

  expect(toJson(homeWrapper)).toMatchSnapshot();
});
