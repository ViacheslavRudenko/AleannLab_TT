import axios from "axios";
import { Job } from "../store/Jobs/types";
import config from "./token";

export const getAllJobs = () => {
  return axios.get<Job[]>(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data",
    config
  );
};
