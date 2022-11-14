import { ReactElement } from "react";
import styles from "./index.module.scss";
import { ErrPageType } from "./types";

const Error = ({ err }: ErrPageType): ReactElement => {
  return <p className={styles.err}>{err}</p>;
};

export default Error;
