import { connect } from "react-redux";
import { RootState } from "../../types";
import Details from "../components/Details";

const mapStateToProps = (state: RootState) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(Details);
