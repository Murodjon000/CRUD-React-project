import { Dispatch } from "redux";
import { connect } from "react-redux";
import { removeProject, editProject, filterProject } from "../actions/index";
import { ProjectType, RootAction, RootState } from "../../types";
import ProjectsList from '../components/Projects'

const getProjects = (projects: ProjectType[], filter: string) => {
    if (filter === "All") {
      return projects;
    }
    return projects.filter((project: ProjectType) => project.category === filter);
  };
  
  const mapStateToProps = (state: RootState) => ({
    projects: getProjects(state.projects, state.filter),
    filter: state.filter,
  });
  
  const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
    handleRemoveProject: (id: string) => dispatch(removeProject(id)),
    handleUpdateProject: (id: string, data: ProjectType) =>
      dispatch(editProject(id, data)),
    filterProject: (category: string) => dispatch(filterProject(category)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);