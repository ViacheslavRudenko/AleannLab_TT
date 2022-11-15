import { JobsState, JobAction, JobActionTypes } from "./types";

export const initialState: JobsState = {
  loading: false,
  err: "",
  data: [],
};

const reducerJobs = (state = initialState, action: JobAction): JobsState => {
  switch (action.type) {
    case JobActionTypes.FETCH_JOBS: {
      return { loading: true, err: "", data: [] };
    }
    case JobActionTypes.FETCH_JOBS_SUCCESS: {
      return { loading: false, err: "", data: action.payload };
    }
    case JobActionTypes.FETCH_JOBS_ERROR: {
      return { loading: false, err: action.payload, data: [] };
    }

    default:
      return state;
  }
};
export default reducerJobs;
