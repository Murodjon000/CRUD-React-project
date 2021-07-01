import { StateType, ActionType } from "typesafe-actions";

export type RootAction = ActionType<typeof import("./src/actions")>;
export type RootState = StateType<
  ReturnType<typeof import("./src/reducers").default>
>;

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  editing: boolean;
};

export type FirstProjectType = {
  title: string;
  description: string;
  image: string;
  category: string;
  editing: boolean;
};
