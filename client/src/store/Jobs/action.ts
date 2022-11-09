import { getData } from "../../api/getData";
import { UserActionTypes } from "./types";

const setReques = (request: boolean) => {
  return { type: UserActionTypes.FETCH_JOBS, payload: request };
};
const setData = (data: {}[]) => {
  return { type: UserActionTypes.FETCH_JOBS_SUCCESS, payload: data };
};
const setError = (error: string) => {
  return { type: UserActionTypes.FETCH_JOBS_ERROR, payload: error };
};

const axiosData = () => {
  return async (dispatch: any) => {
    dispatch(setReques(true));
    await getData()
      .then((resp) => dispatch(setData(resp.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};

export { axiosData };
