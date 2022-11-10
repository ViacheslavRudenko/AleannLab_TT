import { combineReducers } from "redux";
import reducerJobs from "./Jobs/reducer";
import reducerUserActivity from "./UserActivity/reducer";

export const rootReducer = combineReducers({
  JobsData: reducerJobs,
  UserActivity: reducerUserActivity,
});
export type RootState = ReturnType<typeof rootReducer>;
