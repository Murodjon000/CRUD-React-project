import shallowSetup from "./mock.spec";
import toJson from "enzyme-to-json";

test("should render Header component", () => {
  const { headerWrapper } = shallowSetup();

  expect(headerWrapper.find("header").hasClass("header-test")).toBe(true);
  expect(headerWrapper.find(".header__box_innerBox-logo").text()).toBe(
    "ProjectList"
  );
  expect(headerWrapper.find(".header-btn").text()).toBe("Sign up");
});

test("should render Header component Snapshot", () => {
  const { headerWrapper } = shallowSetup();

  expect(toJson(headerWrapper)).toMatchSnapshot();
});
