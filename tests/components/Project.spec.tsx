import shallowSetup from "./mock.spec";
import toJson from "enzyme-to-json";

test("should render Project component", () => {
  const { projectWrapper, props } = shallowSetup();

  expect(projectWrapper.find("img").hasClass("test-project-img")).toBe(true);
  expect(projectWrapper.find(".test-project-title").text()).toBe(
    props.project[0].title
  );
  expect(projectWrapper.find(".test-project-desc").text()).toBe(
    props.project[0].description
  );
  expect(projectWrapper.find(".test-project-cat-btn").text()).toBe(
    props.project[0].category
  );
  expect(projectWrapper.find(".test-project-rm-btn").text()).toBe("Remove");
  expect(projectWrapper.find(".test-project-up-btn").text()).toBe("Update");
});

test("should render Project component Snapshot", () => {
  const { projectWrapper } = shallowSetup();

  expect(toJson(projectWrapper)).toMatchSnapshot();
});
