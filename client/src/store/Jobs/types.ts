export interface JobsState {
  loading: boolean;
  err: string;
  data: any[];
}

export enum UserActionTypes {
  FETCH_JOBS = "FETCH_JOBS",
  FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS",
  FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR",
}

interface FetchJobsAction {
  type: UserActionTypes.FETCH_JOBS;
}
interface FetchJobsSuccessAction {
  type: UserActionTypes.FETCH_JOBS_SUCCESS;
  payload: any[];
}
interface FetchJobsErrorAction {
  type: UserActionTypes.FETCH_JOBS_ERROR;
  payload: string;
}
export type UserAction =
  | FetchJobsAction
  | FetchJobsSuccessAction
  | FetchJobsErrorAction;
