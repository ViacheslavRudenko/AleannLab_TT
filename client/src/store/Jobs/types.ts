export interface JobsState {
  loading: boolean;
  err: string;
  data: Job[];
}

export enum JobActionTypes {
  FETCH_JOBS = "FETCH_JOBS",
  FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS",
  FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR",
}

interface FetchJobsAction {
  type: JobActionTypes.FETCH_JOBS;
}
interface FetchJobsSuccessAction {
  type: JobActionTypes.FETCH_JOBS_SUCCESS;
  payload: Job[];
}
interface FetchJobsErrorAction {
  type: JobActionTypes.FETCH_JOBS_ERROR;
  payload: string;
}
export type JobAction =
  | FetchJobsAction
  | FetchJobsSuccessAction
  | FetchJobsErrorAction;

export interface Job {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  adress: string;
  benefits: string[];
  location: any[];
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  discription: string;
  employment_type: string[];
}
