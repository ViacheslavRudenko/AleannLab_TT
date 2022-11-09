import { combineReducers } from "redux";
import reducerJobs from "./Jobs/reducer";

export const rootReducer = combineReducers({
  JobsData: reducerJobs,
});
export type RootState = ReturnType<typeof rootReducer>;
