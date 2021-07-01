import { combineReducers } from 'redux';
import projects from './project';
import filter from './filter';

export default combineReducers({
  projects,
  filter,
});
