import { CHANGE_FILTER } from "../actions";

const filterProject = (
  state = "All",
  action: { type: string; payload: { value: string } }
): string => {
  if (action.type === CHANGE_FILTER) {
    const { value } = action.payload;
    return value;
  }
  return state;
};

export default filterProject;
