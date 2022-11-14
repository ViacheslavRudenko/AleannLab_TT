import { AxiosRequestConfig } from "axios";

const token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

const config: AxiosRequestConfig = {
  headers: { Authorization: `Bearer ${token}` },
};

export default config;
