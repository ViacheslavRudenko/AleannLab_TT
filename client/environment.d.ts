export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_TOKEN: string;
      REACT_APP_MAP_KEY: string;
    }
  }
}
