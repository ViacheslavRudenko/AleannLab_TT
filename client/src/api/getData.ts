import axios from "axios";
import config from "./token";

export const getData = () => {
  return axios.get(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data",
    config
  );
};
