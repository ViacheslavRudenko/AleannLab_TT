import { AxiosRequestConfig } from "axios";

const token: string = process.env.REACT_APP_API_TOKEN || "";

const config: AxiosRequestConfig = {
  headers: { Authorization: `Bearer ${token}` },
};

export default config;
