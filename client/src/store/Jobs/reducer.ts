import { JobsState, UserAction, UserActionTypes } from "./types";

export const initialState: JobsState = {
  loading: false,
  err: "",
  data: [],
};

const reducerData = (state = initialState, action: UserAction): JobsState => {
  switch (action.type) {
    case UserActionTypes.FETCH_JOBS: {
      return { loading: true, err: "", data: [] };
    }
    case UserActionTypes.FETCH_JOBS_SUCCESS: {
      return { loading: true, err: "", data: action.payload };
    }
    case UserActionTypes.FETCH_JOBS_ERROR: {
      return { loading: false, err: action.payload, data: [] };
    }

    default:
      return state;
  }
};
export default reducerData;
