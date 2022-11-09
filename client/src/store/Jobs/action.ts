import { Dispatch } from "redux";
import { getAllJobs } from "../../api/getData";
import { JobActionTypes, JobAction } from "./types";

const axiosData = () => {
  return async (dispatch: Dispatch<JobAction>) => {
    dispatch({ type: JobActionTypes.FETCH_JOBS });
    await getAllJobs()
      .then((resp) =>
        dispatch({
          type: JobActionTypes.FETCH_JOBS_SUCCESS,
          payload: resp.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: JobActionTypes.FETCH_JOBS_ERROR,
          payload: err.message,
        })
      );
  };
};

export { axiosData };
