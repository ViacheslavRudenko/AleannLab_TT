import { ErrorTypes } from "./types";

const CustomErrorMessage = ({ err }: ErrorTypes) => {
  return <p className="text-red-700">{err}</p>;
};
export default CustomErrorMessage;
