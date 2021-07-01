import shallowSetup from "./mock.spec";
import toJson from "enzyme-to-json";

test("should render EditProject component", () => {
  const { editProjectWrapper, props } = shallowSetup();

  expect(editProjectWrapper.find("div").first().hasClass("form__wrapper")).toBe(
    true
  );
  expect(editProjectWrapper.find("#title").props().value).toBe(
    props.project[0].title
  );
  expect(editProjectWrapper.find("select").props().value).toBe(
    props.project[0].category
  );
  expect(editProjectWrapper.find("option").first().text()).toBe(
    props.project[0].category
  );
  expect(editProjectWrapper.find("#image").props().value).toBe(
    props.project[0].image
  );
  expect(editProjectWrapper.find("#description").props().value).toBe(
    props.project[0].description
  );
});

test("should render EditProject component Snapshot", () => {
  const { editProjectWrapper } = shallowSetup();

  expect(toJson(editProjectWrapper)).toMatchSnapshot();
});
