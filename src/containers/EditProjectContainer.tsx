import { connect } from "react-redux";
import { updateProject } from "../actions/index";
import { ProjectType, RootState } from "../../types";
import EditProject from "../components/EditProject";

const getProject = (projects: ProjectType[]) => {
  const project = projects.filter(
    (project: ProjectType) => project.editing === true
  );
  return project[0];
};

const mapStateToProps = (state: RootState) => ({
  project: getProject(state.projects),
});

export default connect(mapStateToProps, { updateProject })(EditProject);
