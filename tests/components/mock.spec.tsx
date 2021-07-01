import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import Details from "../../src/components/Details";
import Header from "../../src/components/Header";
import Home from "../../src/components/Home";
import Project from "../../src/components/Project";
import ProjectFilter from "../../src/components/ProjectFilter";
import Projects from "../../src/components/Projects";
import EditProject from "../../src/components/EditProject";

configure({ adapter: new Adapter() });

const shallowSetup = () => {
  const props = {
    project: [
      {
        id: "1225232",
        title: "Where can I get some?",
        description: "PageMaker including versions of Lorem Ipsum.",
        image: "https://miro.medium.com/max/1000/1*9xsPgsjcFOnwhgPwtsO_HQ.jpeg",
        category: "High",
        editing: false,
      },
    ],
  };

  const detailsWrapper = shallow(
    <Details projects={props.project} id={props.project[0].id} />
  );
  const projectsWrapper = shallow(
    <Projects
      projects={props.project}
      handleRemoveProject={jest.fn()}
      handleUpdateProject={jest.fn()}
      filter="All"
      filterProject={jest.fn()}
    />
  );
  const projectFilterWrapper = shallow(
    <ProjectFilter filter="All" handleFilterChange={jest.fn()} />
  );
  const projectWrapper = shallow(
    <Project
      id={props.project[0].id}
      title={props.project[0].title}
      description={props.project[0].description}
      image={props.project[0].image}
      category={props.project[0].category}
      handleRemoveProject={jest.fn()}
      handleUpdateProject={jest.fn()}
    />
  );
  const editProjectWrapper = shallow(
    <EditProject project={props.project[0]} updateProject={jest.fn()} />
  );
  const headerWrapper = shallow(<Header />);
  const homeWrapper = shallow(<Home />);

  return {
    props,
    projectWrapper,
    projectsWrapper,
    detailsWrapper,
    headerWrapper,
    projectFilterWrapper,
    editProjectWrapper,
    homeWrapper,
  };
};

test("should render Details component", () => {
  const { detailsWrapper, props } = shallowSetup();

  expect(detailsWrapper.find(".test-title").text()).toEqual(
    props.project[0].title
  );
  expect(detailsWrapper.find(".test-desc").text()).toBe(
    ` 👀 ${props.project[0].description}`
  );
  expect(detailsWrapper.find(".test-btn").text()).toBe("Back to home");
  expect(detailsWrapper.find("img").hasClass("test-img")).toBe(true);
});

test("should render Details component Snapshot", () => {
  const { detailsWrapper } = shallowSetup();

  expect(toJson(detailsWrapper)).toMatchSnapshot();
});

export default shallowSetup;
